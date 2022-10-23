namespace PrivateImageCloud.Entities;

public class Image
{
  public Guid Id { get; set; }
  public Uri Uri { get; set; } = null!;
  public string ContentType { get; set; } = null!;
  public DateTime Uploaded { get; set; }
  public User? Uploader { get; set; }
  public Guid? OriginalImageId { get; set; }
}