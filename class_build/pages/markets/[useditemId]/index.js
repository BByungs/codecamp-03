import Head from "next/head"
import {gql, request} from "graphql-request"

const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId:ID!) {
        fetchUseditem(useditemId:$useditemId) {
            name
            remarks
            images
        }
    }
`

// * 3. props로 데이터를 받는다.
export default function MarketPage(props) {

    // ! props.fetchUseditem => name , remarks , images가 들어있음
    // * props.fetchUseditem.name
    // * props.fetchUseditem.remarks
    // * props.fetchUseditem.images[0]

    return (
        <>
            <Head>
                {/* 4. 바인딩 시켜주기 */}
                <meta property="og:title" content={props.fetchUseditem.name}/>
                <meta property="og:description" content={props.fetchUseditem.remarks}/>
                <meta property="og:image" content={`https://storage.googleapis.com/${props.fetchUseditem.images[0]}`}/>
            </Head>
            <div>마켓페이지입니다!</div>
        </>
    )
}


export const getServerSideProps = async (context) => {
    // ! getServerSideProps는 정해져 있는 이름임
    // ! 바꿀 수 없음
    
    // * 1. grahphql 데이터를 요청.
    const result = await request("https://backend03.codebootcamp.co.kr/graphql" , FETCH_USED_ITEM, {
        useditemId: context.query.useditemId
        // context.query.useditemId는 router.query.useditemId와 같음
    })
    // * 1. grahphql 데이터를 요청.


    // graphql은 엔드포인트가 하나인 rest-api 

    
    // * 2. 요청 받은 데이터를 페이지로 넘겨준다.
    return {
        props: {
            fetchUseditem: result.fetchUseditem
        }
    }
    // * 2. 요청 받은 데이터를 페이지로 넘겨준다.
    
  }