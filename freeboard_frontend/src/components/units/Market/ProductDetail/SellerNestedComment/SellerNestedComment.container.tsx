import SellerNestedCommentUI from "./SellerNestedComment.presenter";

export default function SellerNestedComment(props) {
  return (
    <SellerNestedCommentUI
      onClickNestedCommentSubmit={props.onClickNestedCommentSubmit}
      onChangeNestedComment={props.onChangeNestedComment}
    />
  );
}
