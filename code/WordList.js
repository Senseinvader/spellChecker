import Dictionary from './Dictionary.js';
import HashTable from './HashTable.js';

export default class WordList {

    constructor (stringHasher) {
        this.dictionary = new Dictionary();
        this.tableSize = Math.floor(this.dictionary.getDictionarySize() * 1.2);
        this.wordList = this.dictionary.getDictionaryArray();
        this.hashTable = new HashTable(this.tableSize, stringHasher);
        this.addWordsToHashTable(this.wordList);
    }

    lookup(word) {
        return this.hashTable.lookup(word.toLowerCase());
    }

    addWordsToHashTable(wordList) {
        for (let i = 0; i < wordList.length; i++) {
            this.hashTable.add(wordList[i]);
        }
    }
}