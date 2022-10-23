using PrivateImageCloud.Api.Common.Mappers.Authentication;
using PrivateImageCloud.Api.Features.Authentication.Commands.Authentication;
using PrivateImageCloud.Api.Features.Authentication.Common;
using PrivateImageCloud.Api.Features.Authentication.Queries.Login;
using PrivateImageCloud.Contracts.Authentication;

namespace PrivateImageCloud.Api.Controllers;

[Route("api/auth")]
[AllowAnonymous]
public class AuthenticationController : ApiController
{
  private readonly ISender mediator;
  private readonly IAuthenticationMapper authenticationMapper;

  public AuthenticationController(ISender mediator, IAuthenticationMapper authenticationMapper)
  {
    this.mediator = mediator;
    this.authenticationMapper = authenticationMapper;
  }

  [HttpPost]
  public async Task<IActionResult> Authenticate(AuthenticationRequest request)
  {
    var authenticationCommand = new AuthenticationCommand(request.Code);

    ErrorOr<AuthenticationResult> authenticationResult = await mediator.Send(authenticationCommand);

    return authenticationResult.Match(
      result => Ok(authenticationMapper.MapResultToResponse(result)),
      errors => Problem(errors)
    );
  }

  [HttpPost("login")]
  public async Task<IActionResult> Login(LoginRequest request)
  {
    var loginCommand = new LoginCommand(request.Id);

    ErrorOr<AuthenticationResult> authenticationResult = await mediator.Send(loginCommand);

    return authenticationResult.Match(
      result => Ok(authenticationMapper.MapResultToResponse(result)),
      errors => Problem(errors)
    );
  }
}