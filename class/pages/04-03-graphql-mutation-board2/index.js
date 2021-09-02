// 04-03-graphql-mutation-board2

import {useMutation , gql} from "@apollo/client"
// gql = graphql
// 쿼리문응 사용하겠다..
const CREATE_BOARD = gql`
    mutation createBoard($writer:String, $title:String, $contents:String) {
        createBoard(
            writer: $writer,
            title: $title,
            contents: $contents
        ) {
            message
            number
        }
    }
`
export default function GraphqlMutationBoard2Page() {
    const [ createBoard ] = useMutation(CREATE_BOARD)
    
    // 결과를 기다려야 하기때문에 async await을 싸줌
    async function aaa () {
        const result = await createBoard({
            variables: { writer: "AhnByeongJin", title: "variables", contents:"와 ㄷㄷ 신기하다 연결되네?"}
        });
        console.log(result)
        console.log(result.data.createBoard.number)
    }
    return (
        <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
    )
}

// http://example.codebootcamp.co.kr/graphql 에서
// mutation을 받아와서
// gql이라는 쿼리문을 사용해서 CREATE_BOARD를 만들어주고
// createBoard에서는 객체를 message , number로 뿌려주겠다는 뜻임
// const [createBoard] = useMutation(CREATE_BOARD)를 통해서 함수로 만들어주고
// createBoard()를 동기 처리해서 데이터를 받아온것임