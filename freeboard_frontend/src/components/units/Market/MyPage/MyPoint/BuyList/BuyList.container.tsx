import BuyListUI from "./BuyList.presenter";

export default function BuyList(props) {
  return (
    <BuyListUI
      fetchPointTransactionsOfBuying={props.fetchPointTransactionsOfBuying}
    />
  );
}
