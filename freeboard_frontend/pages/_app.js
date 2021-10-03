import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import Main from "../pages/main";
import SignIn from "../pages/signin";

import { createUploadLink } from "apollo-upload-client";
import { useRouter } from "next/router";
("./signin");
const HIDEN_MAIN = ["/main"];
const HIDDEN_SIGNIN = ["/signin"];

function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
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
    <>
      <ApolloProvider client={client}>
        {!isMain && !isSignIn && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
        {isMain && <Main />}
        {isSignIn && <SignIn />}
      </ApolloProvider>
    </>
  );
}

export default MyApp;
