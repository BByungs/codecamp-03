export default function TypeScriptPage() {

    let aaa = "안녕하세요"

    aaa = 3;
    // 에러를 찾아가고 싶으면 밑줄 쳐진 곳에
    // 마우스를 가져다 대고 cmd+클릭하면
    // 타입 안적힌 변수에 커서가 이동 됨
    // 거기에서 수정해주면 됨

    // 이렇게 해놓으면 뒤부터
    let bbb: string;
    
    // 문자열을 넣으면 정상 작동하고
    bbb = "hello world"
    // 넘버타입을 넣으면 에러남
    bbb = 123
    // 얘도 cmd+클릭 해주면 타입추론이 가능함

    // ============== 객체 =================
    
    interface IProfile {
        school: string
        age: number
    }
    // 먼저 타입을 만들어 놓고

    // 밑에 객체를 써주면 된다
    let profile = {
        school: "다람쥐 초등학교",
        age: 13
    }
    profile.age = "asdasd"

    // ============== 배열 =================
    let ddd: number[] = [1, 2, 3, 4, 5, 6]
    ddd[1] = "a"

    let ccc: string[] = ["a" , "b" , "c" , "d" , "e"]
    ccc[1] = 1

    // 두가지이상의 타입을 쓸때
    // 배열 배열인데 타입이 두가지다 공존 가능한거고
    let eee: (number | string)[] = ["1",2,3,4,5]
    
    eee[1]="a"
    eee[0]=1

    // 배열이 넘버타입으로만 이뤄져 있거나
    // 문자열타입으로만 이뤄져 있거나 둘 중 하나
    let fff: (number[] | string[]) = [1,2,3,4,5,6]
    


    return <div>타입스크립트 페이지입니다</div>
}