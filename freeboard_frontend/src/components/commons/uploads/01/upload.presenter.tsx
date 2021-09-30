import { UploadButton, UploadFileHidden, UploadImage } from "./upload.styles";
import { IUploads01UIProps } from "./upload.types";

export default function UploadButton1UI(props: IUploads01UIProps) {
  return (
    <>
      {props.imageUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.imageUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <br />
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
