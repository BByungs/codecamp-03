import React from "react";
import ProductWriteText from "../../../../commons/ProductWrite/ProductWriteText";
import SelectedPhoto from "../../../../commons/ProductWrite/SelectedPhoto";
import SelectPhoto from "../../../../commons/ProductWrite/SelectPhoto";
import { Wrapper, Preview } from "./AddPicture.styles";

export default function AddPictureUI(props) {
  return (
    <Wrapper>
      <ProductWriteText name="사진 첨부" />
      <Preview>
        <SelectedPhoto />
        <SelectPhoto register={props.register} />
      </Preview>
    </Wrapper>
  );
}
