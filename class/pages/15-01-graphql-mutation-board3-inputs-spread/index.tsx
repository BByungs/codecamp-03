import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
// const CREATE_BOARD = gql`
//   mutation createBoard($writer: String, $title: String, $contents: String) {
//     createBoard(writer: $writer, title: $title, contents: $contents) {
//       message
//       number
//     }
//   }
// `;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

// 04-04-graphql-mutaion-board3과 비교하면서 학습하기!!!!
export default function GraphqlMutationBoard3InputsSpread() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contents: "",
    password: "",
  });

  function onChangeMyInputs(event) {
    setMyInputs({
      ...myInputs,
      // writer: myInputs.writer
      // writer: myInputs.title
      // writer: myInputs.contents
      // 이게 ...myInputs임

      // writer: "철수"
      // key에서 배열을 사용하면 변수로 취급함
      [event.target.name]: event.target.value,
    });
  }

  async function apiSubmit() {
    const result = await createBoard({
      variables: {
        createBoardInput: { ...myInputs },
      },
    });
    // console.log(result);
    console.log(result.data.createBoard._id);
  }

  return (
    <>
      작성자:{" "}
      <input
        type="text"
        placeholder="writer"
        onChange={onChangeMyInputs}
        name="writer"
      />
      <br />
      제목:{" "}
      <input
        type="text"
        placeholder="title"
        onChange={onChangeMyInputs}
        name="title"
      />
      <br />
      내용:{" "}
      <input
        type="text"
        placeholder="contents"
        onChange={onChangeMyInputs}
        name="contents"
      />
      <br />
      비밀번호:{" "}
      <input
        type="password"
        placeholder="password"
        onChange={onChangeMyInputs}
        name="password"
      />
      <button onClick={apiSubmit}>GRAPHQL-API 요청하기!!!</button>
    </>
  );
}
