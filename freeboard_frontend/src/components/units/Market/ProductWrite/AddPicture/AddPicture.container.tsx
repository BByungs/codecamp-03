import AddPictureUI from "./AddPicture.presenter";

export default function AddPicture(props) {
  return <AddPictureUI onChangeFiles={props.onChangeFiles} data={props.data} />;
}
