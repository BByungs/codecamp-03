function solution(s) {

    let str = s.toLowerCase()
    let arr =  str.split("")
    // 문자열 "p" count 세주는 함수
    let pCount = (arr) => {
        return arr.filter(el=>el==="p").length
    }

    // 문자열 "y" count 세주는 함수
    let yCount = (arr) => {
        return arr.filter(el=>el==="y").length
    }

    return pCount(arr)===0 && yCount(arr) === 0 
    ? true : pCount(arr) === yCount(arr) 
    ? true : false 
}

console.log(solution("pPoooyY"))
console.log(solution("Pyy"))


