const valPassword = (password1,password2) => {
	password1	= password1.toLowerCase();
	password2 = password2.toLowerCase();

	if(password1.length <8 || password2.length<8) {
		return "비밀번호는 8~16자리여야 합니다."
	} else if(password1 !== password2) {
		return "비밀번호를 다시 확인해주세요"
	} else {
		return true
	}
}