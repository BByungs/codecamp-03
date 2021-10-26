import { useState } from "react";
import SearchBarUIPage from "./SearchBar.presenter";

export default function SearchBar(props: any) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function onChange(_: any, dateString: string) {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  }
  function onClickOnSale() {
    props.setIsSoldout(false);
  }

  function onClickSoldout() {
    props.setIsSoldout(true);
  }

  return (
    <SearchBarUIPage
      onChange={onChange}
      onClickOnSale={onClickOnSale}
      onClickSoldout={onClickSoldout}
      isSoldout={props.isSoldout}
    />
  );
}
