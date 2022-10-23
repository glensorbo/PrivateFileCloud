using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using PrivateImageCloud.Api.Common.Settings;
using PrivateImageCloud.Api.Common.Services.DateTimeServices;
using PrivateImageCloud.Entities;

namespace PrivateImageCloud.Api.Common.Authentication;

public class JwtGenerator : IJwtGenerator
{
  private readonly JwtSettings jwtSettings;
  private readonly IDateTimeService dateTimeService;

  public JwtGenerator(IDateTimeService dateTimeProvider, IOptions<JwtSettings> jwtOptions)
  {
    this.dateTimeService = dateTimeProvider;
    jwtSettings = jwtOptions.Value;
  }

  public string GenerateUserToken(User user)
  {
    var claims = new List<Claim>
    {
      new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
      new Claim(JwtRegisteredClaimNames.Email, user.Email),
      new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
      new Claim("userId", user.Id.ToString()),
    };

    foreach (Role role in user.Roles)
    {
      claims.Add(new Claim("roles", role.Name));
    }

    var securityToken = GetSecurityToken(jwtSettings.ExpiryMinutes, claims);

    return new JwtSecurityTokenHandler().WriteToken(securityToken);
  }

  // public string GenerateRegistrationToken(Email email)
  // {
  //   var claims = new List<Claim>
  //   {
  //     new Claim(JwtRegisteredClaimNames.Sub, email.Id.ToString()),
  //     new Claim(JwtRegisteredClaimNames.Email, email.Address),
  //     new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
  //     new Claim("emailId", email.Id.ToString()),
  //     new Claim("roles", "Registering")
  //   };

  //   var securityToken = GetSecurityToken(2880, claims);// 2880 minutes = 48 hours

  //   return new JwtSecurityTokenHandler().WriteToken(securityToken);
  // }

  private JwtSecurityToken GetSecurityToken(int expiryMinutes, List<Claim> claims)
  {
    var signingCredentials = new SigningCredentials(
      new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Secret)),
      SecurityAlgorithms.HmacSha256
    );

    return new JwtSecurityToken(
      issuer: jwtSettings.Issuer,
      audience: jwtSettings.Audience,
      expires: dateTimeService.UtcNow.AddMinutes(expiryMinutes),
      claims: claims,
      signingCredentials: signingCredentials
    );
  }
}