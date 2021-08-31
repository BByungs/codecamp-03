import {useState} from "react"
export default function TwodayQuiz02 () {
    const [validation , setValidation] = useState("123456")

    function onClickButton () {
        setValidation(String(Math.floor(Math.random()*1000000)).padStart(6,"1"))
    }
    return (
        <>
            <div>{validation}</div>
            <button onClick={onClickButton}>인증번호 전송</button>
        </>
    )
}