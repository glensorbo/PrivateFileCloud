using PrivateImageCloud.Application.Invitations.Commands.Create;
using PrivateImageCloud.Application.Invitations.Common;
using PrivateImageCloud.Contracts.Invitation;

namespace PrivateImageCloud.Api.Controllers;

[Route("[controller]")]
public class InvitationsController : ApiController
{
  private readonly ISender mediator;

  public InvitationsController(ISender mediator)
  {
    this.mediator = mediator;
  }

  [HttpPost]
  public async Task<IActionResult> CreateInvitation(CreateInvitationRequest request)
  {
    var createInvitationCommand = new CreateInvitationCommand(request.Email);

    ErrorOr<InvitationResult> createInvitationResult = await mediator.Send(createInvitationCommand);

    return createInvitationResult.Match(
      result => Ok(result),
      errors => Problem(errors)
    );
  }
}