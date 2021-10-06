import { useRouter } from "next/router";
import { Component, useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";

// function withAuth(Component) {
//   return function 이름은상관없음(props) {
//     const router = useRouter();
//     const { accessToken } = useContext(GlobalContext);

//     useEffect(() => {
//       if (!accessToken) router.push("/login");
//     }, []);

//     return <Component {...props} />;
//   };
// }
// 중간에 인증과정을 끼워넣기 위해서
// hoc를 사용했음

const withAuth = (Component: any) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) router.push("/login");
  }, []);

  return <Component {...props} />;
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);
