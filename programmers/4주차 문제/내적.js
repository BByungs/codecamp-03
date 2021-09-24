// function solution(a, b) {
   
//     let result = []
    
//     while(a.length!==0 && b.length!==0) {
//         result.push(a.shift()*b.shift())
//     }
     
//     return result.reduce((acc,cur)=>acc+cur,0)

//  }

 function solution(a , b) {

    let array = a.map((el,idx)=>{
        // console.log(el , b[idx])
        return el*b[idx]
    })
    return array.reduce((acc,cur)=>{
        return acc+cur
    },0)

    
 }
 console.log(solution([1,2,3,4] , [5,6,7,8]))

