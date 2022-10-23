namespace PrivateImageCloud.Api.Common.Services.DateTimeServices;

public class DateTimeService : IDateTimeService
{
  public DateTime UtcNow => DateTime.UtcNow;
  public DateTime CEST => TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.FindSystemTimeZoneById("Central European Standard Time"));
}
