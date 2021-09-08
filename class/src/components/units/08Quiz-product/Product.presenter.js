export default function ProductWriteUI(props) {

    return (
        <>
            <h1>{props.isEdit ? "상품 수정 페이지" : "상품 등록 페이지"}</h1>
            판매자: <input type="text" placeholder="Seller" onChange={props.onChangeSeller} /><br/><br/>
            상품 이름: <input type="text" placeholder="Product name" onChange={props.onChangeName} /><br/><br/>
            상세 내용: <input type="text" placeholder="Product detail" onChange={props.onChangeDetail} /><br/><br/>
            상품 가격: <input type="text" placeholder="Product price" onChange={props.onChangePrice} /><br/><br/>
            {!props.isEdit && <button onClick={props.onClickProductSubmit}>상품 등록하기</button>}
            {props.isEdit && <button onClick={props.onClickProductEdit}>상품 수정하기</button>}
        </>

    )
}