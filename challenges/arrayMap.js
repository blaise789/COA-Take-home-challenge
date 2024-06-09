function hasMatchingSubarraySum(array, target) {
    let startIndex = 0;
    let currentSum = 0;
    
    for (let lastIndex = 0; lastIndex < array.length; lastIndex++) {
        currentSum += array[lastIndex];
        
        // Adjust the window if the sum exceeds the target
        while (currentSum > target && startIndex <= lastIndex) {
            currentSum -= array[startIndex];
            startIndex++;
        }
        
        // Check if the current sum matches the target
        if (currentSum === target) {
            return true;
        }
    }
    
    return false;
}

//Test cases
const testArray1 = [1, 2, 5, 2, 10, ];
const targetSum1 = 17;
console.log(hasMatchingSubarraySum(testArray1, targetSum1)); // Output: true

