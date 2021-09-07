import {gql , useQuery , useMutation} from "@apollo/client"
import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";


const FETCH_PRODUCTS = gql`
    query fetchProducts($page: Int){
        fetchProducts(page: $page) {
            _id
            seller
            name
            detail
            price
        }
    }
`

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID) {
        deleteProduct(productId: $productId) {
            _id
            number
            message
        }
    }
`


const Row = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
`

const Column = styled.div`
    width: 20%;
`


export default function MapFilterQuizProductReadPage() { 
    const {data} = useQuery(FETCH_PRODUCTS)
    const [deleteProduct] = useMutation(DELETE_PRODUCT)
    const router = useRouter();

    async function onClickDelete(event) {
        await deleteProduct({
            variables: {
                productId: event.target.id
            }, refetchQueries: [{query: FETCH_PRODUCTS}]
        })
    }

    return (
        <div>
            {data?.fetchProducts.map((el)=>(
                <Row key={el._id}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.seller}</Column>
                    <Column>{el.name}</Column>
                    <Column>{el.detail}</Column>
                    <Column>{el.price}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column>
                        <button id={el._id} onClick={onClickDelete}>삭제하기</button>
                    </Column>
                </Row>
            ))}
        </div>
    )
}