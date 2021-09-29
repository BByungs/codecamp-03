import { useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { fileValidation } from "../../src/commons/libraries/validation";

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

export default function ImageUpladPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [myFile, setMyFile] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  const fileRef = useRef<HTMLInputElement>();
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onClickGray() {
    fileRef.current.click();
  }

  function onClickFile(event) {
    const file = event.target.files[0];
    if (!fileValidation(file)) {
      return;
    }
    console.log(file);

    const fileReader = new FileReader(); // 자바스크립트에 있는 내장 객체
    // 파일을 읽는 객체
    fileReader.readAsDataURL(file); // 임시 url을 뽑아주는데
    // 여기서 나오게되는 url은 스토리지에 올라간 url이 아님
    // 그냥 말 그대로 임시 url임(내 컴퓨터에서만 돌아가는 임시 url)

    fileReader.onload = (data) => {
      setImageUrl(data.target.result); // 임시로 생긴 url (서버에 올라가지않고 , 스토리지에 저장x인상태)
      // console.log(data.target.result);
      setMyFile(file);
    };
  }

  async function onClickSubmit() {
    const start = performance.now();
    const result = await Promise.all([
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      // 얘를 맵으로 한번 해보는걸 도전해보자
    ]); // promise를 동시에 요청하는 방법
    const end = performance.now();
    console.log(end - start);

    const urls = result.map((el) => el.data.uploadFile.url);
    console.log(urls);

    // const start = performance.now();
    // const result1 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result2 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result3 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result4 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result5 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const end = performance.now();
    // console.log(end - start);

    // const url1 = result1.data.uploadFile1.url;
    // const url2 = result2.data.uploadFile2.url;
    // const url3 = result3.data.uploadFile3.url;
    // const url4 = result4.data.uploadFile4.url;
    // const url5 = result5.data.uploadFile5.url;

    // 게시물 등록
  }

  return (
    <>
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "gray" }}
        onClick={onClickGray}
      >
        이미지 업로드!!!
      </div>
      <img
        src={imageUrl}
        style={{ width: "900", height: "350px", marginTop: "30px" }}
      />
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileRef}
        onChange={onClickFile}
      />
      <button onClick={onClickSubmit}>제출하기</button>
    </>
  );
}
