# Install/setup solution

```bash
# Create new solution and projects
$dotnet new sln -o PrivateImageCloud
$cd .\PrivateImageCloud\
$dotnet new webapi -o PrivateImageCloud.Api
$dotnet new classlib -o PrivateImageCloud.Contracts
$dotnet new classlib -o PrivateImageCloud.Infrastructure
$dotnet new classlib -o PrivateImageCloud.Application
$dotnet new classlib -o PrivateImageCloud.Domain

# Add all projects to the solution
$dotnet sln add (ls -r **\*.csproj)

# Check that it builds
$dotnet build

# Connect the projects
$dotnet add .\PrivateImageCloud.Api\ reference .\PrivateImageCloud.Contracts\ .\PrivateImageCloud.Application\
$dotnet add .\PrivateImageCloud.Infrastructure\ reference .\PrivateImageCloud.Application\
$dotnet add .\PrivateImageCloud.Application\ reference .\PrivateImageCloud.Domain\
$dotnet add .\PrivateImageCloud.Api\ reference .\PrivateImageCloud.Infrastructure\

# Check that it builds
$dotnet build

# Add gitignore
$dotnet new gitignore

```
