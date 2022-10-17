using ErrorOr;
using MediatR;
using PrivateImageCloud.Application.Authentication.Common;

namespace PrivateImageCloud.Application.Authentication.Commands.Register;

public record RegisterCommand(
  string FirstName,
  string LastName,
  string Email,
  string Password
) : IRequest<ErrorOr<AuthenticationResult>>;