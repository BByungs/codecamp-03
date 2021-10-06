import { useContext } from "react";
import { MyContext } from "../../../../pages/22-04-context-api/";
export default function MyBoardWriteUI() {
  const { isEdit } = useContext(MyContext); // 얘는 쓸때
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}
