function solution(a, b) {
    
    if(a>12 || b>31) {
        return;
    }
    const week = ['FRI' , 'SAT' , 'SUN' , 'MON' , 'TUE' , 'WED' , "THU"]
    
    let makeMonthArray = (a) => {
        let array = []
        for(let i=1; i<=a-1; i++) {
            array.push(i)
        }
        return array
    }  // [1,2,3,4]
    
    let elapsedDate = (array) => {
        // makeMonthArray(a) 를 매개변수로 넣으면됨
        let result = []
        for(let i=0; i<array.length; i++) {
            if(array[i]===2) {
                result.push(29)
            } else if(array[i]===4 || array[i]===6 || array[i]===9 || array[i]===11) {
                result.push(30)
            } else {
                result.push(31)
            }
        }
        return result.reduce((acc,cur)=>acc+cur,0)
    }
    
    let passedDay = elapsedDate(makeMonthArray(a)) + b -1

    let day = passedDay%7
    
    return week[day]
}

// function solution(a,b) {
//     let answer = ""
//     let days = 0;
    
//     const month = {
//         1 : 31,
//         2 : 29,
//         3 : 31,
//         4 : 30,
//         5 : 31,
//         6 : 30,
//         7 : 31,
//         8 : 31,
//         9 : 30,
//         10 : 31,
//         11 : 30,
//         12 : 31
//     }

//     const week = ['FRI' , 'SAT' , 'SUN' , 'MON' , 'TUE' , 'WED' , "THU"]

//     for(let i=1; i<a; i++) {
//         // console.log(month[i])
//         days += month[i]
//     }
//     days = days + (b-1)

//     answer = week[days%7]
//     return answer
    
// }

// function solution(a,b) {
//     const month = {
//         1 : 31,
//         2 : 29,
//         3 : 31,
//         4 : 30,
//         5 : 31,
//         6 : 30,
//         7 : 31,
//         8 : 31,
//         9 : 30,
//         10 : 31,
//         11 : 30,
//         12 : 31
//     }
//     /**
//      * 로직 설명: 
//      * mn이 해당월수와 같지 않을경우 초기값에 해당 달의 일수를 더하고
//      * mn이 해당월수와 같아지는 순간 일수를 더해주는데 당일을 제외한 값을 더해줌
//      * 이렇게 하면 몇일이 지났는지 알 수 있음
//      * 
//      */

//     const week = [ 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU' ];

//     const days = new Array(a).fill(1).reduce((acc,cur,idx)=>{
//         // console.log(acc,cur, idx)
//         const mn = cur + idx // 해당 월수에 대한 정보
//         return acc + ( (mn) !== a
//             // 이전 월수 인 경우
//             ? month[mn]
//             // 해당 월수일 경우
//             : b-1
//         )
//     },0)
//     // console.log(days)

//     return week[days%7]
// }

// function solution(a,b) {
//     const week = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ]
//     const days = new Date(2016,a-1,b).getDay()
//     return week[days]
// }


// new Date(Year , Month-1 , day)

console.log(solution(5,24))