function removeElement(nums,num){
    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        if (el===num) {
            nums.splice(i,1)
            i--
        }
        
    }
    return nums
}
console.log(removeElement([3,2,2,3],3))