// n이 어떤 정수의 제곱이면

// n의 제곱근을 먼저 찾은후

// 제곱급에 1을 더해서 제곱해준걸 리턴

// ==========================

// n이 어떤 정수의 제곱이 아니면

// -1 리턴

// function solution(n) {
//     let result = -1
//     for(let i=1; i*i <= n ; i++) {
//         // console.log(i , i*i)
//         if(i*i === n) {
//             console.log(i)
//             result = (i+1)**2
//         }
//     }
//     return result
// }


// function solution(n) {
    
//     let num = 1;
//     while(num * num < n) {
//         // 제곱된 값이 n보다 작을 경우에만 반복
//         num++
//         if(num*num === n) {
//             return (num+1)**2
//         }
//     }
//     return -1
// }

// function solution(n) {
    
//     let num = 1;
//     while(num * num < n) {
//         // 제곱된 값이 n보다 작을 경우에만 반복
//         num++
//     }
//     return num*num===n ? (num+1)**2 : -1
// }


// SQuare RooT => sqrt

// function solution(n) {
//     return Math.sqrt(n)%1===0 
//         ? (Math.sqrt(n)+1)**2 
//         : -1
// }

// n이 어떤 정수의 제곱이면

// n의 제곱근을 먼저 찾은후

// 제곱급에 1을 더해서 제곱해준걸 리턴

// ==========================

// n이 어떤 정수의 제곱이 아니면

// -1 리턴

// function solution(n) {
//     let result = -1
//     for(let i=1; i*i <= n ; i++) {
//         // console.log(i , i*i)
//         if(i*i === n) {
//             console.log(i)
//             result = (i+1)**2
//         }
//     }
//     return result
// }


// function solution(n) {
    
//     let num = 1;
//     while(num * num < n) {
//         // 제곱된 값이 n보다 작을 경우에만 반복
//         num++
//         if(num*num === n) {
//             return (num+1)**2
//         }
//     }
//     return -1
// }

// function solution(n) {
    
//     let num = 1;
//     while(num * num < n) {
//         // 제곱된 값이 n보다 작을 경우에만 반복
//         num++
//     }
//     return num*num===n ? (num+1)**2 : -1
// }

function solution(n) {
    let sqrt = Math.sqrt(n);
    // 정수인지 아닌지 판별해주는거 => isInteger
    if(Number.isInteger(sqrt)) {
        sqrt += 1
        return sqrt * sqrt
    } else {
        return -1
    }

}

console.log(solution(144))
console.log(solution(13))