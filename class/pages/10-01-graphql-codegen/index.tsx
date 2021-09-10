// 05-05-dynamic-board-write

import { useRouter } from "next/router"
import {useMutation , gql} from "@apollo/client"
// gql = graphql
// 쿼리문응 사용하겠다..
import {useState} from "react"
import { IMutation, IMutationCreateBoardArgs } from "../../src/commons/types/generated/types"


const CREATE_BOARD = gql`
    mutation createBoard($writer:String, $title:String, $contents:String) {
        createBoard(writer: $writer,title: $title,contents: $contents) {
            message
            number
        }
    }
`

export default function DynamicBoardWrite() {
    const [ createBoard ] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD)
    // 초기값이 string이기 때문에 state값의 타입이 string으로 자동추론 됨
    // const [myWriter , setMyWriter] = useState("")
    // const [myWriter , setMyWriter] = useState<string | number>("") 얘는 number가 들어가면 안되서 에러남
    const [myWriter , setMyWriter] = useState<string>("")
    const [myTitle, setMyTitle] = useState<string>("")
    const [myContents, setMyContents] = useState("")
    // 결과를 기다려야 하기때문에 async await을 써줌

    const router = useRouter()

    // setMyWriter("123213213") 정상작동
    // setMyWriter(123124241312) error

    const bbb: string ="asdf"


    function onChangeMyWriter(event) {
        setMyWriter(event.target.value)
    }
    function onChangeMyTitle(event) {
        setMyTitle(event.target.value)
    }
    function onChangeMyContents(event) {
        setMyContents(event.target.value)
    }

    // 실패할 가능성이 있는 코드는 try catch로 감싸주는게 좋다

    async function aaa () {
        try { // 네트워크는 항상 성공하지 않기 때문에 이렇게 해줘야 한다.
            const result = await createBoard({
                variables: { writer:myWriter , title:myTitle, contents:myContents }
            });
            console.log(result)
            console.log(result.data.createBoard.number)
            router.push(`/05-06-dynamic-board-read/${result.data.createBoard.number}`) 
        } catch(error) {
            // 실패할시 해야할 행동을 여기다 적음
            console.log(error)
        }
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

