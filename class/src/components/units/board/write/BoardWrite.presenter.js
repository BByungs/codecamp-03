import {MyButton , Title} from "../write/BoardWrite.styles"

// 등록 , 수정 페이지
export default function BoardWriteUI(props) {
    return (
        <>
            <h1>{props.isEdit ? "수정페이지" : "등록페이지"}</h1>
            {/* <Title zzz={props.zzz}>컨테이너 프리젠터 패턴!!!</Title> */}
            {/* props로 전달 받은 데이터를 쓰기위해 앞에 props.라고 써줌 */}
            작성자: <input type="text" placeholder="writer" onChange={props.onChangeMyWriter} /><br/><br/>
            제목: <input type="text" placeholder="title" onChange={props.onChangeMyTitle} /><br/><br/>
            내용: <input type="text" placeholder="contents" onChange={props.onChangeMyContents} /><br/><br/>
            {!props.isEdit && <MyButton onClick={props.aaa} qqq={props.qqq}>등록하기</MyButton>}
            {props.isEdit && <MyButton onClick={props.onClickEdit} qqq={props.qqq}>수정하기</MyButton>}
        </>
    )
}

// 이곳이 공통적으로 보여야 하는 곳