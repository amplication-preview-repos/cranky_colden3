export type Post = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  postAuthor: string | null;
  postContent: string | null;
  postCreatedAt: Date | null;
  postStatus?: "Option1" | null;
  postTitle: string | null;
  postUpdatedAt: Date | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
