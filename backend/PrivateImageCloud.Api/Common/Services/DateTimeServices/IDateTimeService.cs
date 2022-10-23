namespace PrivateImageCloud.Api.Common.Services.DateTimeServices;

public interface IDateTimeService
{
  DateTime UtcNow { get; }
  DateTime CEST { get; }
}