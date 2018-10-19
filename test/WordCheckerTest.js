import WordChecker from '../code/WordChecker.js';
import BetterStringHasher from '../code/BetterStringHasher.js';
import WordList from '../code/WordList.js';

let assert = require('chai').assert;

describe("WordChecker", () => {
    const bst = new BetterStringHasher();
    const wordList = new WordList(bst);
    const wordChecker = new WordChecker(wordList);

    describe("getSuggestions method", () => {
        it("Gives suggestion when one letter is wrong", () => {
            const result = wordChecker.getSuggestions("ufternoon");
            const expectedResult = ["afternoon"];
            assert.deepEqual(result, expectedResult);
        });
        it("Gives suggestion when the word has other variants", () => {
            const result = wordChecker.getSuggestions("afternoon");
            const expectedResult = ["afternoons", "after noon"];
            assert.deepEqual(result, expectedResult);
        });
        it("Returns empty result when input is empty", () => {
            const result = wordChecker.getSuggestions("");
            const expectedResult = [];
            assert.deepEqual(result, expectedResult);
        });
        it("Gives suggestion when one of letters is number", () => {
            const result = wordChecker.getSuggestions("1ne");
            const expectedResult = ["one"];
            assert.deepEqual(result, expectedResult);
        });
    });

    describe("getSuggestionsBySwappingAdjacentPair method", () => {
        it("Swaps pairs of letters and doesn't give word itself if two swapped letters are same", () => {
            const result = wordChecker.getSuggestionsBySwappingAdjacentPair("afternoon");
            const expectedResult = [];
            assert.deepEqual(result, expectedResult);
        });
    });




});