import BoardWriteUI from "./BoardWrite.presenter"
// presenter를 import를 통해 불러와야함
import {useState, useEffect} from "react"
import {useMutation} from "@apollo/client"

import { CREATE_BOARD } from "./BoardWrite.queries"
// CREATE_BOARD를 import 해온거

export default function BoardWrite() {
    const [ createBoard ] = useMutation(CREATE_BOARD)
    const [myWriter , setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [zzz ,setZzz] = useState(true)
    const [qqq, setQqq] = useState(false)
    
    // myWriter , myTitle , myContents 모두 내용이 저장되어 있다면,
    // 즉, (myWriter !== "" && myTitle !== "" && myContents !== "") 라면,
    // setQqq를 사용해서 false => true 해서 이모션의 버튼색을 노란색으로 변경하기

    async function aaa () {
        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents}
        });
        console.log(result)
        console.log(result.data.createBoard.number)
    }
    // 함수들을 props로 연결해줘여함
    function onChangeMyWriter(event) {
        setMyWriter(event.target.value)
        // 이 if문은 onChangeMyWriter , onChangeMyTitle , onChangeMyContents 셋다 적용 시켜줘야함
        // 왜냐하면 작성자를 먼저 입력할지 ,제목을 먼저입력할지 모르기 때문
        if(event.target.value !== "" && myTitle !== "" && myContents !== "") {
            setQqq(true)
        }
        
    }
    function onChangeMyTitle(event) {
        setMyTitle(event.target.value)
        if(myWriter !== "" && event.target.value !== "" && myContents !== "") {
            setQqq(true)
        }
        
    }
    function onChangeMyContents(event) {
        setMyContents(event.target.value)
        if(myWriter !== "" && myTitle !== "" && event.target.value !== "") {
            setQqq(true)
        } 
        
        // 이거는 useEffect를 쓰지 않아도 되는 이유가
        // 조건에 맞을때만 실행되니까 그런건가???
        // 그리고 조건문안에서 쓰면 에러나는데 이유는 뭐지?
    }

    function changeZzz() {
        setZzz(true)
    }

    useEffect(() => {
        changeZzz()
    }, [])
    

    return <BoardWriteUI 
        // props로 전달해준거임
        onChangeMyWriter={onChangeMyWriter}
        onChangeMyTitle={onChangeMyTitle}
        onChangeMyContents={onChangeMyContents}
        aaa={aaa}
        zzz={zzz}
        qqq={qqq}
    />
    // 얘를 리턴 해줘야 연결이됨
}