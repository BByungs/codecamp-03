import {useMutation , gql} from "@apollo/client"
import {useState} from "react"

const CREATE_BOARD = gql`
    mutation createBoard($writer:String, $title:String, $contents:String){
    createBoard(writer:$writer,title: $title,contents: $contents) {
        message
        number
    }
}
`
export default function GraphqlApiQuiz01() {
    const [ createBoard ] = useMutation(CREATE_BOARD)
    const [writer ,setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContenst] = useState("")
    
    async function onClickGraphqlApi() {
        const result = await createBoard({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result.data.createBoard)
    }
    function onChangeWriter(event) {
        setWriter(event.target.value)
    }
    function onChangeTitle(event) {
        setTitle(event.target.value)
    }
    function onChangeContents(event) {
        setContenst(event.target.value)
    }

    return (
        <>
            작성자: <input type="text" onChange={onChangeWriter} /><br/><br/>
            제목: <input type="text" onChange={onChangeTitle} /><br/><br/>
            내용: <input type="text" onChange={onChangeContents} /><br/><br/>
            <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기</button>
        </>
    )
}