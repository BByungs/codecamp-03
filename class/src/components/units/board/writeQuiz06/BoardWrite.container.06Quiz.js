import {CREATE_BOARD} from "./BoardWrite06Quiz.queries"
import {useState} from "react"
import { useMutation } from "@apollo/client"
import BoardWriteUI06Quiz from "./BoardWrite.presenter.06Quiz"
import { useRouter } from "next/router"

export default function BoardWrite06Quiz() {
    const [ createBoard ] = useMutation(CREATE_BOARD)
    const [myWriter , setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    // 결과를 기다려야 하기때문에 async await을 써줌

    const router = useRouter()

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
                variables: { writer: myWriter, title: myTitle, contents: myContents}
            });
            console.log(result)
            console.log(result.data.createBoard.number)
            // number로 페이지 이동
            // router.push('/05-06-dynamic-board-read/result.data.createBoard.number')
            // 문자열 타입이라서 안됨 
    
            // router.push('/05-06-dynamic-board-read/'+ result.data.createBoard.number) // 옛날 방식
            router.push(`/Quiz/06-container-presenter-Quiz-02/${result.data.createBoard.number}`) // 템플릿 리터럴 쓰는게 좋음(최신방식)
        } catch(error) {
            // 실패할시 해야할 행동을 여기다 적음
            console.log(error)
        }
    }
    return <BoardWriteUI06Quiz
        onChangeMyWriter={onChangeMyWriter}
        onChangeMyTitle={onChangeMyTitle}
        onChangeMyContents={onChangeMyContents}
        aaa={aaa}
    />
}