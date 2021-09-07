function solution(s) {
    let newArr =  s.split(" ")
    let emptyArr = []
    for(let i=0; i<newArr.length; i++) {
        let str = ""
        for(let j=0; j<newArr[i].length; j++) {
            if(j===0) {
                str += newArr[i][j].toUpperCase()
            } else if(j%2===0) {
                str += newArr[i][j].toUpperCase()
            } else {
                str += newArr[i][j].toLowerCase()
            }
        }
        emptyArr.push(str)
        str = ""
    }
    return emptyArr.join(' ')
}

console.log(solution("hello world hAHa abcd"))