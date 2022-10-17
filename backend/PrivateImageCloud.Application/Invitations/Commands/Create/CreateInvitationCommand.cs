using ErrorOr;
using MediatR;
using PrivateImageCloud.Application.Invitations.Common;

namespace PrivateImageCloud.Application.Invitations.Commands.Create;

public record CreateInvitationCommand(string Email) : IRequest<ErrorOr<InvitationResult>>;