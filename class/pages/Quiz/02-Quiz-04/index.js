import {useState} from "react"
import styled from "@emotion/styled";

export default function TwodayQuiz04 () {
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")

    const [emailError , setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [passwordCheckError, setPasswordCheckError] = useState("")

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onChangePasswordCheck(event) {
        setPasswordCheck(event.target.value)
    }

    function onClickButton () {
        if(email.includes("@")===false) {
            setEmailError("이메일을 다시 확인해주세요")
        }
        else if(password.length===0) {
            setPasswordError("비밀번호를 입력하세요")
        }
        else if(password !== passwordCheck) {
            setPasswordCheckError("비밀번호를 다시 확인해주세요")
        }
        else {
            alert("회원가입을 축하합니다!")
        }
        
    }
    const ErrorMessage = styled.div`
        color : red;
    `
    return (
        <>
            <div>이메일</div>
            <input type="text" onChange={onChangeEmail} />
            <ErrorMessage>{emailError}</ErrorMessage>
            <div>비밀번호</div>
            <input type="password" onChange={onChangePassword} />
            <ErrorMessage>{passwordError}</ErrorMessage>
            <div>비밀번호 확인</div>
            <input type="password" onChange={onChangePasswordCheck} />
            <ErrorMessage>{passwordCheckError}</ErrorMessage>
            <br/><br/>
            <button onClick={onClickButton}>회원가입</button>
        </>
    )
}

// email , password , passwordCheck , signupButton