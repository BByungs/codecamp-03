import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import NestedComment from "../NestedComment/NestedComment.container";
import NestedCommentResult from "../NestedCommentResult/NestedCommentResult.container";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./Comment.queries";

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
} from "./Comment.styles";

export default function CommentUIItem(props: any) {
  const [isNestedComments, setIsNestedComments] = useState(false);
  const [contents, setContents] = useState("");
  const [replyContents, setReplyContents] = useState("");

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.sellerEl._id,
    },
  });

  // sellerEl 은 처음 단 댓글
  function onClickQuestion() {
    setIsNestedComments((prev) => !prev);
  }

  async function onClickNestedCommentSubmit() {
    // console.log(props.sellerEl._id);
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
    } catch (error: any) {
      alert(error.message);
    }
  }

  function onChangeNestedComment(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
    console.log(contents);
  }

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
          useditemQuestionAnswerId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionAnswerId: props.sellerEl._id,
            },
          },
        ],
      });
    } catch (error: any) {
      alert(error.message);
    }
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
          {/* 대 댓글 단 부분 */}
          {data?.fetchUseditemQuestionAnswers.map((sellerAnswersEl: any) => (
            <NestedCommentResult
              sellerAnswersEl={sellerAnswersEl}
              onClickNestedCommentEdit={onClickNestedCommentEdit}
              onChangeReplyComment={onChangeReplyComment}
              id={sellerAnswersEl._id}
              key={sellerAnswersEl._id}
              data={data}
            />
          ))}
          <NestedComment
            setIsNestedComments={setIsNestedComments}
            onClickNestedCommentSubmit={onClickNestedCommentSubmit}
            onChangeNestedComment={onChangeNestedComment}
            onClickNestedCommentEdit={onClickNestedCommentEdit}
            onChangeReplyComment={onChangeReplyComment}
          />
        </PresenterWrapper>
      )}
    </>
  );
}
