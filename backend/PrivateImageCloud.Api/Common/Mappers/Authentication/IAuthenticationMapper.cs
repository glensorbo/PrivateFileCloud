using PrivateImageCloud.Api.Features.Authentication.Common;
using PrivateImageCloud.Contracts.Authentication;

namespace PrivateImageCloud.Api.Common.Mappers.Authentication;

public interface IAuthenticationMapper
{
  AuthenticationResponse MapResultToResponse(AuthenticationResult result);
}