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
  const [imageUrl, setImageUrl] = useState([]);
  const [myFile, setMyFile] = useState([]);
  const [url, setUrl] = useState([]);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // ####
  // const urlList = [];
  // ####
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
      files.map((el) =>
        uploadFile({
          variables: {
            file: el,
          },
        })
      )
    );

    result.forEach((el) => {
      urlList.push(el);
    });

    console.log(urlList);
    setUrl(urlList);
  }

  // ##############################################
  async function onClickSubmit() {
    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });

    // const urls = [result].map((el) => el.data.uploadFile.url);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            images: url,
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
            // uuid 라는 라이브러리가 있는데
            // 이걸 써주면 유니크한 아이디를 만들어줌
            // 렌더링 할때 값을 다시 받아와서 재 렌더링 시켜줘야해서
            // 스테이트값 씀
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
