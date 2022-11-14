export interface IReply {
  creator: string;
  text: string;
  created: Date;
  likes: string[];
  replies: IReply[];
}
