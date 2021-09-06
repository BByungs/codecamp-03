export default function BoardWriteUI06Quiz(props) {
    
    return (
        <>
            작성자: <input type="text" placeholder="writer" onChange={props.onChangeMyWriter} /><br/>
            제목: <input type="text" placeholder="title" onChange={props.onChangeMyTitle} /><br/>
            내용: <input type="text" placeholder="contents" onChange={props.onChangeMyContents} /><br/>
            <button onClick={props.aaa}>GRAPHQL-API 요청하기!!!</button>
        </>

    )
}