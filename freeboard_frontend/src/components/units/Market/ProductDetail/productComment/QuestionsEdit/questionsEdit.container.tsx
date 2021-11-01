import QuestionsEditUI from "./questionsEdit.presenter";

export default function QuestionsEdit(props) {
  return (
    <QuestionsEditUI
      sellerEl={props.sellerEl}
      onChangeQuestionsEdit={props.onChangeQuestionsEdit}
      onClickQuestionsEditSubmit={props.onClickQuestionsEditSubmit}
    />
  );
}
