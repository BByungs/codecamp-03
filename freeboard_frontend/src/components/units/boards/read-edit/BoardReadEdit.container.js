import BoardReadEditUI from "./BoardReadEdit.presenter";
import { useState } from "react";
import { UPDATE_BOARD_COMMENT } from "./BoardReadEdit.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
export default function BoardReadEdit() {
  const [editPasswordInput, setEditPasswordInput] = useState("");
  const [editCommentInput, setEditCommentInput] = useState("");
  const router = useRouter();

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  function onChangeEditCommentWriterInput(event) {
    setEditWriterInput(event.target.value);
  }
  function onChangeEditCommentPasswordInput(event) {
    setEditPasswordInput(event.target.value);
  }
  function onChangeEditCommentSubmitInput(event) {
    setEditCommentInput(event.target.value);
  }
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
          boardCommentId: router.query.detailPageNonMembersBasic,
        },
      });
    } catch (error) {
      alert(error);
    }
  }
  return (
    <BoardReadEditUI
      onChangeEditCommentPasswordInput={onChangeEditCommentPasswordInput}
      onChangeEditCommentSubmitInput={onChangeEditCommentSubmitInput}
      updateBoardComment={updateBoardComment}
      onClickEditCommentButton={onClickEditCommentButton}
    />
  );
}
