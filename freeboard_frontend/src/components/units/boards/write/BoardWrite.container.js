import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD } from "./BoardWrite.queries"
import { useRouter } from "next/router"
import { useMutation } from "@apollo/client"
import { useState } from "react"


export default function BoardWrite() {
    
    const [writer , setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [contents, setContents] = useState("")
    const [title , setTitle] = useState("")
    const [isActive , setIsActive] = useState(false)

    const [writerError , setWriterError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [contentError , setContentError] = useState("")
    const [titleError , setTitleError] = useState("")

    const [ createBoard ] = useMutation(CREATE_BOARD)

    const [id,setId] = useState("")
    const router = useRouter()

    function onChangeWriter (event) {
        setWriter(event.target.value)
    }

    function onChangePassword (event) {
        setPassword(event.target.value)
    }

    function onChangeContent(event) {
        setContents(event.target.value)
    }
    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    async function onClickButton(){
        if(writer === ""){
          setWriterError("작성자를 입력해주세요.")
          // isActive 조건문에 따라서 버튼 색 변하게 해야함
        }
        if(password === ""){
          setPasswordError("비밀번호를 입력해주세요.")
          // isActive 조건문에 따라서 버튼 색 변하게 해야함
        }
        if(title === ""){
            setTitleError("제목을 입력해주세요.")
            // isActive 조건문에 따라서 버튼 색 변하게 해야함
        }
        if(contents === ""){
            setContentError("내용을 입력해주세요.")
        }
        if(writer !== "" && password !== "" && title !== "" && contents !== ""){
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer,
                            title,
                            contents,
                            password
                        }
                    }
                })
                console.log(result)
                console.log(result.data.createBoard._id)
                setId(result.data.createBoard._id)
                router.push(`/boards/detailPage-nonMembers-basic-read/${result.data.createBoard._id}`)

            } catch(error) {
                console.log(error)
            }
        }
    }
    
    return <BoardWriteUI 
        // router={router}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContent={onChangeContent}
        onChangeTitle={onChangeTitle}
        onClickButton={onClickButton}
        writerError={writerError}
        titleError={titleError}
        contentError={contentError}
        passwordError={passwordError}
        // isActive 프롭스로 전달해야함
    />
}
