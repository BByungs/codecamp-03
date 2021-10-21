import ChargeListUI from "./ChargeList.presenter";

export default function ChargeList(props) {
  return (
    <ChargeListUI
      fetchPointTransactionsOfLoading={props.fetchPointTransactionsOfLoading}
    />
  );
}
