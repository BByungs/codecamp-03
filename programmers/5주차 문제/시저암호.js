function solution(s, n) {
    const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    const result = []
    
    s.split("").forEach((el)=>{
        if(el===" ") {
            result.push(" ")
        }
        
        if(upper.includes(el)) {
            if(upper.indexOf(el)+n > 25) {
                result.push(upper[upper.indexOf(el)+n-26])
            } 
            else {
                result.push(upper[upper.indexOf(el)+n])   
            }
        } else if(lower.includes(el)) {
            if(lower.indexOf(el)+n >25) {
                result.push(lower[lower.indexOf(el)+n-26])
            }else {
             result.push(lower[lower.indexOf(el)+n])   
            }
        }
    })
    return result.join("")
}

console.log(solution("a B z" , 1))