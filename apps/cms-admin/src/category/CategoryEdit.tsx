import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="category_description"
          multiline
          source="categoryDescription"
        />
        <TextInput label="category_name" source="categoryName" />
      </SimpleForm>
    </Edit>
  );
};
