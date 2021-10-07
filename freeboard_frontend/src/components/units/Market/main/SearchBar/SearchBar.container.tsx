import { useState } from "react";
import SearchBarUIPage from "./SearchBar.presenter";

export default function SearchBar() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function onChange(_: any, dateString: string) {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  }

  return <SearchBarUIPage onChange={onChange} />;
}
