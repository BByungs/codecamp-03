import axios from "axios"

// 비동기
// export default function RestGetPage() {
//     function zzz() {
//         const result = axios.get("https://koreanjson.com/posts/1")
//         // 자동으로 http라는 길이 만들어지고
//         // 백엔드 컴퓨터로 요청하게 되고
//         // 1번게시물을 받아가지고 다시 돌아옴
//         // http라는길에는 요청과 응답이라는 두가지 길이 있다.
//         // 보냈으면 바로 오는게 아니라 시간이 좀 걸림 (여기선 거의 바로 실행됨)
//         console.log(result)
//         // 정보를 못받아옴
//     }
//     return (
//         <button onClick={zzz}>REST-API 요청하기!</button>
//     )
// }

// 동기
export default function RestGetPage() {
    async function zzz() {
        const result = await axios.get("https://koreanjson.com/posts/1")
        // 기다렸다가 결과를 받아오기때문에 
        console.log(result.data)
        // 정보를 받아왔음
    }
    return (
        <button onClick={zzz}>REST-API 요청하기!</button>
    )
}

