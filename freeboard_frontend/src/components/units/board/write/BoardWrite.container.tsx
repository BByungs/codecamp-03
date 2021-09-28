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

  const [imageUrl, setImageUrl] = useState([]);
  // let imageUrl = [];

  const [isUpload1, setIsUpload1] = useState(false);
  const [isUpload2, setIsUpload2] = useState(false);
  const [isUpload3, setIsUpload3] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const fileRef1 = useRef<HTMLInputElement>();
  const fileRef2 = useRef<HTMLInputElement>();
  const fileRef3 = useRef<HTMLInputElement>();

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
              images: [...imageUrl],
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
        console.log(imageUrl);
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
    if (imageUrl) updateBoardInput.images = [...imageUrl];
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

  async function onChangeFile1(event) {
    console.log(event.target.files[0]);
    const myFile = event.target.files[0];
    if (!myFile) {
      alert("파일이 없습니다!");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    setIsUpload1(true);
    setImageUrl(imageUrl.concat([result.data.uploadFile.url]));
    // imageUrl.concat(result.data.uploadFile.url);
  }
  function onClickImageUpload1() {
    fileRef1.current?.click();
  }

  async function onChangeFile2(event) {
    console.log(event.target.files[0]);
    const myFile = event.target.files[0];
    if (!myFile) {
      alert("파일이 없습니다!");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    setIsUpload2(true);
    // setImageUrl([result.data.uploadFile.url]);
    setImageUrl(imageUrl.concat([result.data.uploadFile.url]));
    console.log(result.data.uploadFile.url);
  }
  function onClickImageUpload2() {
    fileRef2.current?.click();
  }

  async function onChangeFile3(event) {
    console.log(event.target.files[0]);
    const myFile = event.target.files[0];
    if (!myFile) {
      alert("파일이 없습니다!");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    setIsUpload3(true);
    // setImageUrl([result.data.uploadFile.url]);
    setImageUrl(imageUrl.concat([result.data.uploadFile.url]));
  }
  function onClickImageUpload3() {
    fileRef3.current?.click();
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
      onChangeFile1={onChangeFile1}
      onClickImageUpload1={onClickImageUpload1}
      onChangeFile2={onChangeFile2}
      onClickImageUpload2={onClickImageUpload2}
      onChangeFile3={onChangeFile3}
      onClickImageUpload3={onClickImageUpload3}
      fileRef1={fileRef1}
      fileRef2={fileRef2}
      fileRef3={fileRef3}
      isUpload1={isUpload1}
      isUpload2={isUpload2}
      isUpload3={isUpload3}
    />
  );
}
