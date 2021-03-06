import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [keyword, setKeyword] = useState("");
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      page: 1,
      search: keyword,
    },
  });

  const { data: fetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT, {
    variables: {
      search: keyword,
      endDate: endDate
        ? endDate
        : `${year}-${month}-${day < 10 ? `0${day}` : day}`,
      startDate: startDate ? startDate : `2021-08-30`,
    },
  });

  const { data: fetchBoardsOfTheBest } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">
  >(FETCH_BOARDS_OF_THE_BEST);
  const router = useRouter();

  // 게시물 등록 페이지로 이동
  function onClickSubmit() {
    router.push("/boards/new");
  }

  // 해당 게시물로 이동
  function onClickPost(event: ChangeEvent<HTMLInputElement>) {
    router.push(`/boards/${event.currentTarget.id}`);
  }

  const lastPage = Math.ceil(fetchBoardsCount?.fetchBoardsCount / 10);

  // 번호를 클릭하면 해당 페이지로 이동
  function onClickPage(event: any) {
    // clickEvent는 어떻게 타입 주는지 궁금
    refetch({ page: Number(event.target.id), search: searchTitle });
    setCurrentPage(Number(event.target.id));
  }

  // 다음 페이지로 이동
  function onClickRight() {
    if (currentPage + 10 > lastPage) {
      return;
    }
    refetch({
      page: currentPage + 10,
      search: searchTitle,
    });
    setCurrentPage(currentPage + 10);
    setStartPage((prev) => prev + 10);
    console.log(fetchBoardsCount);
  }

  // 이전 페이지로 이동
  function onClickLeft() {
    if (startPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 10);
    setStartPage((prev) => prev - 10);
    refetch({
      page: currentPage - 10,
      search: searchTitle,
    });
  }

  function onChangeSearchTitle(event: ChangeEvent<HTMLInputElement>) {
    setSearchTitle(event.target.value);
  }

  function onClickSearh() {
    refetch({
      page: 1,
      search: searchTitle,
      startDate,
      endDate,
    });
    setKeyword(searchTitle);
    setCurrentPage(1);
    setStartPage(1);
  }

  function onChange(_: any, dateString: string) {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  }

  function onClickBestPost(event: ChangeEvent<HTMLInputElement>) {
    router.push(`/boards/${event.currentTarget.id}`);
  }

  // console.log(lastPage);
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
      currentPage={currentPage}
      onChangeSearchTitle={onChangeSearchTitle}
      onClickSearh={onClickSearh}
      onChange={onChange}
      fetchBoardsOfTheBest={fetchBoardsOfTheBest}
      onClickBestPost={onClickBestPost}
    />
  );
}
