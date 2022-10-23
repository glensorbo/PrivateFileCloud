using PrivateImageCloud.Api.Features.Roles.Common;
using PrivateImageCloud.Contracts.Roles;
using PrivateImageCloud.Entities;

namespace PrivateImageCloud.Api.Common.Mappers.Roles;

public interface IRoleMapper
{
  List<RoleResponse> MapDbListToResponseList(List<Role>? roles);
  List<RoleResult> MapDbListToResultList(List<Role> roles);
  RoleResponse MapResultToResponse(RoleResult result);
  List<RoleResponse> MapResultListToResponseList(List<RoleResult> resultList);
}