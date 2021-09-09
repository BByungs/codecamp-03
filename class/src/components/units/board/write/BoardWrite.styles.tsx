import styled from "@emotion/styled"

// export const MyButton = styled.button`
//     background-color: gray;
// `

interface IButtonProps {
    qqq:boolean
}

export const MyButton = styled.button`
    // emotion에서 props로 전달받는방법
    background-color: ${(props: IButtonProps)=>(props.qqq === true ? 'yellow' : 'gray')};
`

interface ITitleProps {
    zzz:boolean
}

export const Title = styled.h1`
    color: ${(props:ITitleProps)=>(props.zzz === true ? 'red' : 'yellow')};
`

