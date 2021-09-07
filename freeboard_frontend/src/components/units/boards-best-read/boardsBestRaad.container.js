import { FETCH_BOARDS } from "./boardsBestRead.queries"
import BoardBestUI from "./boardsBestRead.presenter"
import {useQuery} from "@apollo/client"

export default function BoardBestReadPage() {
    const {data} = useQuery(FETCH_BOARDS)
    
    return <BoardBestUI 
        data={data}
        
    />
}