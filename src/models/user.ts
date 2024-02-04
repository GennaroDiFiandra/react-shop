export interface User {
  id: string;
  username: string,
  password: string;
  passwordConfirm: string;
  email: string,
  name: string,
  surname: string,
  role: "customer" | "shopManager";
  verified: boolean,
  code: number;
  message: string;
}