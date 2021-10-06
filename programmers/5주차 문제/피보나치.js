// function solution(n) {
    
    
//     let arr = [0,1]
    
//     for(let i=2; i<=n; i++) {
//         arr.push((arr[i-1]+arr[i-2])%1234567)
//     }
//     console.log(arr)
//     return arr[n]
// }


function solution(n) {
    let prev = 0 // F(n-2)
    let next = 1 // F(n-1)
    let sum = 1 // F(n-2) + F(n-2)
    
    for(let i=2; i<=n; i++) {
        sum = (prev + next)%1234567
        prev = next
        next = sum
    }
    console.log(sum)
    return sum
    
    
}