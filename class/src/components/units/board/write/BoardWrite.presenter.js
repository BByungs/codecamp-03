import {MyButton , Title} from "../write/BoardWrite.styles"

export default function BoardWriteUI(props) {
    // props로 전달 받기 위해 매개변수에 props라고 써줬고
    // 화면에 보여주는 얘니까 UI라고 지었음
    return (
        <>
            <h1>{props.isEdit ? "수정페이지" : "등록페이지"}</h1>
            <Title zzz={props.zzz}>컨테이너 프리젠터 패턴!!!</Title>
            {/* props로 전달 받은 데이터를 쓰기위해 앞에 props.라고 써줌 */}
            작성자: <input type="text" placeholder="writer" onChange={props.onChangeMyWriter} /><br/>
            제목: <input type="text" placeholder="title" onChange={props.onChangeMyTitle} /><br/>
            내용: <input type="text" placeholder="contents" onChange={props.onChangeMyContents} /><br/>
            {!props.isEdit && <MyButton onClick={props.aaa} qqq={props.qqq}>등록하기</MyButton>}
            {props.isEdit && <MyButton onClick={props.onClickEdit} qqq={props.qqq}>수정하기</MyButton>}
        </>
    )
}
