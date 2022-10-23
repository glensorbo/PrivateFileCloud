using System.Net.Http.Headers;
using Microsoft.EntityFrameworkCore;
using PrivateImageCloud.Api.Common.Authentication;
using PrivateImageCloud.Api.Common.Persistence;
using PrivateImageCloud.Api.Common.Services.DateTimeServices;
using PrivateImageCloud.Api.Common.Settings;
using PrivateImageCloud.Api.Features.Authentication.Common;

namespace PrivateImageCloud.Api.Features.Authentication.Commands.Authentication;

public class AuthenticationCommandHandler : IRequestHandler<AuthenticationCommand, ErrorOr<AuthenticationResult>>
{
  private readonly IHttpClientFactory clientFactory;
  private readonly GoogleAuthSettings googleAuthSettings;
  private readonly IJwtGenerator jwtGenerator;
  private readonly IDateTimeService dateTimeService;
  private readonly DataContext dataContext;

  public AuthenticationCommandHandler(
    IHttpClientFactory clientFactory,
    IOptions<GoogleAuthSettings> googleAuthOptions,
    IJwtGenerator jwtGenerator,
    IDateTimeService dateTimeService,
    DataContext dataContext)
  {
    this.clientFactory = clientFactory;
    googleAuthSettings = googleAuthOptions.Value;
    this.jwtGenerator = jwtGenerator;
    this.dateTimeService = dateTimeService;
    this.dataContext = dataContext;
  }

  public async Task<ErrorOr<AuthenticationResult>> Handle(AuthenticationCommand request, CancellationToken cancellationToken)
  {
    ErrorOr<GoogleAuthResponse> authResponse = await ValidateGoogleCode(request.Code, cancellationToken);

    if (authResponse.IsError)
    {
      return authResponse.Errors;
    }

    ErrorOr<GoogleUserInfoResponse> userInfoResponse = await GetGoogleUserInfo(authResponse.Value.Access_token, cancellationToken);

    if (userInfoResponse.IsError)
    {
      return userInfoResponse.Errors;
    }

    var emailFromGoogle = userInfoResponse.Value.Email.ToLower();

    // TODO: Move this to UserRepository
    var user = await dataContext.Users.SingleOrDefaultAsync(user => user.Email.ToLower() == emailFromGoogle, cancellationToken: cancellationToken);

    if (user is null)
    {
      return Errors.Authentication.Unauthorized;
    }

    if (user.Status == "Active")
    {
      // TODO: Access and Refresh tokens.
      var userToken = jwtGenerator.GenerateUserToken(user);

      return new AuthenticationResult(user, userToken, true, false);
    }

    if (user.Status == "Admin")
    {
      var adminRole = await dataContext.Roles.SingleOrDefaultAsync(role => role.Name == "Admin", cancellationToken: cancellationToken);

      if (adminRole is null)
      {
        return Errors.Common.Unexpected;
      }

      user.Roles.Add(adminRole);
      user.Status = "Active";
      user.Updated = dateTimeService.CEST;

      adminRole.Creator = user;

      var userToken = jwtGenerator.GenerateUserToken(user);
      await dataContext.SaveChangesAsync(cancellationToken);

      return new AuthenticationResult(user, userToken, true, false);
    }

    if (user.Status != "Invited")
    {
      return Errors.Authentication.Forbidden;
    }

    user.Status = "Active";

    user.Registered = dateTimeService.CEST;

    var token = jwtGenerator.GenerateUserToken(user);

    await dataContext.SaveChangesAsync(cancellationToken);

    return new AuthenticationResult(user, token, false, true);
  }

  private async Task<ErrorOr<GoogleAuthResponse>> ValidateGoogleCode(string Code, CancellationToken cancellationToken)
  {
    var client = clientFactory.CreateClient("ValidateGoogleCode");

    var endpoint = $"?client_id={googleAuthSettings.ClientId}&client_secret={googleAuthSettings.ClientSecret}&redirect_uri={googleAuthSettings.RedirectUri}&grant_type=authorization_code&code={Code}";

    var authResponse = await client.PostAsync(endpoint, null, cancellationToken);

    var googleAuthResponse = await authResponse.Content.ReadFromJsonAsync<GoogleAuthResponse>(cancellationToken: cancellationToken);

    if (googleAuthResponse is null)
    {
      return Errors.Authentication.Unauthorized;
    }

    return googleAuthResponse;
  }

  private async Task<ErrorOr<GoogleUserInfoResponse>> GetGoogleUserInfo(string AccessToken, CancellationToken cancellationToken)
  {
    var client = clientFactory.CreateClient();

    using var requestMessage = new HttpRequestMessage(HttpMethod.Get, GoogleAuthSettings.UserInfoUri);

    requestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", AccessToken);

    HttpResponseMessage userInfoResponse = await client.SendAsync(requestMessage, cancellationToken);

    var googleUserInfoResponse = await userInfoResponse.Content.ReadFromJsonAsync<GoogleUserInfoResponse>(cancellationToken: cancellationToken);

    if (googleUserInfoResponse is null)
    {
      return Errors.Authentication.Unauthorized;
    }

    return googleUserInfoResponse;
  }

}