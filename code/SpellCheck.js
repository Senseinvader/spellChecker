import WordList from './WordList.js';
import WordChecker from './WordChecker.js';
import DegenerateStringHasher from './DegenerateStringHasher.js';
import LousyStringHasher from './LousyStringHasher.js';
import BetterStringHasher from './BetterStringHasher.js';
import TestWords from './TestWords.js';

export default class SpellChecker {

  constructor() {
    this.testWords = new TestWords();
  }

  prepareDegenerateTest() {
    const dsh = new DegenerateStringHasher();
    const degenerateWordListObject = new WordList(dsh);
    return new WordChecker(degenerateWordListObject);
  }
  prepareLousyTest() {
    const lsh = new LousyStringHasher();
    const lousyWordListObject = new WordList(lsh);
    return new WordChecker(lousyWordListObject);
  }
  prepareBetterTest() {
    const bsh = new BetterStringHasher(); 
    const betterWordListObject = new WordList(bsh);
    return new WordChecker(betterWordListObject);
  }

  provideBetterTest () {
    let beforeFirst = Date.now();
    this.prepareBetterTest().checkAllWords(this.testWords.getTestWordsArray());
    let afterFirst = Date.now();
    let firstTime = afterFirst - beforeFirst;
    console.log("Better hasher search: " + firstTime/1000);
    return "Better hasher search: " + firstTime/1000;
  }

  provideLousyTest() {
    let beforeSecond = Date.now();
    this.prepareLousyTest().checkAllWords(this.testWords.getTestWordsArray());
    let afterSecond = Date.now();
    let secondTime = afterSecond - beforeSecond;
    console.log("Lousy hasher search: " + secondTime/1000);
    return "Lousy hasher search: " + secondTime/1000;
  }

  giveSuggestion(word) {
    return this.prepareBetterTest().getSuggestions(word);
  }

}