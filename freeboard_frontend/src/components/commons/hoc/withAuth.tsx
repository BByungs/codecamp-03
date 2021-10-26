import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component: any) => (props: any) => {
  const { refreshToken, setRefreshToken }: any = useContext(GlobalContext);
  const router = useRouter();
  // console.log(refreshToken);

  useEffect(() => {
    const refreshTokenItem = window.localStorage.getItem("refreshToken");
    if (!refreshTokenItem) {
      alert("로그인을 다시 해주세요");
      router.push("/");
    }
  }, [refreshToken]);

  return <Component {...props} />;
};
