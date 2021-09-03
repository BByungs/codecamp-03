import { useRouter } from "next/router"

export default function DynamicRoutedPage() {
    const router = useRouter()
    // router.query안에 정보가 들어가 있음.

    return (
        <>
            {/* 변수로 뽑아서 몇번인지 알아내서 넣어주면 될거같음 */}
            <div>{router.query.aaa}번 페이지 입니다</div>
            <div>동적 페이지 이동 완료!!</div>
        </>
    )
}

