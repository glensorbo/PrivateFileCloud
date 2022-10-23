using PrivateImageCloud.Api.Features.Authentication.Commands.Authentication;
using PrivateImageCloud.Api.Features.Authentication.Common;
using PrivateImageCloud.Contracts.Authentication;

namespace PrivateImageCloud.Api.Controllers;

[Route("api/auth")]
[AllowAnonymous]
public class AuthenticationController : ApiController
{
  private readonly ISender mediator;

  public AuthenticationController(ISender mediator)
  {
    this.mediator = mediator;
  }

  [HttpPost]
  public async Task<IActionResult> Authenticate(AuthenticationRequest request)
  {
    var authenticationCommand = new AuthenticationCommand(request.Code);

    ErrorOr<AuthenticationResult> authenticationResult = await mediator.Send(authenticationCommand);

    return authenticationResult.Match(
      result => Ok(result),
      errors => Problem(errors)
    );
  }
}