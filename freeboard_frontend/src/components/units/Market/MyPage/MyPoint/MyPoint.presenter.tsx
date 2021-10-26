import { Wrapper, Select, Text, SelectLine } from "./MyPoint.styles";
import MyPageAll from "./All/All.container";
import ChargeList from "./ChargeList/ChargeList.container";
import BuyList from "./BuyList/BuyList.container";
import SalesHistory from "./SalesHistory/SalesHistory.container";

export default function MyPointUI(props: any) {
  return (
    <Wrapper>
      <Select>
        <Text
          onClick={props.onClickIsAll}
          isAll={props.isAll}
          isChargeList={false}
          isBuyList={false}
          isSalesHistory={false}
        >
          전체내역
        </Text>
        <SelectLine />

        <Text
          onClick={props.onClickChargeList}
          isChargeList={props.isChargeList}
          isAll={false}
          isBuyList={false}
          isSalesHistory={false}
        >
          충전내역
        </Text>
        <SelectLine />

        <Text
          isAll={false}
          onClick={props.onClickBuyList}
          isBuyList={props.isBuyList}
          isChargeList={false}
          isSalesHistory={false}
        >
          구매내역
        </Text>
        <SelectLine />

        {/* <Text>판매내역</Text> */}
        <Text
          isAll={false}
          onClick={props.onClickSalesHistory}
          isSalesHistory={props.isSalesHistory}
          isChargeList={false}
          isBuyList={false}
        >
          판매내역
        </Text>
      </Select>

      {/* 여기서부터 조건부 렌더링 */}
      {props.isAll && (
        <MyPageAll fetchPointTransactions={props.fetchPointTransactions} />
      )}
      {props.isChargeList && (
        <ChargeList
          fetchPointTransactionsOfLoading={
            props.fetchPointTransactionsOfLoading
          }
        />
      )}

      {props.isBuyList && (
        <BuyList
          fetchPointTransactionsOfBuying={props.fetchPointTransactionsOfBuying}
        />
      )}

      {props.isSalesHistory && (
        <SalesHistory
          fetchPointTransactionsOfSelling={
            props.fetchPointTransactionsOfSelling
          }
        />
      )}
    </Wrapper>
  );
}
