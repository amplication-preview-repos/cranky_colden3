import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  categoryDescription?: SortOrder;
  categoryName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
