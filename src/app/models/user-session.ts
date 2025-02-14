export interface UserSession {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
}
