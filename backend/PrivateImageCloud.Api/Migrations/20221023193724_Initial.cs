using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PrivateImageCloud.Api.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Emails",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConfirmationCode = table.Column<int>(type: "int", nullable: false),
                    Confirmed = table.Column<bool>(type: "bit", nullable: false),
                    CodeValidTo = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Updated = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Emails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Uri = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContentType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Uploaded = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UploaderId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    OriginalImageId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Invited = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Registered = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Updated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OriginalImageId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    WebpImageId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Images_OriginalImageId",
                        column: x => x.OriginalImageId,
                        principalTable: "Images",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Users_Images_WebpImageId",
                        column: x => x.WebpImageId,
                        principalTable: "Images",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Updated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    EditorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Roles_Users_CreatorId",
                        column: x => x.CreatorId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Roles_Users_EditorId",
                        column: x => x.EditorId,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "RoleUser",
                columns: table => new
                {
                    RolesId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UsersId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoleUser", x => new { x.RolesId, x.UsersId });
                    table.ForeignKey(
                        name: "FK_RoleUser_Roles_RolesId",
                        column: x => x.RolesId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RoleUser_Users_UsersId",
                        column: x => x.UsersId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "Created", "CreatorId", "EditorId", "Name", "Updated" },
                values: new object[,]
                {
                    { new Guid("016ccff7-dcee-448d-b862-ec2c704ea2e6"), new DateTime(2022, 10, 23, 21, 37, 23, 979, DateTimeKind.Unspecified).AddTicks(262), null, null, "Registering", null },
                    { new Guid("09d2e6f5-0bcc-4e67-908b-e39d961192b5"), new DateTime(2022, 10, 23, 21, 37, 23, 979, DateTimeKind.Unspecified).AddTicks(262), null, null, "User", null },
                    { new Guid("c9c2d988-3972-420d-83c6-cb29a2c3841a"), new DateTime(2022, 10, 23, 21, 37, 23, 979, DateTimeKind.Unspecified).AddTicks(262), null, null, "Admin", null }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "FirstName", "Invited", "LastName", "OriginalImageId", "Registered", "Status", "Updated", "WebpImageId" },
                values: new object[] { new Guid("ca013944-f74b-4869-ac2c-8815c6c27e0d"), "glensorbo@gmail.com", "Glen", new DateTime(2022, 10, 23, 21, 37, 23, 979, DateTimeKind.Unspecified).AddTicks(262), "Sørbø", null, new DateTime(2022, 10, 23, 21, 37, 23, 979, DateTimeKind.Unspecified).AddTicks(262), "Admin", null, null });

            migrationBuilder.CreateIndex(
                name: "IX_Images_UploaderId",
                table: "Images",
                column: "UploaderId");

            migrationBuilder.CreateIndex(
                name: "IX_Roles_CreatorId",
                table: "Roles",
                column: "CreatorId");

            migrationBuilder.CreateIndex(
                name: "IX_Roles_EditorId",
                table: "Roles",
                column: "EditorId");

            migrationBuilder.CreateIndex(
                name: "IX_RoleUser_UsersId",
                table: "RoleUser",
                column: "UsersId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_OriginalImageId",
                table: "Users",
                column: "OriginalImageId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_WebpImageId",
                table: "Users",
                column: "WebpImageId");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Users_UploaderId",
                table: "Images",
                column: "UploaderId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_Users_UploaderId",
                table: "Images");

            migrationBuilder.DropTable(
                name: "Emails");

            migrationBuilder.DropTable(
                name: "RoleUser");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Images");
        }
    }
}
