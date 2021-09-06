function solution(arr) {
    // 배열의 0번째 요소를 빈배열에 집어넣고 시작
    // 배열의 1번째 요소부터 반복문 돌려서
    // 해당 배열요소의 전 요소와 같다면 빈배열에 추가하지 않고
    // 다르면 추가
    
    let result = [arr[0]]
    for(let i=1; i<arr.length; i++) {
        if(arr[i]!==arr[i-1]) {
            result.push(arr[i])
        }
    }
    return result
    
}