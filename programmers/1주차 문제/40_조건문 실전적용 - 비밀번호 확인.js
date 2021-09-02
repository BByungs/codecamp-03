function password(input1, input2) {
	input1 = String(input1).toLowerCase()
	input2 = String(input2).toLowerCase()
	
	return input1!==input2 
	? "비밀번호를 다시 확인해주세요."
	: "회원가입을 축하합니다."

}

password("1234", "1235")
password("1234", 1234)