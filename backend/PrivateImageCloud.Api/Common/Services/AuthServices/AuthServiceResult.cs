namespace PrivateImageCloud.Api.Common.Services.AuthServices;

public record AuthServiceResult(
  Guid? UserId,
  bool IsAdmin,
  bool IsAuthorized
);