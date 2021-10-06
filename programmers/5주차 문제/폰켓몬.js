function solution(nums) {
    const get = nums.length/2
    const result = []
    
    nums.forEach((monster)=>{
        if(!result.includes(monster) && result.length <get) {
            result.push(monster)
        }
    })
    return result.length
}

// function solution(nums) {
    
//     // 내가 고를 수 있는 최대 종류 => 각각의 종류이면서 포켓몬의 절반을 넘지않는 수
//     const pocket = []
//     for(let i=0; i<nums.length; i++) {
//         if(!pocket.includes(nums[i]) && pocket.length < nums.length/2) {
//             pocket.push(nums[i])
//         }
//     }
//     return pocket.length;
// }



console.log(solution([3,3,3,2,2,4]))