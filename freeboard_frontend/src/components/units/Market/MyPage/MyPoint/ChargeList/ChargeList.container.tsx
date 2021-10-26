import ChargeListUI from "./ChargeList.presenter";

export default function ChargeList(props: any) {
  return (
    <ChargeListUI
      fetchPointTransactionsOfLoading={props.fetchPointTransactionsOfLoading}
    />
  );
}
