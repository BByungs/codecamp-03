import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import { Dispatch, SetStateAction } from "react";

const RESTORE_ACCRESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

//  1. refreshToken으로 새로운 accessToken 재발급 받기
export async function getAccessToken(
  setAccessToken: Dispatch<SetStateAction<string>>
) {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend03.codebootcamp.co.kr/graphql",
      { credentials: "include" }
      // 중요한 데이터는 포함 시킨다는 뜻임
    );
    const result = await graphQLClient.request(RESTORE_ACCRESS_TOKEN);
    // restore API를 날리는 부분이라
    // result안에는 accessToken이 들어 있을거임

    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken); // globalContext에 저장
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
