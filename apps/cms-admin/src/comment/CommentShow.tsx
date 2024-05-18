import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="comment_author" source="commentAuthor" />
        <TextField label="comment_content" source="commentContent" />
        <TextField label="comment_createdAt" source="commentCreatedAt" />
        <TextField label="comment_post" source="commentPost" />
        <TextField label="comment_status" source="commentStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
