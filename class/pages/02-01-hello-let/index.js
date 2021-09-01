export default function HelloLetPage() {

    function zzz () {
        document.getElementById("btn").innerText = "반갑습니다."
    }
    // return 을 기준으로
    // 위론 javascript
    // 밑으론 html
    return (
        <button id="btn" onClick={zzz}>안녕하세요</button>
        // 괄호 열고 닫고 생략
    )
}
