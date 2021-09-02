function validation(email, password, passwordCheck) {
	//email.includes("@") && (password.length>=8 && password.length<=16) &&
	//password===passwordCheck => "회원가입을 축하합니다"
	password=String(password)
	passwordCheck=String(passwordCheck)
	if(email.includes("@")===false) {
		return "이메일 주소를 다시 확인해주세요."
	}
	else if(password.length<8 || password.length>16) {
		return "비밀번호는 8~16자여야 합니다."
	}
	else if(password!==passwordCheck) {
		return "비밀번호를 다시 확인해주세요"
	}
	else {
		return "회원가입을 축하합니다!"
	}
}