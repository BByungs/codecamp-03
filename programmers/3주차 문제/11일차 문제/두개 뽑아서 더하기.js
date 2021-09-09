function solution(numbers) {
    let arr = []
    
    for(let i=0; i<numbers.length; i++) {
        for(let j=0; j<numbers.length; j++) {
            if(i===j) {
                continue
            }
            
            if(arr.includes(numbers[i]+numbers[j])===false) {
                arr.push(numbers[i]+numbers[j])
            }
        }
    }
    return arr.sort((a,b)=>a-b)
}

console.log(solution([2,1,3,4,1])) //[2,3,4,5,6,7]