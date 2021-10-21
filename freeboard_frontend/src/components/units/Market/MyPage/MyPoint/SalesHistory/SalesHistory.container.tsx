import SalesHistoryUI from "./SalesHistory.presenter";

export default function SalesHistory(props) {
  return (
    <SalesHistoryUI
      fetchPointTransactionsOfSelling={props.fetchPointTransactionsOfSelling}
    />
  );
}
