import BoardWriteUI from "./BoardWrite.presenter";
import { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [isDaumPostCodeOpen, setIsDaumPostCodeOpen] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [addressDetail, setAddressDetail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  // let imageUrl = [];

  const [isUpload, setIsUpload] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const fileRef = useRef<HTMLInputElement>();

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeContents(event) {
    setContents(event.target.value);
  }
  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value);
  }
  function onChangeDetailAddress(event) {
    setAddressDetail(event.target.value);
  }
  function onClickAddressSearch() {
    setIsDaumPostCodeOpen(true);
  }

  const handleComplete = (data) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsDaumPostCodeOpen((prev) => !prev);
  };

  async function onClickBoardSubmit() {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              images: [...imageUrls],
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
        console.log(imageUrls);
      } catch (err) {
        alert(err.message);
      }
    }
  }

  async function onclickEdit() {
    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !zipcode &&
      !address &&
      !addressDetail
    ) {
      alert("수정된 내용이 없습니다.");
      return;
    }

    const updateBoardInput = {};

    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (imageUrl) updateBoardInput.images = [...imageUrls];
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password,
          boardId: router.query.boardID,
        },
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (err) {
      alert(err.message);
    }
  }

  function onChangeFile(fileUrl: string, index: number) {
    const newFileUrls = [...imageUrls];

    newFileUrls[index] = fileUrl;
    console.log(newFileUrls);
    setImageUrls(newFileUrls);
  }

  function onClickImageUpload() {
    fileRef.current?.click();
  }

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickAddressSearch={onClickAddressSearch}
      isDaumPostCodeOpen={isDaumPostCodeOpen}
      handleComplete={handleComplete}
      onClickBoardSubmit={onClickBoardSubmit}
      onChangeDetailAddress={onChangeDetailAddress}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onclickEdit={onclickEdit}
      isEdit={props.isEdit}
      zipcode={zipcode}
      address={address}
      data={props.data}
      onChangeFile={onChangeFile}
      onClickImageUpload={onClickImageUpload}
      fileRef={fileRef}
      isUpload={isUpload}
      imageUrls={imageUrls}
    />
  );
}
