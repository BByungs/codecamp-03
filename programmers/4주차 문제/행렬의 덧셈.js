function solution(arr1, arr2) {
    let result = []
    arr1.forEach((ele1,idx1)=>{
        let temp = []
        ele1.forEach((ele2,idx2)=>{
            temp.push(ele2 + arr2[idx1][idx2])
        })
        result.push(temp)
    })
    return result
}

// function solution(arr1, arr2) {
//     return arr1.map((ele1,idx1)=>ele1.map((ele2,idx2)=>ele2+arr2[idx1][idx2]))
// }

// function solution(arr1, arr2) {
//     let answer = [[]]
//     for(let i=0; i<arr1.length; i++) {
//         for(j=0; j<arr1[i].length; j++) {
//             const sum = arr1[i][j] + arr2[i][j]

//             if(answer[i] === undefined) {
//                 answer[i] = []
//             }
//             answer[i][j] = sum;
//         }
//     }
//     return answer;
    
// }

console.log(solution([[1,2],[2,3]] , [[3,4],[5,6]]))