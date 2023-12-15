export function isPalindrome(inputWord) {
    if (inputWord.length <= 1) {
        return false;
    } else {
        const wordArray = inputWord.toLowerCase().split("")
        let arrayLength = wordArray.length / 2
        let y = Math.floor(arrayLength)
        const wordPartOne = wordArray.slice(0, y).join("")
        const wordPartTwo = wordArray.slice(-y).reverse().join("")
        return (wordPartOne === wordPartTwo)
    }
}
