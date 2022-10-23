using PrivateImageCloud.Contracts.Email;

namespace PrivateImageCloud.Api.Common.Services.EmailServices;

public interface IEmailService
{
  Task<ErrorOr<SendGrid.Response>> SendEmail(SendEmailRequest request);
}