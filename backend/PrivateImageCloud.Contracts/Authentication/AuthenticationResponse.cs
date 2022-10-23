using PrivateImageCloud.Contracts.Roles;
using PrivateImageCloud.Entities;

namespace PrivateImageCloud.Contracts.Authentication;

public record AuthenticationResponse(
  Guid Id,
  string FirstName,
  string LastName,
  string Email,
  DateTime Invited,
  DateTime? Registered,
  DateTime? Updated,
  string Status,
  List<RoleResponse> Roles,
  Image? OriginalProfileImage,
  Image? WebpProfileImage,
  bool IsLoggingIn,
  bool IsRegistering,
  string Token
);