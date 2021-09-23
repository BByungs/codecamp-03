function solution(x) {
    const sum = String(x).
    split("").
    reduce(
        (acc,current)=>{
       return acc+Number(current) 
    },0)
    
    return x % sum === 0 
        ? true 
        : false
}


// function solution(x) {
//     let sum = 0;
//     x.toString().split("")
//     .forEach((item)=>{
//         sum += Number(item)
//     })
    
//     return x % sum === 0 ? true : false
// }

// toString과 String의 차이?

// 변수에 담긴값만 변수.toString에 접근 할 수 있음

// String(data)은 data가 뭐든지간에 다 쓸 수 있음
