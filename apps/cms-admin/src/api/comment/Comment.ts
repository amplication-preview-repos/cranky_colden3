export type Comment = {
  commentAuthor: string | null;
  commentContent: string | null;
  commentCreatedAt: Date | null;
  commentPost: string | null;
  commentStatus?: "Option1" | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
