import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";

import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import SignIn from "../pages/signin";
import Main from "./main";

import { createUploadLink } from "apollo-upload-client";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../src/components/commons/library/getAccessToken";
const HIDEN_MAIN = ["/main"];
const HIDDEN_SIGNIN = ["/signin"];
const HIDDEM_MYPAGE = ["/mypage", "/mypage/mypoint", "/mypage/myproduct"];

export const GlobalContext = createContext(null);

// * 함수 시작
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [refreshToken, setRefreshToken] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
    setRefreshToken: setRefreshToken,
    refreshToken: refreshToken,
    setIsEdit: { setIsEdit },
    isEdit: { isEdit },
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) {
      getAccessToken(setAccessToken);
    }
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    // uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, uploadLink]),
  });

  const router = useRouter();
  const isMain = HIDEN_MAIN.includes(router.pathname);
  const isSignIn = HIDDEN_SIGNIN.includes(router.pathname);
  const isMypage = HIDDEM_MYPAGE.includes(router.pathname);

  const isMypageMain = router.pathname === "/mypage";
  const isMypageMyPoint = router.pathname === "/mypage/mypoint";
  const isMypageMyProduct = router.pathname === "/mypage/myproduct";

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        {!isMain && !isSignIn && (
          <Layout
            isMypage={isMypage}
            isMypageMain={isMypageMain}
            isMypageMyPoint={isMypageMyPoint}
            isMypageMyProduct={isMypageMyProduct}
          >
            <Component {...pageProps} />
          </Layout>
        )}

        {isMain && <Main />}

        {isSignIn && <SignIn />}
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
