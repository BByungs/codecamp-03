import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "./header.queries";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
export default function Header() {
  const { setAccessToken } = useContext(GlobalContext);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const router = useRouter();
  function onClickHome() {
    router.push("/boards");
  }
  function onClickLogin() {
    router.push("/main");
  }
  function onClickLogout() {
    localStorage.removeItem("accessToken");
    setAccessToken("");
  }
  //data={data}
  return (
    <HeaderUI
      onClickHome={onClickHome}
      data={data}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
    />
  );
}
