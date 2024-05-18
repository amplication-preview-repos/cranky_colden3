import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment_author" source="commentAuthor" />
        <TextInput label="comment_content" multiline source="commentContent" />
        <DateTimeInput label="comment_createdAt" source="commentCreatedAt" />
        <TextInput label="comment_post" source="commentPost" />
        <SelectInput
          source="commentStatus"
          label="comment_status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
