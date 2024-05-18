import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postAuthor?: SortOrder;
  postContent?: SortOrder;
  postCreatedAt?: SortOrder;
  postStatus?: SortOrder;
  postTitle?: SortOrder;
  postUpdatedAt?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
