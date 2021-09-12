import BoardReadEditUI from "./BoardReadEdit.presenter";
import { useState } from "react";
export default function BoardReadEdit() {
  const [editWriterInput, setEditWriterInput] = useState("");
  const [editPasswordInput, setEditPasswordInput] = useState("");
  const [editCommentInput, setEditCommentInput] = useState("");

  function onChangeEditCommentWriterInput(event) {
    setEditWriterInput(event.target.value);
  }
  function onChangeEditCommentPasswordInput(event) {
    setEditPasswordInput(event.target.value);
  }
  function onChangeEditCommentSubmitInput(event) {
    setEditCommentInput(event.target.value);
  }
  return (
    <BoardReadEditUI
      onChangeEditCommentWriterInput={onChangeEditCommentWriterInput}
      onChangeEditCommentPasswordInput={onChangeEditCommentPasswordInput}
      onChangeEditCommentSubmitInput={onChangeEditCommentSubmitInput}
    />
  );
}
