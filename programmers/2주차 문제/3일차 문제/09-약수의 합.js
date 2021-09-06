function solution(n) {
    let divisorArr = [];
    for(let i=1; i<=n; i++) {
        if(n%i===0) {
            divisorArr.push(i)
        }
    }
    return divisorArr.reduce((acc,cur)=>acc+cur,0)
}