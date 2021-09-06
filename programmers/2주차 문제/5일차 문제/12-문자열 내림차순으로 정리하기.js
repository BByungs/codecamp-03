function solution(s) {  
    let smallLetterCheck = (s) => {
        let smallLetterAlphabet = "abcdefghijklnmopqrstuvwxyz"
        for(let i=0; i<smallLetterAlphabet.length; i++) {
            if(s.includes(smallLetterAlphabet[i])) {
                return true
            }
        }
        return false
    }
    
    let bigLetterCheck = (s) => {
        let bigLetterAlphabet = "ABCDEFGHIJKLNMOPQRSTUVWXYZ"
        for(let i=0; i<bigLetterAlphabet.length; i++) {
            if(s.includes(bigLetterAlphabet[i])) {
                return true
            }
        }
        return false
    }
    
    if(smallLetterCheck(s) && bigLetterCheck(s)) {
        // 문자열에 소문자와 대문자 둘다 존재할때
        let alphabet = "ABCDEFGHIJKLNMOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz"
        // 소문자 마지막 인덱스는 25번째 인덱스임
        let idxArr = []

        for(let i=0; i<alphabet.length; i++) {
            if(s.includes(alphabet[i])) {
                idxArr.push(i)
            }
        }
        let sortArr = idxArr.sort((a,b)=>b-a)
        let result = []
        for(let i=0; i<sortArr.length; i++) {
            result.push(alphabet[sortArr[i]])
        }
        return result.join('')
    }
    
    else if(smallLetterCheck(s)) {
        // 소문자만 있을때
        let smallAlphabet = "abcdefghijklnmopqrstuvwxyz" 
        let smallIdxArr = []
        for(let i=0; i<smallAlphabet.length; i++) {
            if(s.includes(smallAlphabet[i])) {
                smallIdxArr.push(i)
            }
        }
        let smallSortArr = smallIdxArr.sort((a,b)=>b-a)
        let smallResult = []
        for(let i=0; i<smallSortArr.length; i++) {
            smallResult.push(smallAlphabet[smallSortArr[i]])
        }
        return smallResult.join('')
    }
    
    else if(bigLetterCheck(s)) {
        // 대문자만 있을때
        let bigAlphabet = "ABCDEFGHIJKLNMOPQRSTUVWXYZ"
        let bigIdxArr = []
        for(let i=0; i<bigAlphabet.length; i++) {
            if(s.includes(bigAlphabet[i])) {
                bigIdxArr.push(i)
            }
        }
        let bigSortArr = bigIdxArr.sort((a,b)=>b-a)
        let bigResult = []
        for(let i=0; i<bigSortArr.length; i++) {
            bigResult.push(bigAlphabet[bigSortArr[i]])
        }
        return bigResult.join('')
    }
}

console.log(solution("BCDEFG")) // GFEDCB