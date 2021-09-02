// 04-03-graphql-mutation-board2

import {useMutation , gql} from "@apollo/client"
// gql = graphql
// 쿼리문응 사용하겠다..
import {useState} from "react"
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
export default function GraphqlMutationBoard3Page() {
    const [ createBoard ] = useMutation(CREATE_BOARD)
    const [myWriter , setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    // 결과를 기다려야 하기때문에 async await을 써줌
    async function aaa () {
        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents}
        });
        console.log(result)
        console.log(result.data.createBoard.number)
    }
    function onChangeMyWriter(event) {
        setMyWriter(event.target.value)
    }
    function onChangeMyTitle(event) {
        setMyTitle(event.target.value)
    }
    function onChangeMyContents(event) {
        setMyContents(event.target.value)
    }
    return (
        <>
            작성자: <input type="text" placeholder="writer" onChange={onChangeMyWriter} /><br/>
            제목: <input type="text" placeholder="title" onChange={onChangeMyTitle} /><br/>
            내용: <input type="text" placeholder="contents" onChange={onChangeMyContents} /><br/>
            <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
        </>
    )
}

