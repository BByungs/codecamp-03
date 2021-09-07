function solution(n) {
    let result = []
    for(let i=0; i<String(n).length; i++) {
        result.push(String(n)[i])
    }
    return result.reverse().map(el=>Number(el))
}