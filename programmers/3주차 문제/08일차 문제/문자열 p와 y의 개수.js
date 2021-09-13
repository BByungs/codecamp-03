// function solution(s) {

//     let str = s.toLowerCase()
//     let arr =  str.split("")
//     // 문자열 "p" count 세주는 함수
//     let pCount = (arr) => {
//         return arr.filter(el=>el==="p").length
//     }

//     // 문자열 "y" count 세주는 함수
//     let yCount = (arr) => {
//         return arr.filter(el=>el==="y").length
//     }

//     return pCount(arr)===0 && yCount(arr) === 0 
//     ? true : pCount(arr) === yCount(arr) 
//     ? true : false 
// }

console.log(solution("pPoooyY"))
console.log(solution("Pyy"))




// function solution(s) {

//     const check = {
//         p:0,
//         y:0
//     }
//     // p, y 의 개수를 저장 하는 객체

//     s = s.toLowerCase()

//     for(let i=0; i<s.length; i++) {
//         if(s[i]==="p" || s[i]==="y") {
//             check[s[i]]++
//         }
//     }

//     return check.p === check.y ? true : false
// }


function solution(s) {

    const check = {}
    const result = s.toLowerCase()
    .split("")
    .forEach(str=>{
        check[str] === undefined 
        ? check[str] = 1
        : check[str]++
    })
    
    return check.p===check.y
}
