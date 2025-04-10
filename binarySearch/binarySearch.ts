function search(nums: number[], target: number): number {
    let low = 0
    let high = nums.length - 1
    let mid = Math.floor((low + high)/2)

    while(low <= high) {
        console.log(low, mid, high)
        if(nums[mid] == target) return mid

        if(nums[mid] < target){
            low = mid +1
        } else {
            high = mid-1
        }
        mid = Math.floor((low + high)/2)
    } 
    return -1
};
