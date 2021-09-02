let email = "coDecAmp@gamil.com "
email = email.trim();
const newArr = email.split("@");

for(let i=0; i<newArr.length; i++) {
	newArr[i] = newArr[i].toLowerCase();
}

const result = `${newArr[0]}@${newArr[1]}`
console.log(result)