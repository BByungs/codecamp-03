import { Wrapper, Header } from "./MarketMain.styles";
import BestProduct from "./BestProduct/BestProduct.container";
import SearchBar from "./SearchBar/SearchBar.container";
import List from "./List/List.container";
import { ProductSubmut, Footer, All, ViewToday } from "./MarketMain.styles";
import { useEffect, useState } from "react";
export default function MarketMainUIPage(props) {
  const [todayViewItems, setTodayViewItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todayView"));

    setTodayViewItems(items);
  });

  return (
    <All>
      <Wrapper>
        <Header>베스트 상품</Header>
        <BestProduct data={props.data} />
        <SearchBar />
        <List />
        <Footer>
          <ProductSubmut onClick={props.onClickSubmit}>
            상품 등록하기
          </ProductSubmut>
        </Footer>
      </Wrapper>
      <ViewToday>
        {todayViewItems
          ?.map((el) => (
            <div key={el._id}>
              <div>{el.name}</div>
              <div>{el.price}</div>
            </div>
          ))
          .reverse()}
      </ViewToday>
    </All>
  );
}
