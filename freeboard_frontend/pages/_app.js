import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";

import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import SignIn from "../pages/signin";
import Main from "./index";

import { createUploadLink } from "apollo-upload-client";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
("./signin");
const HIDEN_MAIN = ["/"];
const HIDDEN_SIGNIN = ["/signin"];

export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    // localStorage.getItem("accessToken") 있으면 저장
    // 없으면 ""
    setAccessToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  const client = new ApolloClient({
    // uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
    link: ApolloLink.from([uploadLink]),
  });

  const router = useRouter();
  const isMain = HIDEN_MAIN.includes(router.pathname);
  const isSignIn = HIDDEN_SIGNIN.includes(router.pathname);

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        {!isMain && !isSignIn && (
          <Layout>
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
