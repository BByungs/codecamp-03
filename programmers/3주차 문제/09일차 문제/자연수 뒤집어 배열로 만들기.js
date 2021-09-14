// function solution(n) {
//     let result = []
//     for(let i=0; i<String(n).length; i++) {
//         result.push(String(n)[i])
//     }
//     return result.reverse().map(el=>Number(el))
// }

// function solution(s) { 
//     let result = []
//     s = String(s)
//     for(let i=s.length-1; i>=0; i--) {
//         result.push(Number(s[i]))
//     }
//     return result
// }
console.log(solution(12345))


function solution(s) {
    return s.toString()
    .split("")
    .reverse()
    .map(el=>Number(el))
}