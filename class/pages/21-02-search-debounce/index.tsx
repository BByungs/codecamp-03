import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// v4라는 걸 불러왔는데 이름을 uuid4로 쓰고싶을때
// as 를 붙여주고 쓰고싶은 이름 써주면 된다
import _ from "lodash"; // lodash를 쓸땐 _로 쓰자 (개발자들의 암묵적인 룰임)
// lodash typescript 버전
// yarn add -D @types/lodash

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

const Column = styled.span`
  padding: 0px 50px;
`;

const Page = styled.span`
  padding: 0px 10px;
  cursor: pointer;
`;

// 검색버튼을 누르지 않아도 onChange만 되도 검색이 되게
export default function SearchDebouncePage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  // const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");
  const getDebounce = _.debounce((data) => {
    // 2. 그 데이터를 받아옴
    refetch({ search: data, page: 1 });
    setMyKeyword(data);
  }, 500); // 0.5초를 의미
  // 0.5초이내에 아무것도 작동안하면 실행됨

  function onChangeSearch(event) {
    getDebounce(event.target.value);
    // 1. onChange가 될때마다 getDebounce실행되는데 event.target.value를 넘겨줌
  }

  // function onClickSearch() {
  //   refetch({
  //
  //     search: mySearch,
  //   });
  //   setMyKeyword(mySearch);
  //
  // }
  function onClickPage(event) {
    refetch({ search: myKeyword, page: Number(event.target.id) });
  }
  return (
    <>
      <div>검색페이지!!</div>
      검색어: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{el.createdAt.slice(0, 10)}</Column>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={uuidv4()} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </Page>
        // 마땅히 key에 집어넣을게 없을때 uuid라는 걸 씀
      ))}
    </>
  );
}
