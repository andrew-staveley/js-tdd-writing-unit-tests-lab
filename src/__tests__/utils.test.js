import { isPalindrome } from "../utils"

describe("isPalindrome", () => {
    it("returns true if a word is a palindrome", () => {
        const word = "racecar"
        const answer = isPalindrome(word)
        expect(answer).toBe(true)
    })

    it("returns false is a word is not a palindrome", () => {
        const word = "frankocean"
        const answer = isPalindrome(word)
        expect(answer).toBe(false)
    })
    
    it("returns false for one letter inputs", () => {
        const word = "a"
        const answer = isPalindrome(word)
        expect(answer).toBe(false)
    })

    it("is not case sensitive", () => {
        const word = "TaCoCat"
        const answer = isPalindrome(word)
        expect(answer).toBe(true)
    })

    it("returns false for empty strings", () => {
        const word = ""
        const answer = isPalindrome(word)
        expect(answer).toBe(false)
    })
})
