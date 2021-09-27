// console.log("Hello World!");

import { createConnection } from "typeorm";
import {ApolloServer , gql} from "apollo-server"
import Board from "./Board.postgres";


// 플레이 그라운드에서 보이는 내용
const typeDefs = gql`
  type Return {
    message: String
    number: Int
  } 

  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  input number {
    number: Int
  }

  ##################

  type Query {
    fetchBoard(number: Int) : Board
    fetchBoards : [Board]
  }

  type Mutation {
    # createBoard(writer: String , title: String, age:Int) : Return
    ## input이라는 애들은 input이라는 타입을 따로 만들어야함
    ## 갯수가 적을땐 위에처럼 쓰는데 많으면 따로 타입을 만들어서 쓰는게 좋음
    createBoard(createBoardInput:CreateBoardInput!) : Return
    # 꼭 있어야 하면 ! 붙여줌
    updateBoard : Return
    deleteBoard : Return
  }

`

// 실제로 작동하는 부분
const resolvers = {
    Query: {
      fetchBoard: async(_:any, args:any) => {
        // const result = await Board.findOne({where: {number:1 , deletedAt: null}}) // number가 1인것만 뽑아와줘(where:조건)
        // return {
        //   writer: result?.writer, 
        //   title:result?.title, ti
        //   age:result?.age
        // }

        // result라는 놈이 다 가지고 있기때문에 밑에처럼만 해줘도 먹힘
        const result = await Board.findOne({where: {number:args.number , deletedAt:null}})
        return result
      },
      fetchBoards: async() => {
        const result = await Board.find({where:{deletedAt: null}}) // 배열안에 [{}, {}, {}, {}] 넣어져있음
        return result
      }
    },

    Mutation: {
      createBoard: async(_:any, args:any) => {
      // _ 는 페어런트는 백엔드개발자가 api끼리 통신할때 넘겨주는 데이터
      // 예를 들어 createBoard에서 updateBoard로 데이터를 넘겨줄때 사용
      // 지금 우린 쓰지 않으니까 _를 써주면됨

      // 앞서 typeDefs에서 입력받은 값을 args로 받으면 됨

      // const result = await Board.insert({
      //   title:args.title,
      //   writer:args.writer,
      //   age: args.age
      // }) 
      
      // const result = await Board.insert({
      //   title: args.createBoardInput.title,
      //   writer: args.createBoardInput.writer,
      //   age: args.createBoardInput.age,
      // })

      const result = await Board.insert({
        ...args.createBoardInput,
      })
        console.log(result)
        return {message: "성공했습니다" , number: result.identifiers[0].number}
      },
      updateBoard: async() => {
        // 앞에껀 조건 (조건에 해당하는걸로) 뒤에껀 변경할값
        // 정리 조건에 해당하는걸로 변경
        const result = await Board.update({number: 3}, {writer:"영희"}) // 3번의 writer를 "영희"로 변경
        return { message: "수정완료!!"}
      },
      deleteBoard: async() => {
        // await Board.delete({number:4})
        await Board.update({number:5},{deletedAt: new Date()})
        return {message: "삭제완료!!!"}
      }
    }
}

const server = new ApolloServer({
  typeDefs, resolvers,
})



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
  console.log("접속완료!!");
  server.listen({port : 4000});
}).catch(error=>{
  console.log(error)
})
