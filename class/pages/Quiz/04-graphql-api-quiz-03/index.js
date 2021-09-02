import {useMutation , gql} from "@apollo/client"
import {useState} from "react"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller:String , $createProductInput:CreateProductInput!){
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

export default function GraphqlApiQuiz03() {
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [seller , setSeller] = useState("")
    const [productName , setProductName] = useState("")
    const [detail , setDetail] = useState("")
    const [price, setPrice] = useState("")


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

    async function onClickGraphqlApi() {
        const result = await createProduct({
            variables:{
                seller: seller,
                createProductInput: {
                    name: productName,
                    detail: detail,
                    price: Number(price)
                }
            }
        })
        console.log(result.data.createProduct)
    }

    return(
        <>
            판매자: <input type="text" onChange={onChangeSeller} /><br/>
            상품이름: <input type="text" onChange={onChangeProductName} /><br/>
            상세정보: <input type="text" onChange={onChangeDetail} /><br/>
            상품가격: <input type="text" onChange={onChangePrice} /><br/>
            <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
        </>
    )
}