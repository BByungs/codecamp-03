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
      useditemQuestionId: props.sellerEl._id,
    },
  });
  function onClickQuestion() {
    setIsNestedComments((prev) => !prev);
  }

  async function onClickNestedCommentSubmit() {
    console.log(props.sellerEl._id);
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props.sellerEl._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.sellerEl._id,
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
                <PresenterName>{props.sellerEl.user.name}</PresenterName>
                <PresenterComment>{props.sellerEl.contents}</PresenterComment>
                <PresenterDate>
                  {props.sellerEl.createdAt.slice(0, 10)}
                </PresenterDate>
              </PresenterLeftCol>
            </PresenterLeft>
            <PresenterRight src="/comment.png" onClick={onClickQuestion} />
          </PresenterRow>
        </PresenterWrapper>
      )}

      {isNestedComments && (
        <PresenterWrapper>
          <PresenterRow>
            <PresenterLeft>
              <PresenterPhoto src="/profilePhoto.png" />
              <PresenterLeftCol>
                <PresenterName>{props.sellerEl.user.name}</PresenterName>
                <PresenterComment>{props.sellerEl.contents}</PresenterComment>
                <PresenterDate>
                  {props.sellerEl.createdAt.slice(0, 10)}
                </PresenterDate>
              </PresenterLeftCol>
            </PresenterLeft>
            <PresenterRight src="/comment.png" onClick={onClickQuestion} />
          </PresenterRow>
          {/* 판매자가 대 댓글 단 부분 */}
          {data?.fetchUseditemQuestionAnswers.map((el: any) => (
            <SellerNestedCommentResult sellerAnswersEl={el} key={el._id} />
          ))}
          <SellerNestedComment // 댓글 다는 부분
            setIsNestedComments={setIsNestedComments}
            onClickNestedCommentSubmit={onClickNestedCommentSubmit}
            onChangeNestedComment={onChangeNestedComment}
          />
        </PresenterWrapper>
      )}
    </>
  );
}
