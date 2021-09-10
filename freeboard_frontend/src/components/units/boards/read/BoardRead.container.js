import BoardReadUI from "./BoardRead.presenter";
import {
  FETCH_BOARD,
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardRead.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOARD } from "./BoardRead.queries";
import { useState } from "react";

export default function BoardRead() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [commentInput, setCommentInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [writerInput, setWriterInput] = useState("");

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detailPageNonMembersBasic },
  });

  const { data: commentsData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.detailPageNonMembersBasic,
    },
  });

  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.detailPageNonMembersBasic,
        },
      });
      router.push("/boards/board-best");
    } catch (error) {
      console.log(error);
    }
    console.log(router.query.detailPageNonMembersBasic);
  }

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
        refetchQueries: [{ boardId: router.query.detailPageNonMembersBasic }],
      });
      console.log(router.query.detailPageNonMembersBasic);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BoardReadUI
      router={router}
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveEdit={onClickMoveEdit}
      onClickMoveToList={onClickMoveToList}
      onClickCommentSubmit={onClickCommentSubmit}
      onChangeCommentInput={onChangeCommentInput}
      onChangePasswordInput={onChangePasswordInput}
      onChangeWriterInput={onChangeWriterInput}
      commentsData={commentsData}
    />
  );
}
