import UploadButton1UI from "./upload.presenter";
import { ChangeEvent, useRef, useState } from "react";
import { IUploads01Props } from "./upload.types";
import { CheckValidationImage } from "../../library/CheckValidationImage";
// import CheckValidationImage from "../../library/CheckValidationImage";

export default function UploadButton1(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState("");

  function onClickUpload() {
    fileRef.current?.click();
  }

  function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = CheckValidationImage(event.target.files?.[0]);
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setFileUrl(data.target?.result as string);
      props.onChangeFiles(file, props.index);
    };
  }

  return (
    <UploadButton1UI
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      defaultFileUrl={props.defaultFileUrl}
    />
  );
}
