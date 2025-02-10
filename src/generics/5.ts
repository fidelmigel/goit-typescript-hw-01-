export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleTranslation = Record<UserRole, string>;

const RoleDescription: RoleTranslation = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
