import { useEffect, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function Quzi20() {
  const fileRef = useRef<HTMLInputElement>();
  const [imageUrl, setImageUrl] = useState("");
  const [myFile, setMyFile] = useState("");
  const [url, setUrl] = useState("");
  const [imageTag, setImageTag] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const divRef = useRef<HTMLInputElement>();

  function onClickBtn() {
    fileRef.current.click();
  }

  async function onChangeFile(data) {
    console.log(data.target.files[0]);
    const file = data.target.files[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target.result);
      setMyFile(file);
    };

    const result = await uploadFile({
      variables: {
        file: file,
      },
    });
    console.log(result.data.uploadFile.url);
    setUrl(result.data.uploadFile.url);
  }

  useEffect(() => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setImageTag(img);
    };
  }, [myFile]);

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

  async function onClickSubmit() {
    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });

    const urls = [result].map((el) => el.data.uploadFile.url);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            images: urls,
          },
        },
      });
      console.log(result.data.createBoard._id);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {imageUrl && (
        <>
          <img src={imageUrl} style={{ width: "700px", height: "500px" }} />
          <br />
        </>
      )}
      작성자 : <input type="text" onChange={onChangeWriter} />
      <br />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickBtn}>이미지 선택</button>
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileRef}
        onChange={onChangeFile}
        multiple
      />
      <br />
      <button onClick={onClickSubmit}>저장하기</button>
    </>
  );
}
