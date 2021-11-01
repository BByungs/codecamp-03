import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../../../pages/_app";
import { EditButton } from "../../ProductDetail.styles";
import NestedComment from "../NestedComment/NestedComment.container";
import NestedCommentResult from "../NestedCommentResult/NestedCommentResult.container";
import { Ximg } from "../NestedCommentResult/NestedCommentResult.styles";
import QuestionsEdit from "../QuestionsEdit/questionsEdit.container";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGED_IN,
  UPDATE_USED_ITEM_QUESTION,
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
  Icons,
  Edit,
} from "./Comment.styles";

export default function CommentUIItem(props: any) {
  const [isNestedComments, setIsNestedComments] = useState(false);
  const [contents, setContents] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const { data: user } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.sellerEl._id,
    },
  });

  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [isQuestionsEdit, setIsQuestionsEdit] = useState(false);

  // sellerEl 은 처음 단 댓글
  function onClickQuestion() {
    setIsNestedComments((prev) => !prev);
  }

  const [questionsEditInput, setQuestionsEditInput] = useState("");

  async function onClickNestedCommentSubmit() {
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
      // setIsEdit((prev: any) => !prev);
    } catch (error: any) {
      alert(error.message);
    }
  }

  function onChangeNestedComment(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
    console.log(contents);
  }

  async function onClickDelete() {
    await deleteUseditemQuestion({
      variables: {
        useditemQuestionId: props.sellerEl?._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: {
            useditemId: router.query.useditemId,
          },
        },
      ],
    });
  }

  function onClickQuestionsEdit() {
    setIsQuestionsEdit((prev) => !prev);
  }

  async function onClickQuestionsEditSubmit() {
    try {
      const result = await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: questionsEditInput,
          },
          useditemQuestionId: props.sellerEl._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.useditemId,
            },
          },
        ],
      });
      setIsQuestionsEdit((prev) => !prev);
    } catch (error: any) {
      alert(error.message);
    }
  }

  function onChangeQuestionsEdit(event: ChangeEvent<HTMLInputElement>) {
    setQuestionsEditInput(event.target.value);
  }

  const isSeller =
    user?.fetchUserLoggedIn?.email === props.sellerEl?.user?.email;

  return (
    <>
      {!isNestedComments && !isQuestionsEdit && (
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
            <Icons>
              {isSeller && (
                <Edit src="/pencil.png" onClick={onClickQuestionsEdit} />
              )}
              <PresenterRight src="/comment.png" onClick={onClickQuestion} />
              {isSeller && <Ximg src="/ximg.png" onClick={onClickDelete} />}
            </Icons>
          </PresenterRow>
        </PresenterWrapper>
      )}

      {isNestedComments && !isQuestionsEdit && (
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
            <Icons>
              {isSeller && (
                <Edit src="/pencil.png" onClick={onClickQuestionsEdit} />
              )}
              <PresenterRight src="/comment.png" onClick={onClickQuestion} />
              {isSeller && <Ximg src="/ximg.png" onClick={onClickDelete} />}
            </Icons>
          </PresenterRow>
          {/* 대 댓글 단 부분 */}
          {data?.fetchUseditemQuestionAnswers.map((sellerAnswersEl: any) => (
            <NestedCommentResult
              sellerAnswersEl={sellerAnswersEl}
              sellerEl={props.sellerEl}
              id={sellerAnswersEl._id}
              key={sellerAnswersEl._id}
              data={data}
              isEdit={isEdit}
            />
          ))}
          <NestedComment
            setIsNestedComments={setIsNestedComments}
            onClickNestedCommentSubmit={onClickNestedCommentSubmit}
            onChangeNestedComment={onChangeNestedComment}
            sellerEl={props.sellerEl}
            isEdit={isEdit}
          />
        </PresenterWrapper>
      )}

      {isQuestionsEdit && (
        <QuestionsEdit
          sellerEl={props.sellerEl}
          onChangeQuestionsEdit={onChangeQuestionsEdit}
          onClickQuestionsEditSubmit={onClickQuestionsEditSubmit}
        />
      )}
    </>
  );
}
