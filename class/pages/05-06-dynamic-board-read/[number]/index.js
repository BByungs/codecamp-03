import { useRouter } from "next/router"
import { useQuery , gql } from "@apollo/client"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number) {
            writer
            title
            contents
        }
    }
`
// // mutation은 요청하고싶을때 요청했지만
// // query는 페이지가 열리면 자동으로 요청이 날라감
// export default function DynamicBoardRead() {

//     const router = useRouter()

//     const { data } = useQuery(FETCH_BOARD, {
//         variables: {number: router.query.number}
//     }) // 바로 실행되어야 하기 때문에 쉼표적어주고 바로 실행 (페이지가 열릴때 바로 실행)
//     // 패치보드로 요청을 하면 페이지가 열릴때 바로 data로 응답을 해줌
    
//     // 위에꺼를 async/await으로 하면, 데이터를 백엔드 서버에서 받아올때까지 기다렸다가
//     // 밑에 그림을 한줄씩 그리기 때문에, 좀 그림이 늦게 나옴
//     // 그림이 빨리 나오게 하기 위해서 비동기적으로 코드를 작성한다.
    
//     // data가 들어왔다고 가정하고 리턴문에서 router.query정보들을 적어준다
//     // 그리고나서 실행하게 되면 에러가난다. 

//     return (
//         <>
//             <div>게시물 상세 페이지 입니다!!!</div>
//             <div>게시글 번호: {router.query.number}</div>
//             <div>게시글 작성자: {data.fetchboard.writer}</div>
//             <div>게시글 제목: {data.fetchboard.title}</div>
//             <div>게시글 내용: {data.fetchboard.contents}</div>
//         </>
//     )
// }

// =================================================================

// // 그래서 조건부 렌더링을 걸어주는데
// // data && data.fetchboard.title data가 있으면 옆에코드 실행 , 없으면 실행x
// // mutation은 요청하고싶을때 요청했지만
// // query는 페이지가 열리면 자동으로 요청이 날라감
// export default function DynamicBoardRead() {

//     const router = useRouter()

//     const { data } = useQuery(FETCH_BOARD, {
//         variables: {number: Number(router.query.number)}
//     }) // 바로 실행되어야 하기 때문에 쉼표적어주고 바로 실행 (페이지가 열릴때 바로 실행)
//     // 패치보드로 요청을 하면 페이지가 열릴때 바로 data로 응답을 해줌
    
//     // 위에꺼를 async/await으로 하면, 데이터를 백엔드 서버에서 받아올때까지 기다렸다가
//     // 밑에 그림을 한줄씩 그리기 때문에, 좀 그림이 늦게 나옴
//     // 그림이 빨리 나오게 하기 위해서 비동기적으로 코드를 작성한다.
    
//     // data가 들어왔다고 가정하고 리턴문에서 router.query정보들을 적어준다
//     // 그리고나서 실행하게 되면 에러가난다. 

//     return (
//         <>
//             <div>게시물 상세 페이지 입니다!!!</div>
//             <div>게시글 번호: {router.query.number}</div>
//             <div>게시글 작성자: {data && data.fetchBoard.writer}</div>
//             <div>게시글 제목: {data && data.fetchBoard.title}</div>
//             <div>게시글 내용: {data && data.fetchBoard.contents}</div>
//         </>
//     )
// }

// =================================================================


// // 삼항연산자
// // 근데 실무에선 삼항연산자대신 조건부 렌더링을 더 많이씀
// export default function DynamicBoardRead() {

//     const router = useRouter()

//     const { data } = useQuery(FETCH_BOARD, {
//         variables: {number: Number(router.query.number)}
//     }) // 바로 실행되어야 하기 때문에 쉼표적어주고 바로 실행 (페이지가 열릴때 바로 실행)
//     // 패치보드로 요청을 하면 페이지가 열릴때 바로 data로 응답을 해줌
    
//     // 위에꺼를 async/await으로 하면, 데이터를 백엔드 서버에서 받아올때까지 기다렸다가
//     // 밑에 그림을 한줄씩 그리기 때문에, 좀 그림이 늦게 나옴
//     // 그림이 빨리 나오게 하기 위해서 비동기적으로 코드를 작성한다.
    
//     // data가 들어왔다고 가정하고 리턴문에서 router.query정보들을 적어준다
//     // 그리고나서 실행하게 되면 에러가난다. 

//     return (
//         <>
//             <div>게시물 상세 페이지 입니다!!!</div>
//             <div>게시글 번호: {router.query.number}</div>
//             <div>게시글 작성자: {data ? data.fetchBoard.writer : "loading..."}</div>
//             <div>게시글 제목: {data ? data.fetchBoard.title : "loading..."}</div>
//             <div>게시글 내용: {data ? data.fetchBoard.contents : "loading..."}</div>
//         </>
//     )
// }

// =================================================================

// 옵셔널 체이닝
// 이걸 실무에서 많이 쓴다고한다
export default function DynamicBoardRead() {

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.number)}
    }) 

    return (
        <>
            <div>게시물 상세 페이지 입니다!!</div>
            <div>게시글 번호:{router.query.number}</div>
            <div>게시글 작성자: {data?.fetchBoard.writer}</div>
            <div>게시글 제목:{data?.fetchBoard.title}</div>
            <div>게시글 내용:{data?.fetchBoard.contents}</div>
        </>
    )
}

// data && data.fetchBoard.contents === data?.fetchBoard.contents
// 조건부 렌더링이랑 옵셔널체이닝 기능은 똑같지만
// 옵셔널체이닝이 더 쓰기 편해서 이걸 더 많이 쓴다고함