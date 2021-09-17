function solution(num) {
    let count = 0;
    
    while(num>1) {
        if(count>500) {
            return -1
        }
        count++
        if(num%2===0) {
            num = num / 2
            // count++
        }
        else if(num%2===1) {
            num = (num*3)+1
            // count++   
        }
        
    }
    
    return count
}


console.log(solution(626331)) // -1


// function solution(num) {

//     let count = -1;

//     for(let i=0; i<500; i++) {

//         if(num % 2 === 0) {
//             // 짝수인경우
//             num = num / 2
//         }
//         else if(num % 2 !== 0) {
//             // 홀수인경우
//             num = (num*3)+1
//         }
//         if(num===1) {
//             // 입력값이 1이 되는 시점
//             count = i;
//             break
//         } 
//     }

//     return count
// }