import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "./header.queries";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";

const FIRST = ["/"];
const MARKET_MAIN = ["/marketMain"];
export default function Header() {
  const { setAccessToken } = useContext(GlobalContext);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const router = useRouter();
  const isFirst = FIRST.includes(router.pathname);
  const isMainMarket = MARKET_MAIN.includes(router.pathname);

  function onClickHome() {
    router.push("/");
  }
  function onClickLogin() {
    router.push("/main");
  }
  function onClickLogout() {
    localStorage.removeItem("accessToken");
    setAccessToken("");
  }
  function onClickMarket() {
    router.push("/marketMain");
  }
  //data={data}
  return (
    <HeaderUI
      onClickHome={onClickHome}
      data={data}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
      isFirst={isFirst}
      isMainMarket={isMainMarket}
      onClickMarket={onClickMarket}
    />
  );
}
