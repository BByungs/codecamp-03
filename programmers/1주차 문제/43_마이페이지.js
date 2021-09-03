const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]

let tier = ""
let clothesCount = myShopping.filter(el=>el.category==="의류").length
let clothesFilter = myShopping.filter(el=>el.category==="의류")
let clothesPrice = clothesFilter.reduce((acc,cur)=>{
    return acc+cur.price 
},0)

if(clothesCount >=0 && clothesCount<=2) {
    tier = "Bronze"
} else if(clothesCount >=3 && clothesCount <=4) {
    tier = "Silver"
} else if(clothesCount>=5) {
    tier = "Gold"
}

console.log(`의류를 구매한 횟수는 총${clothesCount}회 금액은${clothesPrice}원이며 동급은${tier}입니다.`)