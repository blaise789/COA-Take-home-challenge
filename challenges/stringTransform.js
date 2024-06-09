function transformString(inputWord) {
    const wordLength = inputWord.length;

    if (wordLength % 15 === 0) {
        // Reverse the string and replace each character with its ASCII code
        return inputWord.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (wordLength % 5 === 0) {
        // Replace each character with its ASCII code
        return inputWord.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (wordLength % 3 === 0) {
        // Reverse the string
        return inputWord.split('').reverse().join('');
    } else {
        // Return the string as is
        return inputWord;
    }
}

// Function usage and Testing of its results
const testWord4 = "bigman";  //Output:namgib
console.log(transformString(testWord4)); // Output: "hcniw dnaS"

const testWord5 = "Salad";
console.log(transformString(testWord5)); // Output: "83 97 108 97 100"

