const TodoList = [
    { work: "청소", finish: false },
    { work: "미적분 과제", finish: true  },
    { work: "논문 해석", finish: false },
    { work: "알고리즘 풀기", finish: false },
    { work: "미니홈피 제작", finish: false },
    { work: "Blog 글 쓰기", finish: true }
]


const length = TodoList.length;
const finish = TodoList.filter(el=>el.finish).length;
const result = `총${Math.ceil((finish/length)*100)}% 진행하였습니다.`
console.log(result)
