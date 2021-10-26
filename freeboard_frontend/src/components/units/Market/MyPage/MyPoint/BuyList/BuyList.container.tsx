import BuyListUI from "./BuyList.presenter";

export default function BuyList(props: any) {
  return (
    <BuyListUI
      fetchPointTransactionsOfBuying={props.fetchPointTransactionsOfBuying}
    />
  );
}
