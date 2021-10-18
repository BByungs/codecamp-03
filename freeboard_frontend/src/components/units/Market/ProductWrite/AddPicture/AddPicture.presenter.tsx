import React from "react";
import ProductWriteText from "../../../../commons/ProductWrite/ProductWriteText";
import SelectPhoto from "../../../../commons/ProductWrite/SelectPhoto";
import { Wrapper, Preview } from "./AddPicture.styles";

export default function AddPictureUI(props) {
  return (
    <>
      <Wrapper>
        <ProductWriteText name="사진 첨부" />
        {/* <SelectedPhoto /> */}
        <Preview>
          {new Array(3).fill(1).map((el, index) => (
            // 선택된 포토
            <SelectPhoto
              key={`${el}_${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
              defaultFileUrl={props.data?.fetchUseditem.images}
            />
          ))}
        </Preview>
      </Wrapper>
    </>
  );
}
