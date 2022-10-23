global using Microsoft.AspNetCore.Authorization;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.AspNetCore.Mvc.ModelBinding;
global using Microsoft.Extensions.Options;
global using ErrorOr;
global using MediatR;

global using PrivateImageCloud.Api.Common.Errors;

using PrivateImageCloud.Api;

var builder = WebApplication.CreateBuilder(args);

{
  builder.Services.AddDependencies(builder.Configuration);
}

var app = builder.Build();

{
  app.UseCors("any-domain");
  app.UseExceptionHandler("/error");
  app.UseHttpsRedirection();
  app.UseAuthorization();
  app.UseAuthorization();
  app.MapControllers();
  app.UseDefaultFiles();
  app.UseStaticFiles();
  app.Run();
}
