using PrivateImageCloud.Domain.Entities;

namespace PrivateImageCloud.Application.Common.Interfaces.Authentication;

public interface IJwtGenerator
{
  string GenerateToken(User user);
}