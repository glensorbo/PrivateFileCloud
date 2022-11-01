namespace PrivateImageCloud.Api.Common.Settings;

public class KeyVaultSettings
{
  public const string SectionName = "KeyVaultSettings";
  public string KeyVaultUri { get; set; } = null!;
  public string DbConnectionString { get; set; } = null!;
}