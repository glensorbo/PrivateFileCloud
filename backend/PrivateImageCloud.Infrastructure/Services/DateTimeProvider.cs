using PrivateImageCloud.Application.Common.Interfaces.Services;

namespace PrivateImageCloud.Infrastructure.Services;

public class DateTimeProvider : IDateTimeProvider
{
  public DateTime UtcNow => DateTime.UtcNow;
}
