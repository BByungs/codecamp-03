const passday = (day) => {
    let dayIdx = day.indexOf("일") 
    let date = Number(day.slice(dayIdx-2,-1))
    
    let today = new Date()
    return `${today.getDate()-date}일이 지났습니다.`
}

passday("2021년 05월 02일") // 17일이 지났습니다.