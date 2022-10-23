using System.Security.Claims;

namespace PrivateImageCloud.Api.Common.Services.AuthServices;

public class AuthService : IAuthService
{
  public AuthServiceResult CheckAuth(ClaimsPrincipal userContext)
  {
    var isAuthorized = false;

    var userId = userContext.FindFirst("userId")?.Value;
    var isAdmin = userContext.IsInRole("Administrator");

    if (!string.IsNullOrEmpty(userId) || isAdmin)
    {
      isAuthorized = true;
    }

    return new AuthServiceResult(
      string.IsNullOrEmpty(userId) ? null : Guid.Parse(userId),
      isAdmin,
      isAuthorized
    );
  }
}