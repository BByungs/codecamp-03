import SalesHistoryUI from "./SalesHistory.presenter";

export default function SalesHistory(props: any) {
  return (
    <SalesHistoryUI
      fetchPointTransactionsOfSelling={props.fetchPointTransactionsOfSelling}
    />
  );
}
