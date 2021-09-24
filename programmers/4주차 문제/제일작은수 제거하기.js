// function solution(arr) {
    
//     const SearchSmallest = (arr) => {
//         let smallest = arr[0]
//         for(let i=1; i<arr.length; i++) {
//             if(smallest > arr[i]) {
//                 smallest = arr[i]
//             }
//         }
//         return smallest
//     }

//     let result = arr.filter((el)=>{
//         return el!==SearchSmallest(arr)
//     })
    
//     return result.length===0 ? [-1] : result
// }

// function solution(arr) {

//     let newArr = arr.sort((a,b)=>b-a)
//     newArr.pop()
    
//     return newArr.length === 0 ? [-1] : newArr
// }

// function solution(arr) {
//     let shortest = arr[0]
//     let newArr = arr.slice(1)
//     newArr.forEach((el)=>{
//         if(el < shortest) {
//             shortest = el
//         }
//     })
//     arr.splice(arr.indexOf(shortest),1)

//     return arr.length===0 ? [-1] : arr
// }

function solution(arr) {
    const min = Math.min.apply(null, arr)
    // const min = Math.min(...arr) 위에있는거랑 똑같음
    // console.log(min)

    return  arr.filter(el=>el>min).length===0 
        ? [-1] 
        : arr.filter(el=>el>min)
    
}

console.log(solution([4,3,1,2,1]))
