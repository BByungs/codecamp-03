function sum(num) {
	let count = 0;
    for (let i = 1; i <= num; i = i + 1) {
		count = count + i;

		// 1번 : 0 + i = 1;
        // 2번 : 1 + 2 = 3;
		// 3번 : 3 + 3 = 6;
        // 4번 : 6 + 4 = 10;
        // 5번 : 10 + 5 = 15;
    }
  
    console.log(count);
}
