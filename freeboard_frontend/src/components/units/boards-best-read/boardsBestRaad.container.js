import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./boardsBestRead.queries";
import BoardBestUI from "./boardsBestRead.presenter";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function BoardBestReadPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: fetchBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  // 게시물 등록 페이지로 이동
  function onClickSubmit() {
    router.push("/boards/new");
  }
  // 해당 게시물로 이동
  function onClickPost(event) {
    router.push(`/boards/detailPage-nonMembers-basic-read/${event.target.id}`);
  }
  const lastPage = Math.ceil(fetchBoardsCount?.fetchBoardsCount / 10);
  // ============================ 페이지 이동 함수 ===============================

  // 번호를 클릭하면 해당 페이지로 이동
  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
    setCurrentPage(Number(event.target.id));
  }

  // 다음 페이지로 이동
  function onClickRight() {
    if (startPage + 10 > lastPage) {
      return;
    }
    setCurrentPage(currentPage + 10);
    setStartPage((prev) => prev + 10);
  }

  // 이전 페이지로 이동
  function onClickLeft() {
    if (startPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 10);
    setStartPage((prev) => prev - 10);
  }

  // 첫 페이지로 이동
  function moveToStartPage() {
    setStartPage(1);
    setCurrentPage(1);
  }

  // 마지막 페이지로 이동
  function moveToLastPage() {
    setStartPage(lastPage);
    setCurrentPage(lastPage);
  }
  // ========================================================================

  return (
    <BoardBestUI
      data={data}
      onClickSubmit={onClickSubmit}
      onClickPost={onClickPost}
      onClickLeft={onClickLeft}
      onClickRight={onClickRight}
      onClickPage={onClickPage}
      startPage={startPage}
      lastPage={lastPage}
      moveToStartPage={moveToStartPage}
      moveToLastPage={moveToLastPage}
      currentPage={currentPage}
    />
  );
}
