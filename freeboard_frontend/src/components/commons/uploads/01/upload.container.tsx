import UploadButton1UI from "./upload.presenter";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { useMutation } from "@apollo/client";

import { UPLOAD_FILE } from "../../../units/board/write/BoardWrite.queries";
import { IUploads01Props } from "./upload.types";

export default function UploadButton1(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file?.size) {
      Modal.error({ content: "파일이 없습니다." });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      Modal.error({ content: "파일이 너무 큽니다.(제한: 5MB)" });
      return;
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      Modal.error({
        content: "파일 확장자가 올바르지 않습니다.(png, jpeg만 가능)",
      });
      return;
    }

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFile(result.data.uploadFile.url, props.index);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <UploadButton1UI
      imageUrl={props.imageUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
    />
  );
}
