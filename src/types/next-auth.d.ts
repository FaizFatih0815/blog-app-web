import { User } from "./user";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LoginPayload extends Omit<User, "password"> {
  accessToken: string;
}

declare module "next-auth" {
  interface Session {
    user: LoginPayload;
  }
}
