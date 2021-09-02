let email = "codecamp@gmail.com"
// let email = "rosa.kaas@gmail.com"
const whelkIdx = email.indexOf("@")

const head = email.slice(0,whelkIdx-2)
const star = "**"
const tail = email.split("@")[1]
const result = head+star+"@"+tail
console.log(result)
