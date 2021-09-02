let stringData = [1, "가나", true, 126, "false" ] 

for(let i=0; i<stringData.length; i++) {
		if(typeof stringData[i]!=='string') {
				stringData[i] = String(stringData[i])
		}
}

console.log(stringData)