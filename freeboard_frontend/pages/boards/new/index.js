import {useState} from "react"
import {
    Container, 
    BigTitle, 
    SmallTitle , 
    Container_Title, 
    TitleInput, 
    Container_Contents, 
    ContentsInput, 
    Container_Address, 
    AddressSearch,
    AddressInput, 
    AddressSearchButton, 
    Container_Youtube,
    PhotoAttach, 
    Upload, 
    UploadButton,
    StringPlus, 
    StringUpload, 
    MainSetting, 
    RadioButton,
    StringRadioButton,
    RadioButtonInput, 
    Check, 
    RegistrationButton,
    Writer,
    Input,
    ErrorMessage,
    Title,
    TitleFont
    } from "../../../styles/boardsNewPageCss"
    import {useMutation , gql} from "@apollo/client"

    export const CREATE_BOARD = gql`
        mutation createBoard($createBoardInput: CreateBoardInput!) {
            createBoard(createBoardInput: $createBoardInput) {
                _id
            }
        }
    `

// const CREATE_BOARD = gql`
//     mutation 이건 없어도되고, 다른걸로 바꿔도 상관없음createBoard(2-1.$createBoardInput: 3.CreateBoardInput!) {
//         createBoard(1.createBoardInput: 2.$createBoardInput) {
//             _id
//             writer
//             title
//             ......
//         }
//     }
// }
// `

export default function BoardsNewPage() {
    const [writer , setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [contents, setContents] = useState("")
    const [title , setTitle] = useState("")

    const [writerError , setWriterError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [contentError , setContentError] = useState("")
    const [titleError , setTitleError] = useState("")

    const [ createBoard ] = useMutation(CREATE_BOARD)

    function onChangeWriter (event) {
        setWriter(event.target.value)
    }

    function onChangePassword (event) {
        setPassword(event.target.value)
    }

    function onChangeContent(event) {
        setContents(event.target.value)
    }
    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    async function onClickButton(){
        if(writer === ""){
          setWriterError("작성자를 입력해주세요.")
        }
        if(password === ""){
          setPasswordError("비밀번호를 입력해주세요.")
        }
        if(title === ""){
            setTitleError("제목을 입력해주세요.")
        }
        if(contents === ""){
            setContentError("내용을 입력해주세요.")
        }
        if(writer !== "" && password !== "" && title !== "" && contents !== ""){
          const result = await createBoard({
            variables: {
              createBoardInput: {
                // 키와 밸류가 같으면 생략이 가능하다!!
                // writer : writer,
                writer,
                password,
                title,
                contents
              },
            },
          });
          console.log(result.data.createBoard._id)
        }
      }
    return (
        <Container>
                <BigTitle>게시물 등록</BigTitle>
                {/* 작성자 , 비밀번호 */}
                <Container_Title>
                    <Writer>
                        <SmallTitle>작성자</SmallTitle>
                        <TitleInput type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter}/>
                        <ErrorMessage>{writerError}</ErrorMessage>
                    </Writer>
                    <Writer>
                        <SmallTitle>비밀번호</SmallTitle>
                        <TitleInput type="text" placeholder="비밀번호를 입력해주세요." onChange={onChangePassword}/>
                        <ErrorMessage>{passwordError}</ErrorMessage>
                    </Writer>
                </Container_Title>

                <Title>
                    <TitleFont>제목</TitleFont>
                    <Input placeholder="제목을 작성해 주세요." onChange={onChangeTitle}/>
                    <ErrorMessage>{titleError}</ErrorMessage>
                </Title>

                {/* 내용 입력칸 */}
                <Container_Contents>
                    <SmallTitle>내용</SmallTitle>
                    <ContentsInput placeholder="내용을 작성해주세요" onChange={onChangeContent}></ContentsInput>
                    <ErrorMessage>{contentError}</ErrorMessage>
                </Container_Contents>

                {/* 주소 입력칸 */}
                <Container_Address>
                    <SmallTitle>주소</SmallTitle>
                    <AddressSearch>
                        <AddressInput type="text" placeholder="07250" />
                        <AddressSearchButton>우편번호 검색</AddressSearchButton> 
                    </AddressSearch>
                    <Input/>
                    <Input/>
                </Container_Address>

                {/* 유튜브 입력칸 */}
                <Container_Youtube>
                    <SmallTitle>유튜브</SmallTitle>
                    <Input placeholder="링크를 복사해주세요."></Input>
                </Container_Youtube>

                {/* 사진 첨부 */}
                <PhotoAttach>
                    <SmallTitle>사진 첨부</SmallTitle>
                    <Upload>
                        <UploadButton>
                            <StringPlus>+</StringPlus>
                            <StringUpload>upload</StringUpload>
                        </UploadButton>
                        <UploadButton>
                            <StringPlus>+</StringPlus>
                            <StringUpload>upload</StringUpload>
                        </UploadButton>
                        <UploadButton>
                            <StringPlus>+</StringPlus>
                            <StringUpload>upload</StringUpload>
                        </UploadButton>
                    </Upload>
                </PhotoAttach>

                {/* 메인 설정 */}
                <MainSetting>
                    <SmallTitle>메인 설정</SmallTitle>
                    <Check>
                        <RadioButton>
                            <RadioButtonInput type="radio" name="button" value="youtube" />
                            <StringRadioButton>유튜브</StringRadioButton>
                        </RadioButton>
                        <RadioButton>
                            <RadioButtonInput type="radio" name="button" value="photo"/>
                            <StringRadioButton>사진</StringRadioButton>
                        </RadioButton>
                    </Check>
                </MainSetting>

                {/* 등록하기 버튼 */}
                <RegistrationButton onClick={onClickButton}>등록하기</RegistrationButton>
        </Container>
        
    )
}