import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
// import ReactQuill from "react-quill";
// 프론트 엔드 서버에서 그릴때, document가 없어서 문제가 됨

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  async function onClickSubmit(data) {
    console.log(data);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`28-02-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error) {
      //   Modal.error('')
      alert(error.message);
    }
  }

  function onChangeMyEdit(value) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    console.log(value);

    trigger("contents"); // contents라는걸 건드렸구나 라는걸 인식시켜주기 위해서 trigger를 씀
    // onChange 됐는지 react-hook-form에 알려주는 기능
  }

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeMyEdit} />
      <button type="submit">등록하기</button>
    </form>
  );
}
