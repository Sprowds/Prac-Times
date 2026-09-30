export default interface IUser {
  username: string;
  name: string;
  surname: string;
  birthDate: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface IStatus {
  user: boolean;
  creator: boolean;
  admin: boolean;
  banned: boolean;
}

export interface IAuth {
  username: string;
  password: string;
  status: IStatus;
}
