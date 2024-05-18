import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  categoryDescription?: StringNullableFilter;
  categoryName?: StringNullableFilter;
  id?: StringFilter;
};
