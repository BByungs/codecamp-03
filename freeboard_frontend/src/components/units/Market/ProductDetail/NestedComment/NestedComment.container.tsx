import NestedCommentUI from "./NestedComment.presenter";

export default function SellerNestedComment(props: any) {
  return (
    <NestedCommentUI
      onClickNestedCommentSubmit={props.onClickNestedCommentSubmit}
      onChangeNestedComment={props.onChangeNestedComment}
    />
  );
}
