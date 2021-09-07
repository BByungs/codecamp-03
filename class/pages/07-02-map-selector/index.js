import { useMutation, useQuery, gql } from "@apollo/client"
import styled from "@emotion/styled"

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            createdAt
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number:Int){
        deleteBoard(number:$number){
            message
    }
}
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
`

const Column = styled.div`
    width: 20%;
`

const Table = styled.div`

`

export default function MapSelectorPage() {
    const {data} = useQuery(FETCH_BOARDS)
    // data.fetchBoards => [{} , {}, {}] 이런형태로 값이 들어옴
    const [deleteBoard] = useMutation(DELETE_BOARD)

    async function onClickDelete(event) {
        await deleteBoard({
            variables : {
                number: Number(event.target.id)
            }, refetchQueries: [{ query: FETCH_BOARDS }]
            // refetchQueries를 쓸땐 variables를 똑같이 써줘야한다 
            // 버튼을 누르면 리패치가 자동으로 된다.
        })
    }

    return (
        <div>
            {data?.fetchBoards.map((el , index)=>( // 뿌린순서대로 Index(숫자가)생김
                <Row key={el.number}> 
                {/* key에선 index를 사용하지 않는다 */}
                    <Column><input type="checkbox" /></Column>
                    <Column>{index}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>                    
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제하기</button>
                    </Column>
                </Row>
            ))}
        </div>
    )
}
