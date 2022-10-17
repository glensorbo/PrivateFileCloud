using PrivateImageCloud.Application.Authentication.Commands.Register;
using PrivateImageCloud.Application.Authentication.Common;
using PrivateImageCloud.Application.Authentication.Queries.Login;
using PrivateImageCloud.Contracts.Authentication;
using PrivateImageCloud.Domain.Common.Errors;

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

  [HttpPost("register")]
  public async Task<IActionResult> Register(RegisterRequest request)
  {
    var registerCommand = new RegisterCommand(
      request.FirstName,
      request.LastName,
      request.Email,
      request.Password
    );

    ErrorOr<AuthenticationResult> registerCommandResult = await mediator.Send(registerCommand);

    return registerCommandResult.Match(
      result => Ok(result),
      errors => Problem(errors)
    );
  }

  [HttpPost("login")]
  public async Task<IActionResult> Login(LoginRequest request)
  {
    var loginQuery = new LoginQuery(request.Email, request.Password);

    ErrorOr<AuthenticationResult> loginQueryResult = await mediator.Send(loginQuery);

    if (loginQueryResult.IsError && loginQueryResult.FirstError == Errors.Authentication.InvalidCredentials)
    {
      return Problem(
        statusCode: StatusCodes.Status401Unauthorized,
        title: loginQueryResult.FirstError.Description
      );
    }

    return loginQueryResult.Match(
      result => Ok(result),
      errors => Problem(errors)
    );
  }
}