const number = "01012345678"
const head = number.split('').slice(0,3).join('')
const mid = number.split('').slice(3,7).join('')
const tail = number.split('').slice(7).join('')
let arr = [head,mid,tail]
console.log(arr)