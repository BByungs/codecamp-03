// 앞으로 쿼리들으 여기다가 저장
import { gql } from "@apollo/client"
// 얘도 내보내기 위해 export를 써줌
export const CREATE_BOARD = gql`
mutation createBoard($writer:String, $title:String, $contents:String) {
    createBoard(
        writer: $writer,
        title: $title,
        contents: $contents
    ) {
        message
        number
    }
}
`

export const UPDATE_BOARD = gql`
    mutation updateBoard($number:Int , $writer:String , $title:String , $contents:String) {
        updateBoard(number:$number, writer:$writer , title:$title, contents:$contents) {
            message
            number
        }
    }
`