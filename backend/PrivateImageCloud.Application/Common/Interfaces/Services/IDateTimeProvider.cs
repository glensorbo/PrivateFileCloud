namespace PrivateImageCloud.Application.Common.Interfaces.Services;

public interface IDateTimeProvider
{
  DateTime UtcNow { get; }

}