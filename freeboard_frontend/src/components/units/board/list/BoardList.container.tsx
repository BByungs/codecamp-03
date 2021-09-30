import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import _ from "lodash";
import { v4 as uuid } from "uuid";

export default function BoardList() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: fetchBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTitle, setSearchTitle] = useState("");
  // const [date, setDate] = useState("");

  // 게시물 등록 페이지로 이동
  function onClickSubmit() {
    router.push("/boards/new");
  }

  // 해당 게시물로 이동
  function onClickPost(event) {
    router.push(`/boards/${event.currentTarget.id}`);
  }

  const lastPage = Math.ceil(fetchBoardsCount?.fetchBoardsCount / 10);

  // 번호를 클릭하면 해당 페이지로 이동
  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
    setCurrentPage(Number(event.target.id));
  }

  // 다음 페이지로 이동
  function onClickRight() {
    if (currentPage + 10 > lastPage) {
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
    // setStartPage(lastPage - ((lastPage % 10) - 1));
    setStartPage(lastPage);
    setCurrentPage(lastPage);
  }

  function onChangeSearchTitle(event: any) {
    setSearchTitle(event.target.value);
    // getDebounce(event.target.value);
  }
  function onClickSearh() {
    refetch({
      page: 1,
      search: searchTitle,
    });
    setCurrentPage(1);
  }

  function onChange(date, dateString) {
    console.log(dateString);
    // setDate(dateString);
    refetch({
      page: 1,
      startDate: dateString,
      endDate: dateString,
    });
  }

  return (
    <BoardListUI
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
      onChangeSearchTitle={onChangeSearchTitle}
      onClickSearh={onClickSearh}
      onChange={onChange}
    />
  );
}
