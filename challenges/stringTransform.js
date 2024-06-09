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
// Test cases
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"