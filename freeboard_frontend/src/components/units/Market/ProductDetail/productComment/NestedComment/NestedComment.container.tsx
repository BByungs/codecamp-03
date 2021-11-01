import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "../Comment/Comment.queries";
import NestedCommentUI from "./NestedComment.presenter";

export default function NestedComment(props: any) {
  const [replyContents, setReplyContents] = useState("");
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  function onChangeReplyComment(event: ChangeEvent<HTMLInputElement>) {
    setReplyContents(event.target.value);
    console.log(replyContents);
  }

  async function onClickNestedCommentEdit(event: any) {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: replyContents,
          },
          useditemQuestionAnswerId: props.sellerAnswersEl._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.sellerAnswersEl.useditemQuestion._id,
            },
          },
        ],
      });
      props.setIsEdit((prev: any) => !prev);
    } catch (error: any) {
      alert(error.message);
    }
    // console.log("sellerAnswersEl", props.sellerAnswersEl.useditemQuestion?._id);
  }

  return (
    <NestedCommentUI
      sellerAnswersEl={props.sellerAnswersEl}
      onChangeNestedComment={props.onChangeNestedComment}
      onClickNestedCommentSubmit={props.onClickNestedCommentSubmit}
      onClickNestedCommentEdit={onClickNestedCommentEdit}
      onChangeReplyComment={onChangeReplyComment}
      isEdit={props.isEdit}
      id={props.id}
      setIsEdit={props.setIsEdit}
    />
  );
}
