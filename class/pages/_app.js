import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client"; // apollo 쓰려면 import해서 이렇게 가져와야함
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";

import { createUploadLink } from "apollo-upload-client";
import { createContext, useState, useEffect } from "react";

//! refreshToken 수업 내용
import { onError } from "@apollo/client/link/error"; // 에러가 났을때 체크해주는 기능
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
//! ######################

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDqMZBInmQqBw3YigL0dIeFzaswmw1DjGo",
  authDomain: "test02-bd48c.firebaseapp.com",
  projectId: "test02-bd48c",
  storageBucket: "test02-bd48c.appspot.com",
  messagingSenderId: "404431262637",
  appId: "1:404431262637:web:8e97e12b2ef0008f670724",
  measurementId: "G-N9JNDKFPJ5",
});

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

  // 스토리지에 넣는 방법
  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // setAccessToken(accessToken);
    // localStorage에 저장하면 위험해서 변수에 이렇게 담았었음
    if (localStorage.getItem("refreshToken")) {
      //  refreshToken이 있다면
      getAccessToken(setAccessToken);
      // Restore API를 날리는 getAccessToken함수 실행
      // setAccessToken을 날려서 새로운 accessToken을 저장하는 함수임
    }
  }, []);
  // ###############################

  // ! refreshToken 수업 내용
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 어떤 쿼리를 했다가 실패했는지 (operation)
    // 그다음 취해질 동작(forword)
    if (graphQLErrors) {
      // graphQLErrors가 있다면
      for (const err of graphQLErrors) {
        // 그때 발생한 에러가 unAuth라면
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              // 기존의 http header를 가져와야함
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          // 이 결과를 forwoard해줘야함
          return forward(operation);
        }
      }
    }
  });
  // ! refreshToken 수업 내용

  // ! Apollo Setting
  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include", // "중요한 정보들을 포함시켜줘"
  });
  // ! Apollo Setting

  const client = new ApolloClient({
    // 주소를 등록해줘야함
    // uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, uploadLink]),
    // errorLink , uploadLink 순서에 맞춰서 넣어줌
  });
  // 각각의 페이지는 index.js

  // 어떤 페이지를 들어가든 위에 있는 코드가 됨 그냥 이렇게 되는구나 라고만 이해하자
  // 여기다가 제공을 해줘야함
  return (
    // GlobalContext.Provider로 전체를 감싸고 value를 전달
    <GlobalContext.Provider value={value}>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
