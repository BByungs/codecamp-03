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
  const [url, setUrl] = useState([]);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [list, setList] = useState([]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

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

  // ##############################################

  function onClickBtn() {
    fileRef.current.click();
  }

  // ##############################################

  async function onChangeFile(data) {
    const files = Array.from(data.target.files);
    const urlList = [];
    const result = await Promise.all(
      files.map((el) => uploadFile({ variables: { file: el } }))
    );

    result.forEach((el) => {
      urlList.push(el);
    });
    console.log(urlList);

    setUrl(urlList);
    const list = urlList.map((el) => {
      return el.data.uploadFile.url;
    });
    setList(list);
  }

  // ##############################################
  async function onClickSubmit() {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            images: list,
          },
        },
      });
      console.log(result.data.createBoard._id);
    } catch (error) {
      alert(error.message);
    }
  }
  // ##############################################

  return (
    <>
      {url && (
        <>
          {url.map((el, idx) => (
            <div key={el.data.uploadFile.url}>
              <img
                src={`https://storage.googleapis.com/${el.data.uploadFile.url}`}
                style={{
                  width: "700px",
                  height: "500px",
                  marginBottom: "30px",
                }}
              />
              <br />
            </div>
          ))}
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
