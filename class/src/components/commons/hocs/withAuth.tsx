import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인 한 사람만 입장이 가능합니다!!");
      router.push("/23-01-login"); // login부분을 event로 받아서 넣으면 모든곳에서 적용 가능
    }
  }, []);

  return <Component {...props} />;
};

// 권한분기
