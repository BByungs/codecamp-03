// function solution(numbers) {
//     let arr = []
    
//     for(let i=0; i<numbers.length; i++) {
//         for(let j=0; j<numbers.length; j++) {
//             if(i===j) {
//                 continue
//             }
            
//             if(arr.includes(numbers[i]+numbers[j])===false) {
//                 arr.push(numbers[i]+numbers[j])
//             }
//         }
//     }
//     return arr.sort((a,b)=>a-b)
// }


// function solution(numbers) {
//     let arr = []
    
//     for(let i=0; i<numbers.length; i++) {
//         for(let j=i+1; j<numbers.length; j++) {       
//             const sum = numbers[i]+numbers[j]
            
//             if(!arr.includes(sum)) {
//                 arr.push(sum)
//             }   
//         }
//     }
//     return arr.sort((a,b)=>a-b)
// }

function solution(numbers) {
    let arr = [];

    numbers.forEach((numbers1,idx)=>{
        // 시작위치를 다음위치로
        numbers.slice(idx+1 , numbers.length)
        .forEach(numbers2=>{
            // console.log(numbers1,numbers2)
            let sum = numbers1 + numbers2
            if(!arr.includes(sum)) {
                arr.push(sum)
            }
        })
    })
    return arr.sort((a,b)=>a-b)
}


console.log(solution([2,1,3,4,1])) //[2,3,4,5,6,7]