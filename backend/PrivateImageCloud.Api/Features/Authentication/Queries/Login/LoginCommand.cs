using PrivateImageCloud.Api.Features.Authentication.Common;

namespace PrivateImageCloud.Api.Features.Authentication.Queries.Login;

public record LoginCommand(Guid Id) : IRequest<ErrorOr<AuthenticationResult>>;