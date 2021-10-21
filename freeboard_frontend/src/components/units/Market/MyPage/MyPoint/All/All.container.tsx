import MyPageAllUI from "./All.presenter";

export default function MyPageAll(props) {
  return <MyPageAllUI fetchPointTransactions={props.fetchPointTransactions} />;
}
