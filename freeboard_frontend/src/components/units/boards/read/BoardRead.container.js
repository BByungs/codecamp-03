import BoardReadUI from "./BoardRead.presenter"
import { FETCH_BOARD } from "./BoardRead.queries"
import { useQuery , useMutation } from "@apollo/client"
import {useRouter} from "next/router"
import { DELETE_BOARD } from "./BoardRead.queries"


export default function BoardRead() {

    const router = useRouter()

    const [deleteBoard] = useMutation(DELETE_BOARD)

    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.detailPageNonMembersBasic}
    })

    async function onClickDelete () {
        try {
            await deleteBoard({
                variables: {
                    boardId: router.query.detailPageNonMembersBasic
                }
            })
        } catch(error) {
            console.log(error)
        }
        console.log(router.query.detailPageNonMembersBasic)
    }
    return <BoardReadUI 
        router={router}
        data={data}
        onClickDelete={onClickDelete}
    />
}

