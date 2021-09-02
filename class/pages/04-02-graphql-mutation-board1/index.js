import {useMutation , gql} from "@apollo/client"
// gql = graphql
// 쿼리문응 사용하겠다..
const CREATE_BOARD = gql`
    mutation {
        createBoard(
            writer:"안병진",
            title: "안녕하세요 안병진입니다.",
            contents: "하하"
        ) {
            message
            number
        }
    }
`
export default function GraphqlMutationBoard1Page() {
    const [ createBoard ] = useMutation(CREATE_BOARD)
    // 결과를 기다려야 하기때문에 async await을 싸줌
    async function aaa () {
        const result = await createBoard();
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