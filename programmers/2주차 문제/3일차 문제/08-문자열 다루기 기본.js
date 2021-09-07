function solution(s) {
    // 문자열에 알파벳이 있나 확인하는 함수

    // let checkNum = (s) => {
    //     let alphabet = "abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ"
    //     for(let i=0; i<alphabet.length; i++) {
    //         if(s.includes(alphabet[i])===true) {
    //             return false
    //         }
    //     }
    //     return true
    // }
    let checkNum = (s) => {
        for(let i=0; i<s.length; i++) {
            if(String(Number(s[i]))==="NaN") {
                return false
            }
        }
        return true
    }
    // 문자열의 길이를 확인해주는 함수
    let checkLength = (s) => {
        if(s.length===4 || s.length===6) {
            return true
        }
        return false
    }
    // 두개의 함수를 모두 만족하면 true 아니면 false
    return checkNum(s) && checkLength(s)
}
console.log(solution("a234"))
console.log(solution("1234"))

