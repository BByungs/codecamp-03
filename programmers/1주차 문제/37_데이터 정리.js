let List = [
    { number: 1, title: "장미", price: 4000 },
    { number: 2, title: "식칼", price: 7000 },
    { number: 3, title: "슬리퍼", price: 12000 },
      { number: 4, title: "주전자", price: 5000 },
      { number: 5, title: "선풍기", price: 5700 },
    { number: 6, title: "마우스 패드", price: 1800 },
    { number: 7, title: "휴대폰 케이스", price: 5500 },
      { number: 8, title: "마우스", price: 6500 },
 ]
 
 
 const result = List.sort((a,b)=>a.price-b.price)
 console.log(result)
 

 [5,3,10,1].sort((a,b)=>a-b) // [1,3,5,10]
 
//  5가 다른수와 비교했을때 더 큰 것의 갯수 2
//  3이 다른수와 비교했을때 더 큰 것의 갯수 1
//  10이 다른수와 비교했을때 더 큰 것의 갯수 3
//  1이 다른수와 비교했을때 더 큰 것의 갯수 0

 


