using ErrorOr;
using MediatR;
using PrivateImageCloud.Application.Invitations.Common;

namespace PrivateImageCloud.Application.Invitations.Commands.Create;

public class CreateInvitationCommandHandler : IRequestHandler<CreateInvitationCommand, ErrorOr<InvitationResult>>
{
  public Task<ErrorOr<InvitationResult>> Handle(CreateInvitationCommand request, CancellationToken cancellationToken)
  {
    throw new NotImplementedException();
  }
}
