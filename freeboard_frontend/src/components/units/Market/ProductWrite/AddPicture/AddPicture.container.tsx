import AddPictureUI from "./AddPicture.presenter";

export default function AddPicture(props: any) {
  return (
    <AddPictureUI
      onChangeFiles={props.onChangeFiles}
      data={props.data}
      defaultValue={props.defaultValue}
    />
  );
}
