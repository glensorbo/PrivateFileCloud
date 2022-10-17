using ErrorOr;
using MediatR;
using PrivateImageCloud.Application.Authentication.Common;

namespace PrivateImageCloud.Application.Authentication.Queries.Login;

public record LoginQuery(
  string Email,
  string Password
) : IRequest<ErrorOr<AuthenticationResult>>;