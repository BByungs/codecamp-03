import { ChangeEvent } from "react";

export interface IMainPageUI {
  onClickSubmit: () => void;
  onClickLogin: () => Promise<void>;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
}
