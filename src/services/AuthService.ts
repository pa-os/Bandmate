import { AxiosResponse } from "axios";
import { createApiClient } from "./apiClient";
import {
  AuthenticationInformation,
  AuthenticationRequest,
} from "./dto/Authentication";

export const API_URI = "/auth/local";

export const AuthService = {
  doAuthentication: (
    data: AuthenticationRequest
  ): Promise<AxiosResponse<AuthenticationInformation>> => {
    return createApiClient().post(API_URI, data);
  },
};
