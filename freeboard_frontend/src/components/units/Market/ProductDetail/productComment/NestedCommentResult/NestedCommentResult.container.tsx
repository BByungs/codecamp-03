import NestedCommentResultUI from "./NestedCommentResult.presenter";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

export default function SellerNestedCommentResult(props: any) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  function onClickEdit() {
    setIsEdit((prev) => !prev);
  }

  async function onClickReplyDelete() {
    await deleteUseditemQuestionAnswer({
      variables: {
        useditemQuestionAnswerId: props.sellerAnswersEl._id,
      },
      update(cache, { data }) {
        const deleteReply = data.deleteUseditemQuestionAnswer;
        cache.modify({
          fields: {
            fetchUseditemQuestionAnswers: (prev, { readField }) => {
              const newFetchUseditemQuestionAnswers = prev.filter((el: any) => {
                return readField("_id", el) !== deleteReply;
              });

              return [...newFetchUseditemQuestionAnswers];
            },
          },
        });
      },
    });
  }

  return (
    <NestedCommentResultUI
      sellerAnswersEl={props.sellerAnswersEl}
      onClickNestedCommentEdit={props.onClickNestedCommentEdit}
      onClickEdit={onClickEdit}
      isEdit={isEdit}
      onClickReplyDelete={onClickReplyDelete}
      onChangeReplyComment={props.onChangeReplyComment}
      id={props.id}
      setIsEdit={setIsEdit}
    />
  );
}
