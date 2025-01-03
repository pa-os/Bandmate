import { UserInfo } from "./User";

export interface AuthenticationRequest {
  identifier: string;
  password: string;
}

/**
 * Information on an authenticated user with its token.
 * This object is also the reponse body for a request to api/auth/local
 */
export interface AuthenticationInformation {
  jwt: string;
  user: UserInfo;
}
