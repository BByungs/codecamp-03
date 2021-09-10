function solution (s) {

    return s.split('')
    .sort()
    .reverse()
    .join('')
}


console.log(solution("Zbcdefg")) // "gfedcbZ"


function solution(s) {
    let answer = ""
    
    const arr = []
    
    for(let i=0; i<s.length; i++) {
        arr.push(s[i])
    }
    arr.sort((a,b)=>{
        // 배열을 내림차순으로 정리 한거
        console.log(a,b)
    })
    
    console.log(arr)
}

// return a>b ? -1 : 1
// a를 앞으로 보낸다 -1
// a를 뒤로 보낸다 1



