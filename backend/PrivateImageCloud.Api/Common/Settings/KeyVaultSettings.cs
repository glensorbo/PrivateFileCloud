namespace PrivateImageCloud.Api.Common.Settings;

public class KeyVaultSettings
{
  public const string SectionName = "KeyVaultSettings";
  public string DbConnectionString { get; set; } = null!;
}