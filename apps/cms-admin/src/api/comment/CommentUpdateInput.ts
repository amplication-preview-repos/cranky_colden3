export type CommentUpdateInput = {
  commentAuthor?: string | null;
  commentContent?: string | null;
  commentCreatedAt?: Date | null;
  commentPost?: string | null;
  commentStatus?: "Option1" | null;
};
