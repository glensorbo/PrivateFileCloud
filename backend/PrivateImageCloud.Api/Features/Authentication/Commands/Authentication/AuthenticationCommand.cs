using PrivateImageCloud.Api.Features.Authentication.Common;

namespace PrivateImageCloud.Api.Features.Authentication.Commands.Authentication;

public record AuthenticationCommand(string Code) : IRequest<ErrorOr<AuthenticationResult>>;