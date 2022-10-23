using Microsoft.EntityFrameworkCore;
using PrivateImageCloud.Entities;

namespace PrivateImageCloud.Api.Common.Persistence;

public static class ModelBuilderExtensions
{
  public static void Seed(this ModelBuilder modelBuilder)
  {
    var currentTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.FindSystemTimeZoneById("Central European Standard Time"));

    modelBuilder.Entity<Role>().HasData(
      new Role
      {
        Id = Guid.NewGuid(),
        Created = currentTime,
        Name = "Admin"
      },
      new Role
      {
        Id = Guid.NewGuid(),
        Created = currentTime,
        Name = "Registering"
      },
      new Role
      {
        Id = Guid.NewGuid(),
        Created = currentTime,
        Name = "User"
      }
    );

    modelBuilder.Entity<User>().HasData(
      new User
      {
        Id = Guid.NewGuid(),
        Email = "glensorbo@gmail.com",
        FirstName = "Glen",
        LastName = "Sørbø",
        Invited = currentTime,
        Registered = currentTime,
        Status = "Admin"
      }
    );
  }
}