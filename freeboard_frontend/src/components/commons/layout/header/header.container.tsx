import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "./header.queries";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";

const MAIN = ["/"]; // marketMain
const BOARD_LIST = ["/boardList"]; // boardList
const MYPAGE = ["/mypage"];

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Header() {
  const { setAccessToken } = useContext(GlobalContext);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const router = useRouter();
  const isMain = MAIN.includes(router.pathname);
  const isBoardList = BOARD_LIST.includes(router.pathname);
  const isMyPage = MYPAGE.includes(router.pathname);

  function onClickLogin() {
    router.push("/main");
  }
  function onClickLogout() {
    localStorage.removeItem("accessToken");
    setAccessToken("");
  }
  function onClickMain() {
    router.push("/");
  }
  function onClickBoardList() {
    router.push("/boardList");
  }
  function onClickMyPage() {
    router.push("/mypage");
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <HeaderUI
      data={data}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
      isMain={isMain}
      isMyPage={isMyPage}
      isBoardList={isBoardList}
      onClickMain={onClickMain}
      onClickBoardList={onClickBoardList}
      onClickMyPage={onClickMyPage}
      // onClickPayment={onClickPayment}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalVisible={isModalVisible}
    />
  );
}
