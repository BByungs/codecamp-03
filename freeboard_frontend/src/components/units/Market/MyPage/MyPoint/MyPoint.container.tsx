import MyPointUI from "./MyPoint.presenter";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_Selling,
} from "./MyPoint.queries";

// imp49910675
export default function MyPoint() {
  const [isAll, setIsAll] = useState(true);
  const [isChargeList, setIsChargeList] = useState(false);
  const [isBuyList, setIsBuyList] = useState(false);
  const [isSalesHistory, setIsSalesHistory] = useState(false);

  const { data: fetchPointTransactions } = useQuery(FETCH_POINT_TRANSACTIONS, {
    variables: {
      page: 0,
    },
  });

  const { data: fetchPointTransactionsOfLoading } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_LOADING,
    {
      variables: {
        page: 0,
      },
    }
  );

  const { data: fetchPointTransactionsOfBuying } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_BUYING,
    {
      variables: {
        page: 0,
      },
    }
  );

  const { data: fetchPointTransactionsOfSelling } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_Selling,
    {
      variables: {
        page: 0,
      },
    }
  );

  function onClickIsAll() {
    setIsAll(true);
    setIsChargeList(false);
    setIsBuyList(false);
    setIsSalesHistory(false);
  }

  function onClickChargeList() {
    setIsChargeList(true);
    setIsAll(false);
    setIsBuyList(false);
    setIsSalesHistory(false);
  }

  function onClickBuyList() {
    setIsBuyList(true);
    setIsChargeList(false);
    setIsAll(false);
    setIsSalesHistory(false);
  }

  function onClickSalesHistory() {
    setIsSalesHistory(true);
    setIsChargeList(false);
    setIsAll(false);
    setIsBuyList(false);
  }
  return (
    <MyPointUI
      fetchPointTransactions={fetchPointTransactions}
      fetchPointTransactionsOfLoading={fetchPointTransactionsOfLoading}
      fetchPointTransactionsOfBuying={fetchPointTransactionsOfBuying}
      fetchPointTransactionsOfSelling={fetchPointTransactionsOfSelling}
      onClickIsAll={onClickIsAll}
      onClickChargeList={onClickChargeList}
      onClickBuyList={onClickBuyList}
      onClickSalesHistory={onClickSalesHistory}
      isAll={isAll}
      isChargeList={isChargeList}
      isBuyList={isBuyList}
      isSalesHistory={isSalesHistory}
    />
  );
}
