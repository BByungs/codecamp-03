// function solution(s) {
//     let newArr =  s.split(" ")
//     let emptyArr = []
//     for(let i=0; i<newArr.length; i++) {
//         let str = ""
//         for(let j=0; j<newArr[i].length; j++) {
//             if(j===0) {
//                 str += newArr[i][j].toUpperCase()
//             } else if(j%2===0) {
//                 str += newArr[i][j].toUpperCase()
//             } else {
//                 str += newArr[i][j].toLowerCase()
//             }
//         }
//         emptyArr.push(str)
//         str = ""
//     }
//     return emptyArr.join(' ')
// }

console.log(solution("hello world hAHa abcd"))

// function solution(s) {
//     let answer = ""

//     let idx = 0;

//     for(let i=0; i<s.length; i++) {
//         if(s[i]===" ") {
//             idx = 0;
//             answer += " "
//         } else {
//             answer = answer + (idx %2 === 0 ? s[i].toLowerCase() : s[i].toUpperCase())
//             idx += 1;
//         }
//     }
//     return answer
// }


// map안에서 또 map 돌린거
function solution(s) {
    const answer = s.split(" ")
    .map(str=>{
        // console.log(str)
        return str.split("").map((el,idx)=>{
            if(idx%2===0) {
                return el.toUpperCase()
            } 
            return el.toLowerCase()
        }).join("")
        
    }).join(" ")
    return answer
}