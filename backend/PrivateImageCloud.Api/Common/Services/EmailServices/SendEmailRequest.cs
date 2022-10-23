namespace PrivateImageCloud.Contracts.Email;

public record SendEmailRequest(
  string Subject,
  string ReceiverEmail,
  string ReceiverName,
  string PlainTextContent,
  string HtmlContent
);