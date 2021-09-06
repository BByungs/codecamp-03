import { useRouter } from "next/router"
import { FETCH_BOARD } from "./BoardRead06Quiz.queries"
import BoardReadUI06Quiz from "./BoardRead.presenter.06Quiz"
import { useQuery } from "@apollo/client"



export default function BoardRead06Quiz() {

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.number)}
    }) 

    return <BoardReadUI06Quiz 
        data={data}
        router={router}
    />    
}