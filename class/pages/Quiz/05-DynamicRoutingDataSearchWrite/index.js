import {useMutation , gql} from "@apollo/client"
import {useState} from "react"
import {useRouter} from "next/router"
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

export default function DynamicRoutingDataSearchWrite() {
    const [ createProduct ] = useMutation(CREATE_PRODUCT)
    const [seller, setSeller] = useState("")
    const [productName , setProductName] = useState("")
    const [detail , setDetail] = useState("")
    const [price , setPrice] = useState("")

    const router = useRouter()

    async function onClickSubmit() {
        try {
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
            router.push(`/Quiz/05-DynamicRoutingDataSearchRead/${result.data.createProduct._id}`)
        } catch(error) {
            console.log(error)
        }
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
