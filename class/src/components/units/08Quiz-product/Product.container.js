import ProductWriteUI from "./Product.presenter";
import {CREATE_PRODUCT , UPDATE_PRODUCT} from "./Product.queries"
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

// 상품 등록하기 버튼 , 상품 수정하기 버튼 있어야 하는 곳
export default function ProductWrite(props) {
    const [ createProduct ] = useMutation(CREATE_PRODUCT)
    const [ updateProduct ] = useMutation(UPDATE_PRODUCT)
    const [ seller, setSeller ] = useState("")
    const [ name, setName ] = useState("")
    const [ detail, setDetail ] = useState("")
    const [ price, setPrice ] = useState("")
    const router = useRouter()

    // 판매자를 입력할때마다 seller가 변함
    function onChangeSeller(event) {
        setSeller(event.target.value)
    }
    // 상품 이름을 입력할때마다 name이 변함
    function onChangeName(event) {
        setName(event.target.value)
    }
    // 상품 상세 정보를 입력할때마다 detail이 변함
    function onChangeDetail(event) {
        setDetail(event.target.value)
    }
    // 상품 가격을 입력할때마다 price가 변함
    function onChangePrice(event) {
        setPrice(event.target.value)
    }

    // 상품 등록버튼 누르면 작동하는 함수
    // 이 함수를 작동 시키기 위해 createProduct api를 써야함
    async function onClickProductSubmit () {
        try {
            const result = await createProduct({
                variables: {
                    seller,
                    createProductInput:{
                        name,
                        detail,
                        price: Number(price)
                    }
                }
            })
            console.log(result.data.createProduct._id)
            router.push(`/Quiz/08-Quiz-product-detail/${result.data.createProduct._id}`) // 상세페이지
        } catch(error) {
            console.log(error)
        }
    }
    // 백엔드에 전달 하고 백엔드에서 받아서 db에 저장
    // 저장되는 값들이 고유한 키값이다.
    // 이 키값이 아이디 또는 번호로 쓰이는데 
    // 이 키값을 db에서 받아온게 result에 저장이된다.

    // 쿼리에서 id,message이런 값들을 result에 저장한다.
    // 이 값은 고유한값이 
    // 상품 수정버튼 누르면 작동하는 함수
    // 이 함수를 작동 시키기 위해 updateProduct api를 써야함
    async function onClickProductEdit () {
        try {
            await updateProduct({
                variables: {
                    productId: router.query.product,
                    updateProductInput: {
                        name: name,
                        detail: detail,
                        price: Number(price)
                    }
                }
            })
            // createProduct로 인해 동적라우팅 폴더안에 이미 정보가 담겨있는데
            // 이정보를 router를 통해서 읽어오는건데, 그래서 query를 쓴거고
            // query뒤에는 동적라우팅 폴더 명이 들어가는거임
            router.push(`/Quiz/08-Quiz-product-detail/${router.query.product}`)
        } catch(error) {
            console.log(error)
        }
    }

    return <ProductWriteUI 
        onClickProductSubmit={onClickProductSubmit}
        onClickProductEdit={onClickProductEdit}
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        isEdit={props.isEdit}
    />
}