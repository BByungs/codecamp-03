function solution(n) {
    let divisorArr = [];
    for(let i=1; i<=n; i++) {
        if(n%i===0) {
            divisorArr.push(i)
        }
    }
    return divisorArr.reduce((acc,cur)=>acc+cur,0)
}

function solution(n) {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        if(n%i===0) {
            sum += i
        }
    }
    return sum
}

function solution(n) {
    let answer = 0;
    // const array = new Array(n); // n의 길이를 가진 배열이 새로 만들어짐
    // const array = new Array(n).fill(1) // 배열안에 1이라는 데이터로 다 담아라

    const array = new Array(n)
    .fill(1)
    .forEach((num,index)=>{
        n% (num+index) === 0 
        ? answer += (num+index)
        : null
    })

    return answer
}

console.log(solution(5))