using System.Reflection;
using PrivateImageCloud.Api.Common.Authentication;
using PrivateImageCloud.Api.Common.Persistence;
using PrivateImageCloud.Api.Common.Services;
using PrivateImageCloud.Api.Common.Settings;

namespace PrivateImageCloud.Api;

public static class DependencyInjection
{
  public static IServiceCollection AddDependencies(this IServiceCollection services, ConfigurationManager configuration)
  {
    services.AddSettings(configuration);

    services.AddPersistence(configuration);

    services.AddAuth(configuration);

    services.AddServices();

    services.AddMediatR(Assembly.GetExecutingAssembly());

    services.AddControllers();

    services.AddHttpClient("ValidateGoogleCode", client => client.BaseAddress = new Uri(GoogleAuthSettings.TokenUri));

    return services;
  }
}