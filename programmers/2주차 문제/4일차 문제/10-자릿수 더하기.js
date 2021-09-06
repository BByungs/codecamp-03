function solution(n)
{
    let arr = String(n).split('')
    return arr.reduce((acc,cur)=>acc+Number(cur),0)
}