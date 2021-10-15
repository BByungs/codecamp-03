import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import NormalCommentEdit from "../NormalCommentEdit/NormalCommentEdit.container";
import SellerNestedCommentResult from "../SellerNestedCommentResult/SellerNestedCommentResult.container";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./NormalComment.queries";
import {
  PresenterWrapper,
  PresenterRow,
  PresenterLeft,
  PresenterRight,
  PresenterPhoto,
  PresenterLeftCol,
  PresenterName,
  PresenterComment,
  PresenterDate,
  WideLine,
  Right,
  XButton,
} from "./NormalComment.styles";

export default function NormalCommentUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.el._id,
    },
  });
  function onClickEdit() {
    setIsEdit((prev) => !prev);
  }

  async function onClickQuestionDelete() {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
    } catch (error: any) {
      alert(error.message);
    }
  }
  return (
    <>
      {!isEdit && (
        <PresenterWrapper>
          <PresenterRow>
            <PresenterLeft>
              <PresenterPhoto src="/profilePhoto.png" />
              <PresenterLeftCol>
                <PresenterName>{props.el.user.name}</PresenterName>
                <PresenterComment>{props.el.contents}</PresenterComment>
                <PresenterDate>{props.el.createdAt.slice(0, 10)}</PresenterDate>
              </PresenterLeftCol>
            </PresenterLeft>
            {props.el?.user.email === props.fetchUserLoggedIn && (
              <Right>
                <PresenterRight
                  src="/normalCommentEdit.png"
                  onClick={onClickEdit}
                />
                <XButton src="/ximg.png" onClick={onClickQuestionDelete} />
              </Right>
            )}
          </PresenterRow>
          {/* <WideLine /> */}
          {data?.fetchUseditemQuestionAnswers.map((el) => (
            <SellerNestedCommentResult el={el} />
          ))}
        </PresenterWrapper>
      )}
      {isEdit && <NormalCommentEdit el={props.el} setIsEdit={setIsEdit} />}
    </>
  );
}
