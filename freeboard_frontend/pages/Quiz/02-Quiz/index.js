import {} from "../../../styles/02-Quiz-01"
import {useState} from "react"

export default function TwodayQuiz () {
    const [state, setState] = useState("안녕하세요")
    function onClickBtn () {
        setState("반갑습니다")
    }
    
    return (
        <>
           <button onClick={onClickBtn}>{state}</button>
        </>
    )
}