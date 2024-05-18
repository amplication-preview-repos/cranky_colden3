import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="author" source="author" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="post_author" source="postAuthor" />
        <TextField label="post_content" source="postContent" />
        <TextField label="post_createdAt" source="postCreatedAt" />
        <TextField label="post_status" source="postStatus" />
        <TextField label="post_title" source="postTitle" />
        <TextField label="post_updatedAt" source="postUpdatedAt" />
        <TextField label="status" source="status" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
