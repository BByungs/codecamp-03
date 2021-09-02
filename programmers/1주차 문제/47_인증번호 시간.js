let count = 60;

let decreaseCount = setInterval(()=>{

	if(count>1) {
		if(count<11) {
			console.log(`0:0${--count} 남았습니다.`)
		} else if(count>=10) {
			console.log(`0:${--count} 남았습니다.`)
		}
	} else {
		clearInterval(decreaseCount)
	}
},1000)
