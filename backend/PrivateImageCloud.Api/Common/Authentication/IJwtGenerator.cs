using PrivateImageCloud.Entities;

namespace PrivateImageCloud.Api.Common.Authentication;

public interface IJwtGenerator
{
  string GenerateUserToken(User user);
  // string GenerateRegistrationToken(Email email);
}