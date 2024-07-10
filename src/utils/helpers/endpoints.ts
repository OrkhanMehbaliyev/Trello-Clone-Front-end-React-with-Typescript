export const baseUrl = "http://localhost:3003";

export const ENDPOINTS = {
  login: `${baseUrl}/auth/verifyUser`,
  getUser: (username: string) =>
    `${baseUrl}/user/getuserbyusername/${username}`,
};
