namespace PrivateImageCloud.Api.Common.Errors;


public static partial class Errors
{
  public static class Common
  {
    public static Error Unexpected => Error.Unexpected(
      code: "Common.Unexpected",
      description: "An unexpected error occurred."
    );
  }
}
