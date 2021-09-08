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

export default function BoardDetailPage() {

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.number)}
    }) 

    function onClickMoveToEdit() {
        router.push(`/08-04-board-detail/${router.query.number}/edit`)
        // 상세페이지로 이동
    }

    return (
        <>
            <div>게시물 상세 페이지 입니다!!</div>
            <div>게시글 번호:{router.query.number}</div>
            <div>게시글 작성자: {data?.fetchBoard.writer}</div>
            <div>게시글 제목:{data?.fetchBoard.title}</div>
            <div>게시글 내용:{data?.fetchBoard.contents}</div>
            
            {/* ******************************* */}
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
            {/* ******************************* */}
        </>
    )
}

// data && data.fetchBoard.contents === data?.fetchBoard.contents
// 조건부 렌더링이랑 옵셔널체이닝 기능은 똑같지만
// 옵셔널체이닝이 더 쓰기 편해서 이걸 더 많이 쓴다고함