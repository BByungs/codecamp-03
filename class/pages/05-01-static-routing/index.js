import {useRouter} from "next/router"

export default function StaticRoutingPage() {
    const router = useRouter()

    function onClickMove() {
        // 이기능이 실행 되었을때
        router.push('/05-02-static-routed')
        // 05-02-static-routed 페이지로 이동해라

        // 주소는 앞에 localhost:3000을 제외한 뒷부분부터 작성해주면됨
    }

    return(
        <>
            <button onClick={onClickMove}>정적 라우팅 페이지 이동!!!</button>
            {/* 버튼 클릭하면 StaticRoutedPage로 이동해야함 */}
        </>

    )
}

// 05-01-static-routing , 05-02-static-routed 세트임