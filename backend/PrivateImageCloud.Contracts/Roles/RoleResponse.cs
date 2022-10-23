using PrivateImageCloud.Entities;

namespace PrivateImageCloud.Contracts.Roles;

public record RoleResponse(
  Guid Id,
  string Name,
  DateTime Created,
  DateTime? Updated,
  User? Creator,
  User? Editor
);