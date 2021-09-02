// import {Fragment} from "react"
// 옛날엔 <> 말고 <Fragment>를 썼다

// export default function GraphqlMutationProductPage() {
    
    
//     return (
//         <Fragment>
//             판매자: <input type="text" />
//             상픔명: <input type="text" />
//             상품상세: <input type="text" />
//             상품가격: <input type="text" />
//             <button>상품 등록하기!!</button>
//         </Fragment>
//     )
// }

// ==============================================================

// import {useMutation , gql} from "@apollo/client"
// const CREATE_PRODUCT = gql`
//     mutation {
//         createProduct(
//         seller:"안병진",
//         createProductInput:{
//             name:"아이폰12promax",
//             detail: "S급중고",
//             price: 1000000
//         }) {
//             _id
//             message
//             number
//         }
//     }
// `

// export default function GraphqlMutationProductPage() {
//     const [ createProduct ] = useMutation(CREATE_PRODUCT)

//     async function onClickSubmit() {
//         const result = await createProduct()
//         console.log(result.data.createProduct._id)
//     }
    
//     return (
//         <>
//             판매자: <input type="text" />
//             상픔명: <input type="text" />
//             상품상세: <input type="text" />
//             상품가격: <input type="text" />
//             <button onClick={onClickSubmit}>상품 등록하기!!</button>
//         </>
//     )
// }

// ==============================================================

import {useMutation , gql} from "@apollo/client"
import {useState} from "react"
const CREATE_PRODUCT = gql`
    mutation createProduct($seller:String, $createProductInput:CreateProductInput!){
        createProduct(
        seller:$seller,
        createProductInput:$createProductInput
        ) {
            _id
            message
            number
        }
    }
`

export default function GraphqlMutationProductPage() {
    const [ createProduct ] = useMutation(CREATE_PRODUCT)
    const [seller, setSeller] = useState("")
    const [productName , setProductName] = useState("")
    const [detail , setDetail] = useState("")
    const [price , setPrice] = useState("")

    async function onClickSubmit() {
        const result = await createProduct({
            variables: {
                seller: seller,
                createProductInput:{
                    name: productName,
                    detail: detail,
                    price:  Number(price) // Number타입으로 바꿔줘야함
                }
            }
        })
        console.log(result.data.createProduct._id)
    }

    function onChangeSeller(event) {
        setSeller(event.target.value)
    }
    function onChangeProductName(event) {
        setProductName(event.target.value)
    }
    function onChangeDetail(event) {
        setDetail(event.target.value)
    }
    function onChangePrice(event) {
        setPrice(event.target.value)
    }
    
    
    return (
        <>
            판매자: <input type="text" onChange={onChangeSeller}/><br/>
            상품명: <input type="text" onChange={onChangeProductName}/><br/>
            상품상세: <input type="text" onChange={onChangeDetail}/><br/>
            상품가격: <input type="text" onChange={onChangePrice}/><br/>
            <button onClick={onClickSubmit}>상품 등록하기!!</button>
        </>
    )
}