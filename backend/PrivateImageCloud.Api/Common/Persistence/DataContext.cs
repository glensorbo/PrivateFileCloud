using Microsoft.EntityFrameworkCore;
using PrivateImageCloud.Entities;

namespace PrivateImageCloud.Api.Common.Persistence;

public class DataContext : DbContext
{
  public DataContext(DbContextOptions<DataContext> options) : base(options) { }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<User>().HasMany(user => user.Roles).WithMany(r => r.Users);
    modelBuilder.Entity<User>().HasOne(user => user.OriginalProfileImage);
    modelBuilder.Entity<User>().HasOne(user => user.WebpProfileImage);
    modelBuilder.Entity<User>().Navigation(user => user.Roles).AutoInclude();

    modelBuilder.Entity<Role>().HasOne(role => role.Creator);
    modelBuilder.Entity<Role>().HasOne(role => role.Editor);

    modelBuilder.Entity<Image>().HasOne(image => image.Uploader);
    modelBuilder.Entity<Image>().Navigation(image => image.Uploader).AutoInclude();

    modelBuilder.Seed();
  }

  public DbSet<User> Users => Set<User>();
  public DbSet<Role> Roles => Set<Role>();
  public DbSet<Image> Images => Set<Image>();
  public DbSet<Email> Emails => Set<Email>();
}