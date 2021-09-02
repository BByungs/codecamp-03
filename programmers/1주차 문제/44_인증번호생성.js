function random() {
	const fourNum = Math.random()*10000;
	const oneNum = String(Math.random()*10)
	return Math.floor(Number(String(fourNum).padStart(4,oneNum)))
}
