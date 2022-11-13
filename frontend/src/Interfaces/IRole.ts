import { IUser } from './IUser';

export interface IRole {
  id: string;
  name: string;
  created?: Date;
  updated?: Date;
  creator?: IUser;
  editor?: IUser;
}
