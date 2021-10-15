// function solution(s, n) {
//     const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//     const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     const result = []
    
//     s.split("").forEach((el)=>{
//         if(el===" ") {
//             result.push(" ")
//         }
        
//         if(upper.includes(el)) {
//             if(upper.indexOf(el)+n > 25) {
//                 result.push(upper[upper.indexOf(el)+n-26])
//             } 
//             else {
//                 result.push(upper[upper.indexOf(el)+n])   
//             }
//         } else if(lower.includes(el)) {
//             if(lower.indexOf(el)+n >25) {
//                 result.push(lower[lower.indexOf(el)+n-26])
//             }else {
//              result.push(lower[lower.indexOf(el)+n])   
//             }
//         }
//     })
//     return result.join("")
// }

// function solution(s ,n) {
//     const lower = `abcdefghijklmnopqrstuvwxyz`;
//     const upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
//     let answer = ''
//     for(let i=0; i<s.length; i++) {
//         if(s[i] === " ") {
//             answer += " "
//         } else {
//             // 소문자와 대문자를 구분해서 알파벳 문자열을 text 상수에 저장
//             const text = lower.includes(s[i]) === true ? lower : upper
//             let index = text.indexOf(s[i]) + n
//             // console.log(s[i] , text , index)

//             if(text[index] === undefined) {
//                 index = index - 26 
//             }
//             answer += text[index]
//         }
//     }
//     return answer
// }

// function solution(s, n) {
//     const lower = `abcdefghijklmnopqrstuvwxyz`;
//     const upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

//     const answer = s.split("").map((str)=>{
//         if(str === " ") {
//             return " "
//         }
//         else {
//             const text = lower.includes(str) === true ? lower : upper
//             let index = text.indexOf(str) + n

//             if(text[index] === undefined) {
//                 index = index - 26
//             }
//             return text[index]
//         }
//     })

//     return answer.join("")
// }

// 알파벳.charcodeAt
// String.fromCharCode(charcode넣으면됨)
function solution(s, n) {
    let result = ""

    for (let i=0; i<s.length; i++) {
        // console.log(s[i] , s.charCodeAt(i))
        if( s[i] === ' ') {
            result += ' '
        } else {
            let charcode = s.charCodeAt(i) + n
            // console.log(charcode)
            if(charcode>122 || (charcode>90 && (charcode - n) < 97)) { //소문자 z는 122 , 대문자 z 90
                // 소문자 z(122) 이상을 넘어가거나
                // 대문자 Z(90) 이상을 넘어가면서
                // 기존의 charcode의 값이 소문자일 경우
                charcode = charcode - 26
            }
            // console.log(String.fromCharCode(charcode))
            result += String.fromCharCode(charcode)
        }
    }
    return result
}

console.log(solution("a B   F z", 17))