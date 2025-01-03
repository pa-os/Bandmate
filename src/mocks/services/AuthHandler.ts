import { http, HttpResponse } from "msw";
import { API_URI } from "../../services/AuthService";
import {
  AuthenticationInformation,
  AuthenticationRequest,
} from "../../services/dto/Authentication";

const URL = import.meta.env.VITE_BACKEND_API_URL + API_URI;

const DoAuthHandler = http.post<
  never,
  AuthenticationRequest,
  AuthenticationInformation
>(URL, async ({ request }) => {
  const parsedData = await request.json();
  return HttpResponse.json(
    {
      jwt: "open_sesame!",
      user: {
        id: 1,
        blocked: false,
        confirmed: true,
        createdAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        displayname: "Maxi Musterperson",
        username: parsedData.identifier,
        email: `${parsedData.identifier}@acme.com`,
        artistname: "Maximal",
      },
    },
    { status: 200 }
  );
});

export const AuthHandler = [DoAuthHandler];
