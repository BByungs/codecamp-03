import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Page = styled.span`
  margin: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export default function PagenationBasicPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  // ================================
  // 원할때 리패치쿼리를 할 수 있는 함수???
  // data도 state와 비슷한 역활을 함

  // 순서
  // 1. 3페이지를 클릭했다
  // 2. 리패치가 들어온다
  // 3. 이 데이터를 data가 받아서
  // 4. 다시 화면에 뿌려준다
  // ================================

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  return (
    <>
      <div>페이지네이션</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <br />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <Page key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </Page>
      ))}
    </>
  );
}
