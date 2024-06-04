/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let i=0;
    let j=0;
    let count=0;
    let max=Number.NEGATIVE_INFINITY
    while(j<nums.length){
        if(nums[j]===0){
            count++;
        }
        if(count<=1){
            j++;
        }
        if(count>1){
            max = Math.max(max,j-i-1)
            count=1;
            while(nums[i]!==0){
                i++;
            }
            i++;
            j++;
        }
    }
    max = Math.max(max,j-i-1)
    return max;
};

const ans = longestSubarray([1,1,1])
console.log(ans)