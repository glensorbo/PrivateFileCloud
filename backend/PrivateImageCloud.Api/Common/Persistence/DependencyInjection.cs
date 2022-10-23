using Microsoft.EntityFrameworkCore;
using PrivateImageCloud.Api.Common.Settings;

namespace PrivateImageCloud.Api.Common.Persistence;

public static class DependencyInjection
{
  public static IServiceCollection AddPersistence(this IServiceCollection services,
    ConfigurationManager configuration)
  {
    var keyVaultSettings = new KeyVaultSettings();

    configuration.Bind(KeyVaultSettings.SectionName, keyVaultSettings);

    services.AddSingleton(Options.Create(keyVaultSettings));

    services.AddDbContext<DataContext>(opt => opt.UseSqlServer(keyVaultSettings.DbConnectionString));

    return services;
  }
}