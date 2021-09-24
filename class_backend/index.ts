// console.log("Hello World!");

import { createConnection } from "typeorm";
import {ApolloServer , gql} from "apollo-server"


// 플레이 그라운드에서 보이는 내용
const typeDefs = gql`
  # input CreateProductInput{
    
  # }

  type Query {
    fetchBoard : String!
  }

  type Mutation {
    createBoard : Int,
    createProcut(
      seller: String,
      createProductInput: String
    ): String
  }
`

// 실제로 작동하는 부분
const resolvers = {
    Query: {
      fetchBoard: () => {
        // database에서 해당하는 데이터 꺼내서 브라우저에 던져주기(응답주기)
        return {writer: "철수" , title:"제목입니다."}
      }
    },
    Mutation: {
      createBoard: () => {
        // database에 데이터 입력하기
        return {message: "성공했습니다" , number: 3}
        // 이런식으로 응답을 줬었음
      },
      createProcut: () => {
        return {
          _id:"123asdasd",
          number:1,
          message: ""
        }
      }
    }
}

const server = new ApolloServer({
  typeDefs, resolvers,
})

// api를 resolver라고 부름


createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5019,
  host: "34.64.221.225",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
}).then(() => {
  // 연결에 성공했을때 실행
  console.log("접속완료!!");
  server.listen({port : 4000});
  // 연결이 되기까지 기다리겠다 라는 뜻
  // 보통 백엔드는 4000, 8000, 8080을 씀
  // 그리고나서 yarn dev하면 계속 켜놔야함

  // 그래서 몇개 더 켜놔야 함
});
