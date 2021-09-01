import { useState } from "react"

export default function HelloStatePage() {
    const [ state, setState ] = useState("안녕하세요")
    
    function zzz () {
        setState("반갑습니다")
    }
    return (
        <button onClick={zzz}>{state}</button>
    )
}