using PrivateImageCloud.Api.Common.Services.AuthServices;
using PrivateImageCloud.Api.Common.Services.DateTimeServices;
using PrivateImageCloud.Api.Common.Services.EmailServices;

namespace PrivateImageCloud.Api.Common.Services;

public static class DependencyInjection
{
  // public static async Task<IServiceCollection> AddServices(this IServiceCollection services, ConfigurationManager configuration)
  public static IServiceCollection AddServices(this IServiceCollection services)
  {
    // await services.AddAzureKeyVault(configuration);

    // services.AddSingleton<IImageProvider, ImageProvider>();
    services.AddSingleton<IDateTimeService, DateTimeService>();
    services.AddScoped<IAuthService, AuthService>();
    services.AddScoped<IEmailService, EmailService>();

    return services;
  }

  // public async static Task<IServiceCollection> AddAzureKeyVault(
  //  this IServiceCollection services,
  //  ConfigurationManager configuration)
  // {
  //   var azureProvider = new AzureProvider();

  //   configuration.Bind(AzureProvider.SectionName, azureProvider);

  //   services.AddSingleton(Options.Create(azureProvider));

  //   var azureKeyVaultUri = azureProvider.KeyVaultUri;

  //   if (string.IsNullOrEmpty(azureKeyVaultUri))
  //   {
  //     azureProvider.KeyVaultUri = Environment.GetEnvironmentVariable(AzureProvider.KeyVaultUriName)!;
  //   }

  //   var keyVaultEndpoint = new Uri(azureProvider.KeyVaultUri);

  //   // configuration.AddAzureKeyVault(keyVaultEndpoint, new DefaultAzureCredential());

  //   azureProvider.KeyVaultSecretClient = new SecretClient(keyVaultEndpoint, new DefaultAzureCredential());

  //   if (string.IsNullOrEmpty(azureProvider.DbConnectionString))
  //   {
  //     var keyVaultDbConnection = await azureProvider.KeyVaultSecretClient.GetSecretAsync(AzureProvider.KeyVaultNameForDbConnectionString);
  //     azureProvider.DbConnectionString = keyVaultDbConnection.Value.Value;
  //   }

  //   services.AddDbContext<DataContext>(opt => opt.UseSqlServer(azureProvider.DbConnectionString));
  //   // services.AddDbContext<DataContext>(opt => opt.UseSqlServer(azureProvider.DbConnectionString, o => o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery)));

  //   return services;
  // }
}