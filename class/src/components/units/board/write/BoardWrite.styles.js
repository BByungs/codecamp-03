import styled from "@emotion/styled"

// export const MyButton = styled.button`
//     background-color: gray;
// `

export const MyButton = styled.button`
    // emotion에서 props로 전달받는방법
    background-color: ${(props)=>(props.qqq === true ? 'yellow' : 'gray')};
`

export const Title = styled.h1`
    color: ${(props)=>(props.zzz === true ? 'red' : 'yellow')};
`

