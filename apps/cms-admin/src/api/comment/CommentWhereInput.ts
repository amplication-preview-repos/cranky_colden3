import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  commentAuthor?: StringNullableFilter;
  commentContent?: StringNullableFilter;
  commentCreatedAt?: DateTimeNullableFilter;
  commentPost?: StringNullableFilter;
  commentStatus?: "Option1";
  id?: StringFilter;
};
