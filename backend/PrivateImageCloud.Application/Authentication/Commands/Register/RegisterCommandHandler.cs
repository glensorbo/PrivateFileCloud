using ErrorOr;
using MediatR;
using PrivateImageCloud.Application.Authentication.Common;
using PrivateImageCloud.Application.Common.Interfaces.Authentication;
using PrivateImageCloud.Application.Common.Interfaces.Persistence;
using PrivateImageCloud.Domain.Common.Errors;
using PrivateImageCloud.Domain.Entities;

namespace PrivateImageCloud.Application.Authentication.Commands.Register;

public class RegisterCommandHandler : IRequestHandler<RegisterCommand, ErrorOr<AuthenticationResult>>
{
  private readonly IJwtGenerator jwtGenerator;
  private readonly IUserRepository userRepository;

  public RegisterCommandHandler(IJwtGenerator jwtGenerator, IUserRepository userRepository)
  {
    this.jwtGenerator = jwtGenerator;
    this.userRepository = userRepository;
  }

  public async Task<ErrorOr<AuthenticationResult>> Handle(RegisterCommand command, CancellationToken cancellationToken)
  {
    await Task.CompletedTask;

    if (userRepository.GetUserByEmail(command.Email) is not null)
    {
      return Errors.User.DuplicateEmail;
    }

    var user = new User
    {
      FirstName = command.FirstName,
      LastName = command.LastName,
      Email = command.Email,
      Password = command.Password
    };

    userRepository.Add(user);

    var token = jwtGenerator.GenerateToken(user);

    return new AuthenticationResult(
      user,
      token
    );
  }
}