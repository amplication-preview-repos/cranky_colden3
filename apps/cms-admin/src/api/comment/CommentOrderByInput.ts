import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  commentAuthor?: SortOrder;
  commentContent?: SortOrder;
  commentCreatedAt?: SortOrder;
  commentPost?: SortOrder;
  commentStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
