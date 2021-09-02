function grade(score) {
	let result = "";
	
	if(score >= 90) {
		result = "A"
	} else if(score >= 80) {
		result = "B"
	} else if(score >= 70) {
		result = "C"
	} else if(score >= 60) {
		result = "D"
	} else {
		result = "F"
	}
	
	return score>100 || score<0 
	? "잘못된 점수입니다"
	: result
}