import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  imageUrl: string;
  index: number;
  onChangeFile: (fileUrl: string, index: number) => void;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  imageUrl: string;
  onClickUpload: () => void;
  // 아무것도 리턴하지 않는 타입
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
