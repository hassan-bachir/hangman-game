


const dictionary1 = {
  langs: ["python","javascript","mongodb","json","java","html","css","c","csharp","golang","kotlin","php","sql","ruby"],
  fruits : ["apple", "banana", "orange", "kiwi", "mango"],
  cities : ["New York", "London", "Paris", "Tokyo", "Sydney", "Dubai", "Rome"]

}

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  const keys = Object.keys(dictionary1); 
  const randomKey = keys[Math.floor(Math.random() * keys.length)]; 
  const randomWord = dictionary1[randomKey][Math.floor(Math.random() * dictionary1[randomKey].length)]; 
   cat1 = randomKey;
  answer = randomWord;
}
function changeText() {

  const textAbove = document.getElementById('textAbove')
  if (cat1 =='langs') {
      textAbove.textContent = "guess a programming language"
      
  }else if (cat1 =='fruits'){
      textAbove.textContent = "guess a fruit"
  }else {
      textAbove.textContent = "guess a city"
  }

}

  
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="keys"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }


  
function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
  
    if (answer.indexOf(chosenLetter) >= 0) {
      guessedWord();
      checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
      mistakes++;
      updateMistakes();
      checkIfGameLost();
      updateHangmanPicture();
    }
  }

  function updateHangmanPicture() {
    document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
  }
  
  
function checkIfGameWon() {
    if (wordStatus === answer) {
      document.getElementById('keyboard').innerHTML = 'You Won!!!';
    }
  }
  

  function checkIfGameLost() {
    if (mistakes === maxWrong) {
      document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
      document.getElementById('keyboard').innerHTML = 'You Lost!!!';
    }}


  function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
  }


  function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
  }
  
  
function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.jpg';
  
    randomWord();
    changeText();
    guessedWord();
    updateMistakes();
    generateButtons();
  }
  

  document.getElementById('maxWrong').innerHTML = maxWrong;

  randomWord();
  changeText();
  generateButtons();
  guessedWord();