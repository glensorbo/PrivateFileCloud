import { IRole } from './../Role/IRole';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  invited: Date;
  registered?: Date;
  updated?: Date;
  status: string;
  roles: [IRole];
  originalProfileImage: string;
  webpProfileImage: string;
  isLoggingIn: boolean;
  isRegistering: boolean;
  token: string;
}
