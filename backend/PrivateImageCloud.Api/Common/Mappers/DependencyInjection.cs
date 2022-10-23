using PrivateImageCloud.Api.Common.Mappers.Authentication;
using PrivateImageCloud.Api.Common.Mappers.Roles;

namespace PrivateImageCloud.Api.Common.Mappers;

public static class DependencyInjection
{
  public static IServiceCollection AddMappers(this IServiceCollection services)
  {
    services.AddScoped<IAuthenticationMapper, AuthenticationMapper>();
    services.AddScoped<IRoleMapper, RoleMapper>();

    return services;
  }
}