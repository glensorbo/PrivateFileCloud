namespace PrivateImageCloud.Entities;

public class Role
{
  public Guid Id { get; set; }
  public string Name { get; set; } = "User";
  public DateTime Created { get; set; }
  public DateTime? Updated { get; set; }
  public User? Creator { get; set; }
  public User? Editor { get; set; }
  public List<User>? Users { get; set; }
}