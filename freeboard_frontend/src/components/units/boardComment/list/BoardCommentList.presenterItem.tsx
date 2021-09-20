import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import {
  List,
  CommentList_Comment_Container_Top,
  CommentList_ProfilePhoto,
  CommentList_Comment_Container_Top_Right,
  CommentList_Profile_StarScope,
  CommentList_Writer,
  CommentPencil,
  Star,
  CommentX,
  CommentList_Comment_Read,
  CommentList_Write_Date,
  Underline,
  PasswordInput,
} from "./BoardCommentList.styles";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";

export default function BoardCommentListUIItem(props) {
  const [starValue, setStarValue] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteCommentId, setDeleteCommentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");
  const router = useRouter();

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const showModal = (event) => {
    setIsModalVisible(true);
    setDeleteCommentId(event.target.id);
    setIsOpenDeleteModal((prev) => !prev);
  };

  function onClickEdit() {
    setIsEdit((prev) => !prev);
  }

  async function onClickDelete() {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardID },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  function onChangeDeletePassword(event) {
    setMyPassword(event.target.value);
  }

  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <List>
          <CommentList_Comment_Container_Top>
            <CommentList_ProfilePhoto src="/images/boardComment/list/comment_profile_icon.png" />
            <CommentList_Comment_Container_Top_Right>
              <CommentList_Profile_StarScope>
                <CommentList_Writer>{props.el?.writer}</CommentList_Writer>
                {/* 별점 */}
                <Star value={props.el?.rating} disabled />
                <CommentPencil
                  src="/images/boardComment/list/option_update_icon.png"
                  onClick={onClickEdit}
                  id={props.el?._id}
                />
                <CommentX
                  src="/images/boardComment/list/option_delete_icon.png"
                  onClick={showModal}
                  id={props.el?._id}
                />
              </CommentList_Profile_StarScope>
              <CommentList_Comment_Read>
                {props.el?.contents}
              </CommentList_Comment_Read>
              <CommentList_Write_Date>
                {props.el?.createdAt.slice(0, 10)}
              </CommentList_Write_Date>
            </CommentList_Comment_Container_Top_Right>
          </CommentList_Comment_Container_Top>
          <Underline />
        </List>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
