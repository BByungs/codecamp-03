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
    const accessToken = localStorage.getItem("accessToken") || "";
    // localStorage.getItem("accessToken") 있으면 저장
    // 없으면 ""
    setAccessToken(accessToken);
  }, []);
  // ###############################

  // Apollo Setting
  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    // 주소를 등록해줘야함
    // uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
    link: ApolloLink.from([uploadLink]),
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
