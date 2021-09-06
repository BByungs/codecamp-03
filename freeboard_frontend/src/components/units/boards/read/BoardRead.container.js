import BoardReadUI from "./BoardRead.presenter"
import { FETCH_BOARD } from "./BoardRead.queries"
import {useQuery} from "@apollo/client"
import {useRouter} from "next/router"

export default function BoardRead() {

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.detailPageNonMembersBasic}
    })

    return <BoardReadUI 
        router={router}
        data={data}
    />
}