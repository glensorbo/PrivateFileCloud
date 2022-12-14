namespace PrivateImageCloud.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class ApiController : ControllerBase
{
  protected IActionResult Problem(List<Error> errors)
  {
    if (errors.Count is 0)
    {
      return Problem();
    }

    if (errors.All(e => e.Type == ErrorType.Validation))
    {
      return ValidationProblem(errors);
    }

    if (errors.Any(e => e.Type == ErrorType.Unexpected))
    {
      return Problem();
    }

    var firstError = errors[0];

    if (firstError.Code == "Authentication.Unauthorized")
    {
      return Unauthorized();
    }

    if (firstError.Code == "Authentication.Forbidden")
    {
      return Forbid();
    }

    return Problem(firstError);
  }

  private IActionResult Problem(Error error)
  {
    var statusCode = error.Type switch
    {
      ErrorType.NotFound => StatusCodes.Status404NotFound,
      ErrorType.Validation => StatusCodes.Status400BadRequest,
      ErrorType.Conflict => StatusCodes.Status409Conflict,
      _ => StatusCodes.Status500InternalServerError
    };

    return Problem(statusCode: statusCode, title: error.Description);
  }

  private IActionResult ValidationProblem(List<Error> errors)
  {
    var modelStateDictionary = new ModelStateDictionary();

    foreach (var error in errors)
    {
      modelStateDictionary.AddModelError(error.Code, error.Description);
    }

    return ValidationProblem(modelStateDictionary);
  }
}