import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Quill = styled(ReactQuill)`
  width: 996px;
  height: 320px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 40px; */
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 50px;
`;

export const All = styled.div`
  height: 360px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;
