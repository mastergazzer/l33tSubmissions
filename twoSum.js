var twoSum = function(nums, target) {
    var output = []
    
    for(var i =0; i<nums.length; i++){
      for(var j =1; j<nums.length; j++){
        if(nums[i] + nums[j] == target && nums.indexOf(nums[i]) != nums.lastIndexOf(nums[j])){
            output.push(nums.indexOf(nums[i]))
            output.push(nums.lastIndexOf(nums[j]))
            console.log(output)
            return output; 
        }
      }
    }
    
};
