import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

export default function BoardWrite(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detailPageNonMembersBasic },
  });
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

  // const [id, setId] = useState("");

  const [detailAddress, setDetailAddress] = useState("");
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  // 등록하기 버튼
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
              boardAddress: {
                zipcode: myZipcode,
                address: myAddress,
                addressDetail: detailAddress,
              },
            },
          },
        });
        console.log(
          `id: ${result.data.createBoard._id} , 우편번호: ${myZipcode} , 주소: ${myAddress} , 상세주소: ${detailAddress} , youtubeUrl: ${youtubeUrl}`
        );
        setId(result.data.createBoard._id);
        router.push(
          `/boards/detailPage-nonMembers-basic-read/${result.data.createBoard._id}`
        );
      } catch (error) {
        alert(error.message);
      }
    }
  }

  // 수정하기 버튼
  async function onclickEdit() {
    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !myZipcode &&
      !myAddress &&
      !detailAddress
    ) {
      alert("수정된 내용이 없습니다.");
      return;
    }

    const updateBoardInput = { boardAddress: {} };

    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (myZipcode) updateBoardInput.boardAddress.zipcode = myZipcode;
    if (myAddress) updateBoardInput.boardAddress.address = myAddress;
    if (detailAddress)
      updateBoardInput.boardAddress.addressDetail = detailAddress;

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password,
          boardId: router.query.detailPageNonMembersBasic,
        },
      });
      console.log(
        `우편번호: ${myZipcode} , 주소: ${myAddress} , 상세주소: ${detailAddress} , youtubeUrl: ${youtubeUrl}`
      );
      router.push(
        `/boards/detailPage-nonMembers-basic-read/${result.data.updateBoard._id}`
      );
    } catch (err) {
      alert(err.message);
    }
  }

  function InputDetailAddress(event) {
    setDetailAddress(event.target.value);
  }

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data);
    setIsOpen((prev) => !prev);
  };

  function onToggleZipcode() {
    setIsOpen((prev) => !prev);
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
      InputDetailAddress={InputDetailAddress}
      handleComplete={handleComplete}
      onToggleZipcode={onToggleZipcode}
      myZipcode={myZipcode}
      myAddress={myAddress}
      isOpen={isOpen}
      title={title}
      youtubeUrl={youtubeUrl}
      contents={contents}
      data={data}
    />
  );
}
