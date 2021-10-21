import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MypageSidebarUI from "./MypageSidebar.presenter";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
      userPoint {
        amount
      }
    }
  }
`;

export default function MypageSidebar(props) {
  const { data: fetchUserLoggedIn } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  function onClickMoveToMain() {
    router.push("/mypage");
  }

  function onClickMoveToMyPoint() {
    router.push("/mypage/mypoint");
  }

  function onClickMoveToMyProduct() {
    router.push("/mypage/myproduct");
  }

  return (
    <MypageSidebarUI
      onClickMoveToMain={onClickMoveToMain}
      onClickMoveToMyPoint={onClickMoveToMyPoint}
      onClickMoveToMyProduct={onClickMoveToMyProduct}
      isMypageMain={props.isMypageMain}
      isMypageMyPoint={props.isMypageMyPoint}
      isMypageMyProduct={props.isMypageMyProduct}
      fetchUserLoggedIn={fetchUserLoggedIn}
    />
  );
}
