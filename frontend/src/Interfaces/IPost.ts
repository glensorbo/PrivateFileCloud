import { IComment } from './IComment';
import { IImage } from './IImage';
import { IUser } from './IUser';
export interface IPost {
  id: string;
  creator: IUser;
  title: string;
  likes: string[];
  images: IImage[];
  comments: [IComment];
  created: string;
}
