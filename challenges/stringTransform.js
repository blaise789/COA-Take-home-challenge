function transformString(word) {
    const length = word.length;

    if (length % 15 === 0) {
        // Reverse the string and then replace each character with its ASCII code
        return word.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        return word.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Reverse the string
        return word.split('').reverse().join('');
    } else {
        // Return the string as is
        return word;
    }
}

// Test cases
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
