import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";

export default function BoardWrite(props) {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contentError, setContentError] = useState("");
  const [titleError, setTitleError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [id, setId] = useState("");
  const router = useRouter();

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeContent(event) {
    setContents(event.target.value);
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value);
  }

  async function onClickButton() {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
      // isActive 조건문에 따라서 버튼 색 변하게 해야함
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
      // isActive 조건문에 따라서 버튼 색 변하게 해야함
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
      // isActive 조건문에 따라서 버튼 색 변하게 해야함
    }
    if (contents === "") {
      setContentError("내용을 입력해주세요.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              title,
              contents,
              password,
              youtubeUrl,
            },
          },
        });
        console.log(result);
        console.log(result.data.createBoard._id);
        setId(result.data.createBoard._id);
        router.push(
          `/boards/detailPage-nonMembers-basic-read/${result.data.createBoard._id}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function onclickEdit() {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
      // isActive 조건문에 따라서 버튼 색 변하게 해야함
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
      // isActive 조건문에 따라서 버튼 색 변하게 해야함
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
      // isActive 조건문에 따라서 버튼 색 변하게 해야함
    }
    if (contents === "") {
      setContentError("내용을 입력해주세요.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        await updateBoard({
          variables: {
            updateBoardInput: {
              title,
              contents,
              youtubeUrl,
            },
            password,
            boardId: router.query.detailPageNonMembersBasic,
            // router 동적폴더 안에 있는 정보 가져오는거
          },
        });
        router.push(
          `/boards/detailPage-nonMembers-basic-read/${router.query.detailPageNonMembersBasic}`
        );
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    }
  }

  return (
    <BoardWriteUI
      // router={router}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContent={onChangeContent}
      onChangeTitle={onChangeTitle}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickButton={onClickButton}
      writerError={writerError}
      titleError={titleError}
      contentError={contentError}
      passwordError={passwordError}
      onclickEdit={onclickEdit}
      isEdit={props.isEdit}
      // isActive 프롭스로 전달해야함
    />
  );
}
