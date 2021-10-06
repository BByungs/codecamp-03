function solution(n, m) {
    
    let divAll = []
    let reminder = []
    let div = 2;

    function recur (n , m) {

        if((n%div!==0 && m%div===0 ) || (n%div===0 && m%div!==0)) {
            div = div + 1
            return recur(n , m)
        }
        
        if(n%div===0 && m%div===0) {
            n = n/div
            m = m/div
            divAll.push(div)
        } 

        if(n%div!==0 && m%div!==0) {
            reminder.push(m)
            reminder.push(n)
            return;       
        }
        return recur(n , m )
    }
    
    recur(n , m) 
    console.log(divAll , reminder)
    
}

// #####################################

// function solution(n, m) {
//     const result = []
//     const gcdArr = [] 
//     for(let i=1; i<=m; i++) {
//         if(m%i===0 && n%i===0) {
//             // console.log(i)
//             gcdArr.push(i)
//         }
//     }

//     for(let l=m; l<n*m; l+=m) {
//         // console.log(l)
//         if(l%n===0) {
//             result[1] = l;
//             break
//         }
//     }
//     // console.log(gcdArr)
//     result[0] = Math.max(...gcdArr)
    
//     console.log(result)
// }

// #####################################

// function solution(n, m) {

//     // 큰수에서 작은수를 나눴을때 나머지값이 0이 되면
//     // 작은수가 최소공배수가 된다.toString에

//     // 0이 되지 않으면, 작은수가 큰 수가 되고, 나머지 값이 작은 수가 된다.
//     // 반복했을 때에 0이 나오면, 작은 수가 최소공배수가 된다.

//     // 유클리드 호제법

//     let a = m // 큰수
//     let b = n // 작은수
//     let r = 0 // a를 b로 나눴을때 나머지 값을 저장

//     while( ( a % b ) > 0) { // 이 조건이 true일때만 반복
//         r = a % b
//         a = b; // 큰 수에 작은값을 할당
//         b = r; // 작은수에 나머지값을 할당

//         console.log( a , b , r )
//     }
//     // 최소공배수는 두 수를 곱한 값에 최대공약수를 나눈 것
//     return [b , ((n*m)/b)]
// }

console.log(solution(48,144))