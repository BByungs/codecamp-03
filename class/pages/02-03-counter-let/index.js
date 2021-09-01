export default function CounterLetPage() {


    function aaa() {
        let count = Number(document.getElementById("num").innerText) + 1
        document.getElementById("num") = count
    }

    return (
        <>
            <div id="num">0</div>
            <button onClick={aaa}>카운트증가</button>
        </>
    )
}