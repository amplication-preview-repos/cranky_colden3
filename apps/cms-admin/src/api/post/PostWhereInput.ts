import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PostWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  postAuthor?: StringNullableFilter;
  postContent?: StringNullableFilter;
  postCreatedAt?: DateTimeNullableFilter;
  postStatus?: "Option1";
  postTitle?: StringNullableFilter;
  postUpdatedAt?: DateTimeNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
