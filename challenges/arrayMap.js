function hasMatchingSubarraySum(array, target) {
    let startIndex = 0;
    let currentSum = 0;
    
    for (let endIndex = 0; endIndex < array.length; endIndex++) {
        currentSum += array[endIndex];
        
        // Adjust the window if the sum exceeds the target
        while (currentSum > target && startIndex <= endIndex) {
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

//Function Test Cases
const testArray1 = [4, 2, 7, 1, 9, 5];
const targetSum1 = 17;
console.log(hasMatchingSubarraySum(testArray1, targetSum1)); // Output: true

