import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import SellerNestedComment from "../SellerNestedComment/SellerNestedComment.container";
import SellerNestedCommentResult from "../SellerNestedCommentResult/SellerNestedCommentResult.container";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./SellerComment.queries";
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
} from "./SellerComment.styles";

export default function SellerCommentUIItem(props) {
  const [isNestedComments, setIsNestedComments] = useState(false);
  const [isNestedCommentResult, setIsNestedCommentsResult] = useState(false);
  const [contents, setContents] = useState("");
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.el._id,
    },
  });
  function onClickQuestion() {
    setIsNestedComments((prev) => !prev);
  }

  async function onClickNestedCommentSubmit() {
    console.log(props.el._id);
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.el._id,
            },
          },
        ],
      });
      console.log(result.data?.createUseditemQuestionAnswer._id);

      setIsNestedComments((prev) => !prev);
    } catch (error: any) {
      alert(error.message);
    }
  }

  function onChangeNestedComment(event) {
    setContents(event.target.value);
  }
  return (
    <>
      {!isNestedComments && (
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
            <PresenterRight src="/comment.png" onClick={onClickQuestion} />
          </PresenterRow>

          {/* {data?.fetchUseditemQuestionAnswers.map((el) => (
            <SellerNestedCommentResult el={el} key={el._id} />
          ))} */}
        </PresenterWrapper>
      )}

      {isNestedComments && (
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
            <PresenterRight src="/comment.png" onClick={onClickQuestion} />
          </PresenterRow>
          {data?.fetchUseditemQuestionAnswers.map((el: any) => (
            <SellerNestedCommentResult el={el} key={el._id} />
          ))}
          <SellerNestedComment
            setIsNestedComments={setIsNestedComments}
            onClickNestedCommentSubmit={onClickNestedCommentSubmit}
            onChangeNestedComment={onChangeNestedComment}
          />
        </PresenterWrapper>
      )}
    </>
  );
}
