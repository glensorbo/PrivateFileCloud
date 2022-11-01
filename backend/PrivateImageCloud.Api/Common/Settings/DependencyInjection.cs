namespace PrivateImageCloud.Api.Common.Settings;

public static class DependencyInjection
{
  public static IServiceCollection AddSettings(
    this IServiceCollection services,
    ConfigurationManager configuration)

  {
    AddKeyVaultSettings(services, configuration);
    AddJwtSettings(services, configuration);
    AddGoogleAuthSettings(services, configuration);
    AddSendGridSettings(services, configuration);

    return services;
  }

  private static void AddKeyVaultSettings(IServiceCollection services, ConfigurationManager configuration)
  {
    var keyVaultSettings = new KeyVaultSettings();

    configuration.Bind(KeyVaultSettings.SectionName, keyVaultSettings);

    if (string.IsNullOrEmpty(keyVaultSettings.KeyVaultUri))
    {
      keyVaultSettings.KeyVaultUri = Environment.GetEnvironmentVariable("KeyVaultUri")!;
    }

    services.AddSingleton(Options.Create(keyVaultSettings));
  }

  private static void AddSendGridSettings(IServiceCollection services, ConfigurationManager configuration)
  {
    var sendGridSettings = new SendGridSettings();

    configuration.Bind(SendGridSettings.SectionName, sendGridSettings);

    services.AddSingleton(Options.Create(sendGridSettings));

    if (string.IsNullOrEmpty(sendGridSettings.FromEmail))
    {
      sendGridSettings.FromEmail = Environment.GetEnvironmentVariable("SGFromEmail")!;
    }

    if (string.IsNullOrEmpty(sendGridSettings.FromName))
    {
      sendGridSettings.FromName = Environment.GetEnvironmentVariable("SGFromName")!;
    }
  }

  private static void AddGoogleAuthSettings(IServiceCollection services, ConfigurationManager configuration)
  {
    var googleAuthSettings = new GoogleAuthSettings();
    configuration.Bind(GoogleAuthSettings.SectionName, googleAuthSettings);

    services.AddSingleton(Options.Create(googleAuthSettings));
  }

  private static void AddJwtSettings(IServiceCollection services, ConfigurationManager configuration)
  {
    var jwtSettings = new JwtSettings();

    configuration.Bind(JwtSettings.SectionName, jwtSettings);

    services.AddSingleton(Options.Create(jwtSettings));

    if (string.IsNullOrEmpty(jwtSettings.Secret))
    {
      jwtSettings.Secret = Environment.GetEnvironmentVariable("JwtSecret")!;
    }

    if (jwtSettings.ExpiryMinutes < 1)
    {
      jwtSettings.ExpiryMinutes = int.Parse(Environment.GetEnvironmentVariable("ExpiryMinutes")!);
    }

    if (string.IsNullOrEmpty(jwtSettings.Issuer))
    {
      jwtSettings.Issuer = Environment.GetEnvironmentVariable("JwtIssuer")!;
    }

    if (string.IsNullOrEmpty(jwtSettings.Audience))
    {
      jwtSettings.Audience = Environment.GetEnvironmentVariable("JwtAudience")!;
    }
  }
}