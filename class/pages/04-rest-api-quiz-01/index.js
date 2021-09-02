import axios from "axios"
export default function RestApiQuiz01() {
    

    async function onClickRestApi() {
        const result = await axios.get("https://koreanjson.com/posts/2")
        console.log(result)
    }

    return (
        <>
            <button onClick={onClickRestApi}>REST-API 요청하기</button>
        </>
    )
}