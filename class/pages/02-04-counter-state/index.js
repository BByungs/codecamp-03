import {useState} from "react"

export default function CounterStatePage() {
    const [number , setNumber] = useState(0);
    function aaa () {
        setNumber(number+1)
    }

    return (
        <>
            <div>{number}</div>
            <div>{number}</div>
            <div>{number}</div>
            <button onClick={aaa}>😄카운트증가😄</button>
        </>
    )
}