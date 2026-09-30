import type { IAuth } from "../../types/user";

const userAuthInfoList: IAuth[] = [
  {
    username: "Sprow",
    password: "Akimat2026@",
    status: {
      user: true,
      creator: true,
      admin: true,
      banned: false,
    },
  },
  {
    username: "ProstoGamer",
    password: "123456Aa",
    status: {
      user: true,
      creator: true,
      admin: false,
      banned: false,
    },
  },
];

export default userAuthInfoList;
