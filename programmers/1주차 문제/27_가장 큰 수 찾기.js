function bigNum(str) {

	let biggest = str[0]
	for(let i=1; i<str.length; i++) {
		if(str[i]>biggest) {
			biggest = str[i]
		} 
	}
	return biggest
}
