using System.Security.Claims;

namespace PrivateImageCloud.Api.Common.Services.AuthServices;

public interface IAuthService
{
  AuthServiceResult CheckAuth(ClaimsPrincipal userContext);
}