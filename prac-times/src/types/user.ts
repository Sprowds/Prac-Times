export default interface IUser {
  username: string;
  name: string;
  surname: string;
  birthDate: string;
  email: string;
  phone: string;
  avatar: string;
}

export type UserStatus = "user" | "creator" | "admin" | "banned";

export interface IUserAuth {
  username: string;
  password: string;
  status: UserStatus;
}
