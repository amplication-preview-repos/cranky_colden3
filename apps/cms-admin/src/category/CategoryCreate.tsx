import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="category_description"
          multiline
          source="categoryDescription"
        />
        <TextInput label="category_name" source="categoryName" />
      </SimpleForm>
    </Create>
  );
};
