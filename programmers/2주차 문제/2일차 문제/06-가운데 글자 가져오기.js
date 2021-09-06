function solution(s) {
    let array = s.split("")
    
    if(array.length%2===0) { 
        // 짝수일때 
        while(array.length>2) {
            array.shift()
            array.pop()
        }
        return array.join('')
    }
    else {
        // 홀수일때
        while(array.length>1) {
            array.shift()
            array.pop()
        }
        return array.join('')
    }
}