import BoardWriteUI from "./BoardWrite.presenter";
import { useState, useRef, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IUpdateBoardInput } from "../../../../commons/types/generated/types";

export default function BoardWrite(props: any) {
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

  const [files, setFiles] = useState<(File | null)[]>([null, null, null]); // 이미지 2차 실습

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const fileRef = useRef<HTMLInputElement>();

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }
  function onChangeYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }
  function onChangeDetailAddress(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }
  function onClickAddressSearch() {
    setIsDaumPostCodeOpen(true);
  }

  const handleComplete = (data: any) => {
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
        const uploadFiles = files // [File1, File2, null]
          .map((el) => (el ? uploadFile({ variables: { file: el } }) : null)); // [ uploadFile({ variables: { file: File1 } }), uploadFile({ variables: { file: File2 } }), null ]
        const results = await Promise.all(uploadFiles); // await Promise.all([ uploadFile({ variables: { file: File1 } }), uploadFile({ variables: { file: File2 } }), null ])
        const myImages = results.map((el) => el?.data.uploadFile.url || ""); // ["강아지이미지.png", "고양이이미지.png", ""]

        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              images: myImages,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
        // console.log(imageUrls);
      } catch (err: any) {
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

    const updateBoardInput: IUpdateBoardInput = {};

    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    // if (imageUrl) updateBoardInput.images = [...imageUrls];
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    const uploadFiles = files.map((el) =>
      el ? uploadFile({ variables: { file: el } }) : null
    );

    const results = await Promise.all(uploadFiles);
    const nextImages = results.map((el) => el?.data.uploadFile.url || "");
    updateBoardInput.images = nextImages;
    ///////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////// 이미지 수정 ///////////////////////////////////
    if (props.data?.fetchBoard.images?.length) {
      const prevImages = [...props.data?.fetchBoard.images]; // ["토끼이미지.png", "", "거북이이미지.png"]
      updateBoardInput.images = prevImages.map((el, index) => nextImages[index] || el); // prettier-ignore
    } else {
      updateBoardInput.images = nextImages;
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
    } catch (err: any) {
      alert(err.message);
    }
  }

  function onChangeFile(fileUrl: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = fileUrl;
    setFiles(newFiles);
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
      onChangeFiles={onChangeFile}
      onClickImageUpload={onClickImageUpload}
      fileRef={fileRef}
    />
  );
}
