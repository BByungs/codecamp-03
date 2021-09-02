import {useState} from "react"
export default function TwodayQuiz02 () {
    const [counter, setCounter] = useState(0)

    function onClickButton () {
        setCounter(counter+1)
    }
    return (
        <>
            <div>{counter}</div>
            <button onClick={onClickButton}>카운트증가</button>
        </>
    )
}