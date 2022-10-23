using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace PrivateImageCloud.Entities;

public class User
{
  public Guid Id { get; set; }
  public string FirstName { get; set; } = null!;
  public string LastName { get; set; } = null!;
  public string Email { get; set; } = null!;
  public DateTime Invited { get; set; }
  public DateTime? Registered { get; set; }
  public DateTime? Updated { get; set; }
  public string Status { get; set; } = "Invited";

  [JsonIgnore]
  public List<Role> Roles { get; set; } = new List<Role>();

  [ForeignKey("OriginalImageId")]
  public Image? OriginalProfileImage { get; set; }

  [ForeignKey("WebpImageId")]
  public Image? WebpProfileImage { get; set; }
}