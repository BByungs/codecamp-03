import { useRouter } from "next/router"
import { useQuery , gql } from "@apollo/client"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId:ID) {
        fetchProduct(productId:$productId) {
            seller
            name
            detail
            price
        }
    }
`

export default function DynamicRoutingDataSearchRead() {
    const router = useRouter()

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {productId:router.query.readId}
    })
    return(
        <>
            <div>판매자 이름: {data?.fetchProduct.seller}</div>
            <div>상품이름: {data?.fetchProduct.name}</div>
            <div>상세내용: {data?.fetchProduct.detail}</div>
            <div>상품가격: {data?.fetchProduct.price}</div>
        </>
        
    )
}