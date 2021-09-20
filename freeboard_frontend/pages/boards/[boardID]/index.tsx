// 상세페이지 (detail page)
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
import styled from "@emotion/styled";

const Underline = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 1199px;
  /* margin: 100px; */
  margin-top: 87px;
  margin-bottom: 40px;
`;

export default function BoardsDetailPage() {
  return (
    <>
      <BoardDetail />
      <Underline />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
