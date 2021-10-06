// function solution(participant, completion) {
//     // participant에서 completion의 ele가 있으면 제거 
    
//     for(let i=0; i<completion.length; i++) {
//         for(let j=0; j<participant.length; j++) {
//             if(completion[i]===participant[j]) {
//                 participant.splice(j,1)
//             }
//         }
//     }
//     console.log(participant[0])
//     participant.forEach(
//         (el,idx)=> {

//         }
//     )
// }

// function solution(participant, completion) {
//     let answer = ""
//     participant.sort((a,b)=> a<b ? -1 : 1)
//     completion.sort((a,b)=> a<b ? -1 : 1)
//     // sort는 원본을 바꿈

//     for(let i=0; i<participant.length; i++) {
//         // console.log(participant[i] , completion[i])
//         if(participant[i]!==completion[i]) {
//             answer = participant[i]
//             return answer
//         }
//     }

// }

// function solution(participant , completion) {
//     let answer = ""
//     participant.sort((a,b)=> a<b ? -1 : 1)
//     completion.sort((a,b)=> a<b ? -1 : 1)

//     let stop = false
//     participant.forEach((el,idx)=>{
//         if(el!==completion[idx] && stop===false) {
//             answer = el
//             stop = true
//         }
//     })
//     return answer
// }

function solution(participant , completion) { 
    // let answer = ""
    participant.sort((a,b)=> a<b ? -1 : 1)
    completion.sort((a,b)=> a<b ? -1 : 1)

    const result = participant.filter((el,idx)=>{
        return el!==completion[idx] 
    })
    // console.log(result[0])
    return result[0]
}
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"] ))