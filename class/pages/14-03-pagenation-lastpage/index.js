import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

// 이 부분 잘못씀
const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Page = styled.span`
  margin: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export default function PagenationLastPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  // 항상 data인데,
  // 밑에보면 data가 하나 더 쓰임
  // 하나더 쓰고 싶으면 data:쓰고싶은거

  const { data: dataBoardCount } = useQuery(FETCH_BOARD_COUNT);

  console.log(dataBoardCount);
  const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount / 10);

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  function onClicnPrevPage() {
    if (startPage === 1) {
      return;
    }
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    console.log(startPage, lastPage);
    // 10을 더한 페이지가 마지막페이지보다 크면 그냥 종료
    if (startPage + 10 > lastPage) {
      return;
    } // Early exit pattern
    setStartPage((prev) => prev + 10);
  }

  return (
    <>
      <div onClick={onClickNextPage}>페이지네이션(마지막페이지)</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <br />
      <span onClick={onClicnPrevPage}>이전</span>
      {/* 10을 계속 더하면서 lastPage보다 클 경우 그 다음 페이지는 안보임 */}
      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && (
            <Page
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
            >
              {startPage + index}
            </Page>
          )
      )}
      <span onClick={onClickNextPage}>다음</span>
    </>
  );
}
