global using Microsoft.AspNetCore.Authorization;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.AspNetCore.Mvc.ModelBinding;
global using ErrorOr;
global using MediatR;

using PrivateImageCloud.Api;
using PrivateImageCloud.Application;
using PrivateImageCloud.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

{
  builder.Services
    .AddPresentation()
    .AddApplication()
    .AddInfrastructure(builder.Configuration);
}

var app = builder.Build();

{
  app.UseExceptionHandler("/error");
  app.UseHttpsRedirection();
  app.UseAuthorization();
  // app.UseAuthorization();
  app.MapControllers();
  app.Run();
}
