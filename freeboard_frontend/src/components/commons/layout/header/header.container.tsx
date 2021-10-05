import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "./header.queries";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
export default function Header(props) {
  // const { data } =
  // useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const router = useRouter();
  function onClickLogo() {
    router.push("/boards");
  }

  //data={data}
  return <HeaderUI onClickLogo={onClickLogo} data={props.data} />;
}
