export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleTranslation = Record<UserRole, string>;

const RoleDescription: RoleTranslation = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
