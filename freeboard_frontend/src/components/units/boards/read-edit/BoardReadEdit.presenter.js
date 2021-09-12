import {
  Comments_Edit,
  Edit_Writer_Password_Starscope,
  Edit_Comment_Writer_Input,
  Edit_Comment_Password_Input,
  Edit_Comment_Submit,
  Edit_Comment_Submit_Input,
  Edit_Comment_Submit_Write_Button,
  Edit_Comment_Submit_String,
  Edit_Comment_Submit_StringCount,
  Edit_Comment_Submit_Button,
  StarScope,
  StarImg,
  Underline2,
} from "./BoardReadEdit.styles";

export default function BoardReadEditUI(props) {
  return (
    <Comments_Edit>
      <Edit_Writer_Password_Starscope>
        <Edit_Comment_Writer_Input
          type="text"
          onChange={props.onChangeEditCommentWriterInput}
          placeholder="Writer"
        />
        <Edit_Comment_Password_Input
          type="password"
          onChange={props.onChangeEditCommentPasswordInput}
          placeholder="Password"
        />
        {/* 별점 */}
        <StarScope>
          <StarImg src="/star.png" />
          <StarImg src="/star.png" />
          <StarImg src="/star.png" />
          <StarImg src="/star.png" />
          <StarImg src="/star.png" />
        </StarScope>
      </Edit_Writer_Password_Starscope>
      {/* 댓글 등록 부분 */}
      <Edit_Comment_Submit>
        <Edit_Comment_Submit_Input
          onChange={props.onChangeEditCommentSubmitInput}
        ></Edit_Comment_Submit_Input>
        <Underline2 />
        <Edit_Comment_Submit_Write_Button>
          <Edit_Comment_Submit_StringCount>
            <Edit_Comment_Submit_String>46/100</Edit_Comment_Submit_String>
          </Edit_Comment_Submit_StringCount>
          <Edit_Comment_Submit_Button
          // onClick={}
          >
            수정하기
          </Edit_Comment_Submit_Button>
        </Edit_Comment_Submit_Write_Button>
      </Edit_Comment_Submit>
    </Comments_Edit>
  );
}
