/**
 * Strapi User object
 */
export interface UserInfo {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  artistname?: string;
  displayname: string;
}
