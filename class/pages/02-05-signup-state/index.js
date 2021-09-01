import {useState} from "react"
export default function SignupStatePage() {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [passwordCheck , setPasswordCheck] = useState("")

    const [emailErrorMsg , setEmailErrorMsg] = useState("")
    
    function onChangeEmail (event) {
        // event.target만 해줘도 태그가 잡힘
        setEmail(event.target.value)
    }
    // event는 onChange가 일어났을때 event를 통해 값이 들어옴
    // on으로 시작하는 얘들은 데이터를 넘겨주게 설계되어있음

    function onChangePassword (event) {
        setPassword(event.target.value)
    }

    function onChangePasswordCheck (event) {
        setPasswordCheck(event.target.value)
    }   
    
    function onClickSignup () {
        // console.log(`email: ${email}`)
        // console.log(`password: ${password}`)
        // console.log(`passwordCheck: ${passwordCheck}`)
        if(email.includes("@")===false) {
            setEmailErrorMsg("check your email")
            // alert("check your email")
        } 
        else if(password.length<8)  {
            alert("비밀번호는 8자 이상이여야 합니다")
        } 
        else if(password !== passwordCheck) {
            alert("비밀번호를 다시 확인해 주세요")
        } 
        else {
            alert("회원가입을 환영합니다")
        }
    }

   
    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail} /><br />
            <div>{emailErrorMsg}</div> {/* emotion으로 색과 사이즈 변경하기 */}
            <br />
            비밀번호: <input type="password" onChange={onChangePassword} /><br /><br />
            비밀번호 확인: <input type="password" onChange={onChangePasswordCheck} /><br /><br />
            <button onClick={onClickSignup}>회원가입하기</button>
        </div>

    )
}