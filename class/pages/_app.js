import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"; // apollo 쓰려면 import해서 이렇게 가져와야함

function MyApp({ Component, pageProps }) {
  // Apollo Setting
  const client = new ApolloClient({
    // 주소를 등록해줘야함
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  // 각각의 페이지는 index.js

  // 어떤 페이지를 들어가든 위에 있는 코드가 됨 그냥 이렇게 되는구나 라고만 이해하자
  // 여기다가 제공을 해줘야함
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
