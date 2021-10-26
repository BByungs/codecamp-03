import MyPageAllUI from "./All.presenter";

export default function MyPageAll(props: any) {
  return <MyPageAllUI fetchPointTransactions={props.fetchPointTransactions} />;
}
