import { IReply } from './IReply';

export interface IComment {
  creator: string;
  text: string;
  created: string;
  likes: string[];
  replies: IReply[] | [];
}
