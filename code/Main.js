import SpellCheck from './SpellCheck.js';

const inputElement = document.getElementById("myInputs");
const suggestions = document.getElementById("suggestions");
const testTimeDiv = document.getElementById("test_time");

const spellCheck = new SpellCheck();

window.addEventListener("load", function(event) {
    testTimeDiv.innerHTML = spellCheck.provideBetterTest() + "<br>";
    testTimeDiv.innerHTML += spellCheck.provideLousyTest() + "<br>";
});

inputElement.addEventListener("keyup", function(event) {
    let word = this.value;
    let wordsArray = spellCheck.giveSuggestion(word);
    suggestions.innerHTML = presentResult(wordsArray);
});


function presentResult(wordsArray) {
    let resultString = "";
    for(let word of wordsArray) {
        resultString += word + "<br>";
    }
    return resultString;
}

