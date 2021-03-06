import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";

export default function BoardCommentWrite(props: any) {
  const router = useRouter();
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myStar, setMyStar] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
    setMyWriter(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
    setMyContents(event.target.value);
  }

  function onChangeStar(value: any) {
    setMyStar(value);
  }

  async function onClickWrite() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: myWriter,
            password: myPassword,
            contents: myContents,
            rating: myStar,
          },
          boardId: String(router.query.boardID),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardID },
          },
        ],
      });
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function onClickUpdate(event: any) {
    if (!myContents) {
      alert("????????? ???????????? ???????????????.");
      return;
    }
    if (!myPassword) {
      alert("??????????????? ???????????? ???????????????.");
      return;
    }

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents: myContents, rating: myStar },
          password: myPassword,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardID },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentWriteUI
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyPassword={onChangeMyPassword}
      onChangeMyContents={onChangeMyContents}
      onChangeStar={onChangeStar}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      el={props.el}
      myContents={myContents}
      data={props.data}
    />
  );
}
