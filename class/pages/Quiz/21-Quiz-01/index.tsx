import { gql, useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import { useState } from "react";
import _ from "lodash";

const Row = styled.span`
  padding: 30px 50px;
`;
const Page = styled.span`
  padding: 10px;
  cursor: pointer;
`;
interface IProps {
  isMatched: boolean;
}
const MyTitle = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;
const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export default function Quiz01() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [search, setSearch] = useState("");

  const getDebounce = _.debounce((data) => {
    refetch({
      search: data,
      page: 1,
    });
    setSearch(data); // 안녕하세요중에 안녕치면 안녕이 저장됨
  }, 500); // 0.5초마다 재 실행 될 부분

  function onChangeSearch(event: any) {
    getDebounce(event.target.value);
  }

  function onClickPage(event) {
    refetch({
      search: search,
      page: Number(event.target.id),
    });
  }

  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        검색어 입력:{" "}
        <input
          type="text"
          style={{ marginLeft: "30px" }}
          onChange={onChangeSearch}
        />
      </div>
      {data?.fetchBoards.map((el: any) => (
        <div key={uuidv4()} style={{ marginBottom: "20px" }}>
          <Row>{el.writer}</Row>
          <Row>
            {el.title
              .replaceAll(search, `#$%${search}#$%`)
              .split("#$%")
              .map((el) => (
                <MyTitle key={uuidv4()} isMatched={el === search}>
                  {el}
                </MyTitle>
              ))}
          </Row>
          <Row>{el.createdAt.slice(0, 10)}</Row>
        </div>
      ))}
      {new Array(10).fill(1).map((_, idx) => (
        <Page id={String(idx + 1)} onClick={onClickPage} key={uuidv4()}>
          {idx + 1}
        </Page>
      ))}
    </>
  );
}
