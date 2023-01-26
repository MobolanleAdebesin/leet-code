// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order. 

var twoSum = function(nums, target) {
    let p1 = 0; 
    let p2 = nums.length - 1; 
    let sum; 
    while(p2 > 0){
        if(p1 === p2){
            p1 = 0; 
            p2 = p2-1; 
        }
        sum = nums[p1] + nums[p2]; 
        if(sum === target)return [p1, p2]; 
        p1++; 
    }
};


var twoSumRefactor = function(nums, target){
    // Make a copy of the nums array (using .slice()) called sortedNums and use built in sorting method. 
    // Define variables 
    let sortedNums = nums.slice(0).sort((a,b) => a-b), 
        start = 0, 
        end = nums.length - 1, 
        dict = {}, 
        sum,
        value, 
        num1,
        num2; 
    // create a dictionary that keeps track of the original indices and values in nums
    for(let index in nums){
        value = nums[index]
        if(!dict[value]) dict[value] = [index]; 
        else dict[value].push(index); 
    }
    // Start pointers start at beginning and end at the end of the sortedNums array. 
    // If the sum is equal to the target we are done 
    // If the sum is less than the target increment start
    // If the sum is more than the target increment end 
    
    while(start < end){
        num1 = sortedNums[start];
        num2 = sortedNums[end];
        sum =  num1 + num2; 
        if(sum === target){
            if(dict[num1].length > 1) return [dict[num1][0], dict[num1][1]]
            return [dict[num1][0], dict[num2][0]]; 
        }
        if(sum < target)start++ 
        else end--
    }
}