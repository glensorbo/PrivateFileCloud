import { IComment } from './IComment';
import { IUser } from './IUser';
export interface IPost {
  id: string;
  creator: IUser;
  title: string;
  likes: string[];
  images: string[];
  comments: [IComment] | [];
  created: string;
}
