function makeNumber(num) {
	let str = ""
	for(let i=1; i<=num; i++) {
		str = str + i + "-"
	}
	return str.slice(0,str.length-1)
}
