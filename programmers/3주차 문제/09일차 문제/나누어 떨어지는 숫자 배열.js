function solution(arr, divisor) {    
    let newArr = arr.filter((el)=>{
        if(el%divisor===0) {
            return true
        }
    })
    if(newArr.length===0) {
        return [-1]
    } 
    return newArr.sort((a,b)=>a-b)
    
}