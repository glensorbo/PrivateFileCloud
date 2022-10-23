using PrivateImageCloud.Entities;

namespace PrivateImageCloud.Api.Features.Authentication.Common;

public record AuthenticationResult(
  User? User,
  string Token,
  bool IsLoggingIn,
  bool IsRegistering
);