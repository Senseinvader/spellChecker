/* Implement your word checker here.  A word checker has two responsibilities:
 * given a word list, answer the questions "Is the word 'x' in the wordlist?"
 * and "What are some suggestions for the misspelled word 'x'?"
 *
 * WordChecker uses a class called WordList that I haven't provided the source
 * code for.  WordList has only one method that you'll ever need to call:
 *
 *     public boolean lookup(String word)
 *
 * which returns true if the given word is in the WordList and false if not.
 */

export default class WordChecker {
	/**
   * Constructor that initializes a new WordChecker with a given WordList.
   *
   * @param wordList Initial word list to check against.
   * @see WordList
   */
	constructor(wordList) {
    this.wordList = wordList;
	}
	

	/**
   * Returns true if the given word is in the WordList passed to the
   * constructor, false otherwise. 
   *
   * @param word Word to chack against the internal word list
   * @return bollean indicating if the word was found or not.
   */
	wordExists(word){

	}

  checkAllWords(words) {
    for(let word of words) {
      this.getSuggestions(word);
    }
    console.log("done");
  }

	/**
   * Returns an ArrayList of Strings containing the suggestions for the
   * given word.  If there are no suggestions for the given word, an empty
   * ArrayList of Strings (not null!) should be returned.
   *
   * @param word String to check against
   * @return A list of plausible matches
   */
	getSuggestions(word){
    let currentWordArray = [];
    if (word.length === 0) return [];
    currentWordArray = currentWordArray.concat(this.deleteByOneLetter(word));
    currentWordArray = currentWordArray.concat(this.replaceEveryLetterWithOtherLetter(word));
    currentWordArray = currentWordArray.concat(this.splitIntoTwoWords(word));
    currentWordArray = currentWordArray.concat(this.getSuggestionsByInsertingLetter(word));
    currentWordArray = currentWordArray.concat(this.getSuggestionsBySwappingAdjacentPair(word));
    return currentWordArray;
  }

  deleteByOneLetter(word) {
    let currentWordArray = [];
    for (let i=0; i < word.length; i++) {
      let newArray = word.split("");
      newArray.splice(i,1);
      if (this.wordList.lookup(newArray.join(""))) {
        currentWordArray.push(newArray.join(""));
      }
    }
    return currentWordArray;
  }

  replaceEveryLetterWithOtherLetter(word) {
    let currentWordArray = [];
    const FIRST_LETTER_INDEX = 97;
    const LAST_LETTER_INDEX = 122;
    for (let i=0; i <= word.length; i++) {
      let newArray = word.split("");
      for (let cc = FIRST_LETTER_INDEX; cc <= LAST_LETTER_INDEX; cc++) {
        newArray[i] = String.fromCharCode(cc);
        if (this.wordList.lookup(newArray.join("")) && !currentWordArray.includes(newArray.join("")) && newArray.join("") != word) {
          currentWordArray.push(newArray.join(""));
        }
      }
    }
    return currentWordArray;
  }

  splitIntoTwoWords(word) {
    let currentWordArray = [];
    for (let i=1; i < word.length-1; i++) {
      let subWordArray1 = word.split("");
      let subWordArray2 = subWordArray1.splice(0, i);
      if (this.wordList.lookup(subWordArray1.join("")) && this.wordList.lookup(subWordArray2.join(""))) {
        currentWordArray.push(subWordArray2.join("") + " " + subWordArray1.join(""));
      }
    }
    return currentWordArray;
  }

  getSuggestionsBySwappingAdjacentPair(word) {
		let suggestionList = [];
		let currentWord = word.toUpperCase();
		for (let i = 1; i < currentWord.length; i++) {
			let charArray = currentWord.split('');
			let tempChar = charArray[i];
			charArray[i] = charArray[i - 1];
			charArray[i - 1] = tempChar;
			if (this.wordExists(charArray.join('')) == true && charArray.join('') != word) {
				suggestionList.push(charArray.join(''));
			}
		}

		return suggestionList;
	}

	getSuggestionsByInsertingLetter(word) {
		let suggestionList = [];
		for (let i = 0; i <= word.length; i++) {
			for (let j = 97; j < 123; j++) {
				let charArray = word.toUpperCase().split('');
				charArray.splice(i, 0, String.fromCharCode(j).toUpperCase());
				if (this.wordExists(charArray.join('')) == true) {
					suggestionList.push(charArray.join(''));
				}
			}
		}

		return suggestionList;
	}
  

}
