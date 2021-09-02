import {useMutation , gql} from "@apollo/client"

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

export default function GraphqlApiQuiz01() {
    const [ createBoard ] = useMutation(CREATE_BOARD)
    async function onClickGraphqlApi() {
        const result = await createBoard()
        console.log(result.data.createBoard.message)
    }

    return (
        <>
            <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기</button>
        </>
    )
}