using PrivateImageCloud.Api.Features.Roles.Common;
using PrivateImageCloud.Contracts.Roles;
using PrivateImageCloud.Entities;

namespace PrivateImageCloud.Api.Common.Mappers.Roles;

public class RoleMapper : IRoleMapper
{
  public RoleResponse MapResultToResponse(RoleResult result)
  {
    return new RoleResponse(
      result.Role.Id,
      result.Role.Name,
      result.Role.Created,
      result.Role.Updated,
      result.Role.Creator,
      result.Role.Editor
    );
  }
  public List<RoleResult> MapDbListToResultList(List<Role> roles)
  {
    var resultList = new List<RoleResult>();

    foreach (var role in roles)
    {
      resultList.Add(new RoleResult(role));
    }

    return resultList;
  }

  public List<RoleResponse> MapResultListToResponseList(List<RoleResult> resultList)
  {
    var responseList = new List<RoleResponse>();

    foreach (RoleResult result in resultList)
    {
      responseList.Add(MapResultToResponse(result));
    }

    return responseList;
  }

  public List<RoleResponse> MapDbListToResponseList(List<Role>? roles)
  {
    if (roles is null)
    {
      return new List<RoleResponse>();
    }

    var resultList = MapDbListToResultList(roles);

    return MapResultListToResponseList(resultList);
  }
}