using PrivateImageCloud.Api.Common.Mappers.Roles;
using PrivateImageCloud.Api.Features.Authentication.Common;
using PrivateImageCloud.Contracts.Authentication;

namespace PrivateImageCloud.Api.Common.Mappers.Authentication;

public class AuthenticationMapper : IAuthenticationMapper
{
  private readonly IRoleMapper roleMapper;

  public AuthenticationMapper(IRoleMapper roleMapper)
  {
    this.roleMapper = roleMapper;
  }

  public AuthenticationResponse MapResultToResponse(AuthenticationResult result)
  {
    return new AuthenticationResponse(
      result.User.Id,
      result.User.FirstName,
      result.User.LastName,
      result.User.Email,
      result.User.Invited,
      result.User.Registered,
      result.User.Updated,
      result.User.Status,
      roleMapper.MapDbListToResponseList(result.User.Roles),
      result.User.OriginalProfileImage,
      result.User.WebpProfileImage,
      result.IsLoggingIn,
      result.IsRegistering,
      result.Token
    );
  }
}