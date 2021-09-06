function solution(s) {
    if(s[0]==="-") {
        return -1*Number(s.slice(1))
    } 
    else {
        return Number(s)
    }
}