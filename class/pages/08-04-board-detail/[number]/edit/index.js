import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container"
import {gql , useQuery} from "@apollo/client"
import {useRouter} from "next/router"
const FETCH_BOARD = gql`
    query fetchBoard($number:Int) {
        fetchBoard(number:$number) {
            writer
            title
            contents
        }
    }
`

// 수정하기 페이지
// /08-04-board-detail/[number]/edit/index.js
export default function BoardEditPage() {
    const router = useRouter()

    // 얘는 비동기 적으로 데이터를 처리 하기 때문에
    // 옵셔널 체이닝을 썼었음
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.number)
        }
    })


    return <BoardWrite 
    isEdit={true} 
    data={data}
    />
}

