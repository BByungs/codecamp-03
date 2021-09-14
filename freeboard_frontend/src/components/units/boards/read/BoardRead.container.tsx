import BoardReadUI from "./BoardRead.presenter";
import {
  FETCH_BOARD,
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  DELETE_BOARD,
} from "./BoardRead.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import { Rate } from "antd";

// const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function BoardRead() {
  const [value, setValue] = useState(3);

  const handleChange = (value) => {
    setValue(value);
  };

  const [commentInput, setCommentInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [writerInput, setWriterInput] = useState("");
  const [eventTargetId, setEventTargetId] = useState("");
  const [editPasswordInput, setEditPasswordInput] = useState("");
  const [editCommentInput, setEditCommentInput] = useState("");

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detailPageNonMembersBasic },
  });
  const { data: commentsData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.detailPageNonMembersBasic,
    },
  });

  function onClickMoveEdit() {
    router.push(
      `/boards/detailPage-nonMembers-basic-read/${router.query.detailPageNonMembersBasic}/edit`
    );
  }
  function onClickMoveToList() {
    router.push("/boards/board-best/");
  }
  function onChangeCommentInput(event) {
    setCommentInput(event.target.value);
  }
  function onChangeWriterInput(event) {
    setWriterInput(event.target.value);
  }
  function onChangePasswordInput(event) {
    setPasswordInput(event.target.value);
  }
  function onChangeEditCommentPasswordInput(event) {
    setEditPasswordInput(event.target.value);
  }
  function onChangeEditCommentSubmitInput(event) {
    setEditCommentInput(event.target.value);
  }

  // 등록하기 버튼
  async function onClickCommentSubmit() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writerInput,
            password: passwordInput,
            contents: commentInput,
            rating: 4,
          },
          boardId: router.query.detailPageNonMembersBasic,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detailPageNonMembersBasic },
          },
        ],
      });
      console.log(router.query.detailPageNonMembersBasic);
    } catch (error) {
      console.log(error);
    }
  }
  // 펜슬버튼
  function onClickEdit(event) {
    console.log(event.target.id);
    setEventTargetId(event.target.id);
  }

  // 수정하기 버튼
  async function onClickEditCommentButton(event) {
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: editCommentInput,
            rating: 4,
          },
          password: editPasswordInput,
          // id값 BoardReadEdit.presenter.js에서 받와야하는데
          // 여긴 다른폴더라 값을 받아오지 못함
          // 이걸 어떻게 받아오기만 하면 댓글수정 기능이 구현 될텐데
          // 어떻게 해야할지 모르겠음
          // 이부분 질문
          // 원래는 수정하는 부분 나눴는데
          // 값을 못 받아와서 합침
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detailPageNonMembersBasic },
          },
        ],
      });
      setEventTargetId("");
    } catch (error) {
      alert(error);
    }
  }

  async function onClickCommentDelete(event) {
    const promptPassword = prompt("비밀번호를 입력하세요");
    try {
      await deleteBoardComment({
        variables: {
          password: promptPassword,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detailPageNonMembersBasic },
          },
        ],
      });
    } catch (error) {
      alert(error);
    }
  }

  async function onClickBoardDelete() {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.detailPageNonMembersBasic,
        },
      });
      router.push(`/boards/board-best`);
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <BoardReadUI
      router={router}
      data={data}
      onClickMoveEdit={onClickMoveEdit}
      onClickMoveToList={onClickMoveToList}
      onClickCommentSubmit={onClickCommentSubmit}
      onChangeCommentInput={onChangeCommentInput}
      onChangePasswordInput={onChangePasswordInput}
      onChangeWriterInput={onChangeWriterInput}
      commentsData={commentsData}
      onClickEdit={onClickEdit}
      eventTargetId={eventTargetId}
      onChangeEditCommentPasswordInput={onChangeEditCommentPasswordInput}
      onChangeEditCommentSubmitInput={onChangeEditCommentSubmitInput}
      updateBoardComment={updateBoardComment}
      onClickEditCommentButton={onClickEditCommentButton}
      onClickCommentDelete={onClickCommentDelete}
      onClickBoardDelete={onClickBoardDelete}
      handleChange={handleChange}
    />
  );
}
