import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();
  console.log(accessToken);
  useEffect(() => {
    const accessTokenItem = window.localStorage.getItem("accessToken");
    if (!accessTokenItem) {
      alert("로그인을 다시 해주세요");
      router.push("/");
    }
  }, [accessToken]);

  return <Component {...props} />;
};
