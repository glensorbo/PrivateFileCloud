using PrivateImageCloud.Api.Common.Authentication;
using PrivateImageCloud.Api.Common.Persistence;
using PrivateImageCloud.Api.Features.Authentication.Common;

namespace PrivateImageCloud.Api.Features.Authentication.Queries.Login;

public class LoginCommandHandler : IRequestHandler<LoginCommand, ErrorOr<AuthenticationResult>>
{
  private readonly DataContext dataContext;
  private readonly IJwtGenerator jwtGenerator;

  public LoginCommandHandler(DataContext dataContext, IJwtGenerator jwtGenerator)
  {
    this.dataContext = dataContext;
    this.jwtGenerator = jwtGenerator;
  }

  public async Task<ErrorOr<AuthenticationResult>> Handle(LoginCommand request, CancellationToken cancellationToken)
  {
    var user = await dataContext.Users.FindAsync(new object?[] { request.Id }, cancellationToken: cancellationToken);

    if (user is null)
    {
      return Errors.Authentication.Unauthorized;
    }

    var token = jwtGenerator.GenerateUserToken(user);

    return new AuthenticationResult(user, token, true, false);

  }
}
