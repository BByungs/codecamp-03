import NestedCommentUI from "./NestedComment.presenter";

export default function NestedComment(props: any) {
  return (
    <NestedCommentUI
      sellerAnswersEl={props.sellerAnswersEl}
      onChangeNestedComment={props.onChangeNestedComment}
      onClickNestedCommentSubmit={props.onClickNestedCommentSubmit}
      onClickNestedCommentEdit={props.onClickNestedCommentEdit}
      onChangeReplyComment={props.onChangeReplyComment}
      isEdit={props.isEdit}
      id={props.id}
    />
  );
}
