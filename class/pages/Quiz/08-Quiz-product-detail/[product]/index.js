import { useRouter } from "next/router"
import { useQuery , gql } from "@apollo/client"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(productId:$productId) {
            _id
            seller
            name
            detail
            price
        }
    }
`

// 게시물 상세 페이지
// 상품 수정하기 버튼 있어야 하는 곳 
export default function ProductDetailPage() {
    const router = useRouter()

    const {data} = useQuery(FETCH_PRODUCT, {
        variables: {productId: router.query.product}
    })

    function onClickMoveToEdit() {
        router.push(`/Quiz/08-Quiz-product-detail/${router.query.product}/edit`)
    }

    
    return (
        <>
            <div>상품 상세 화면</div>
            <div>판매자: {data?.fetchProduct.seller}</div>
            <div>상품 이름: {data?.fetchProduct.name}</div>
            <div>상품 설명: {data?.fetchProduct.detail}</div>
            <div>상품 가격: {data?.fetchProduct.price}</div>
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
        </>
    )
}