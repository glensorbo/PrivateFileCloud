using PrivateImageCloud.Domain.Entities;

namespace PrivateImageCloud.Application.Authentication.Common;

public record AuthenticationResult(
  User User,
  string Token
);