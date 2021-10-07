import { IProps } from "./MyForm.types";
import styled from "@emotion/styled";

export const MyButton = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "yellow" : "")};
`;
