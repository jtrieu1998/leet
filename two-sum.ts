function twoSum(nums: number[], target: number): number[] {
    let nt = new Map()
    for(let n = 0; n < nums.length; n++){
        let need = target - nums[n]
        if(nt.has(need)) return [nt.get(need), n]
        nt.set(nums[n], n)
    }
};
