import type IUser from "../types/user";
import { fetchUserInfoByUsername } from "./backendAPIEmulator";

export default function getUserInfoByUsername(username: string): IUser {
  try {
    const result = fetchUserInfoByUsername(username);

    if (typeof result === "undefined") throw new Error("User not found.");

    if (result.avatar.length === 0)
      result.avatar = "/src/data/userData/img/default-avatar.jpg";

    return result;
  } catch (error) {
    console.log(error);

    const emptyResult: IUser = {
      username: "",
      name: "",
      surname: "",
      email: "",
      phone: "",
      birthDate: "",
      avatar: "/src/data/userData/default-avatar.jpg",
    };
    return emptyResult;
  }
}
