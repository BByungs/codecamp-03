import axios from "axios";

export default function GraphqlRestPage() {
  // asynchronous xml
  // xml??

  // eXtention Markup Language를
  // Markup Language를 확장했다

  // 예전에 json이 없을때 xml을 썼었음

  // return (
  //     <writer>
  //         철수
  //     </writer>

  //     writer : "철수"
  // )

  // markup language를 확장해서 위의 코드처럼 만든다음
  // 저 데이터를 보냈음. 굉장히 귀찮았다고함

  // ! ################################################

  // * html이 아니라 javscript XML (JSX)임
  // return (
  //     <div></div>
  // )

  // ! ################################################

  const onClickRequest = async () => {
    // * axios.post("https://backend03.codebootcamp.co.kr/graphql")
    // rest api를 등록할때 post를 씀
    // data를 첨부하기 위해서
    // graphql을 rest-api로 보낼때 query든 mutation이던간에 data를 보내야하기 때문에
    // post임 그래서 postman에서 query를 했지만 post형식으로 data를 요청해서 받아왔음

    const result = await axios.post(
      "https://backend03.codebootcamp.co.kr/graphql",
      {
        query: `
                mutation createBoard{ 
                    createBoard (
                        createBoardInput: {
                            writer: "철수",
                            password: "1234",
                            title: "제목!!!",
                            contents: "내용!!!"
                        }
                    ) {
                        _id
                        writer
                    }
                } 
            `,
      }
    );
    console.log(result.data?.data.createBoard.writer);
  };

  // hoc 혹은 hof , useCallback , 코드를 짧게 쓸 수 있어서 등등
  // 실무에선 화살표 함수를 많이씀

  // 해외에선 async는 에이싱크 , SQL은 씨퀄이라고 읽는다고함

  return (
    <>
      <button onClick={onClickRequest}>
        클릭해서 Graphql을 Axios로 요청하기!!
      </button>
    </>
  );
}
