// Get the elements you' ll need from your Html.

const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
let missed = 0;

// Attach a event listener to the "Start Game" button to hide the start screen overlay.

const startGame = document.querySelector(".btn__reset")
startGame.addEventListener("click", (e) => {overlay.style.display = 'none';});

// Create a "phrases" array that contains at least 5 different phrases as strings.

const phrases = [
    'the way to get started is to quit talking and begin doing',
    'you must be the change you wish to see in the world',
    'if you can dream it you can do it',
    'it is never too late to be what you want to be',
    'the bad news is time flies'
];

// Create a getRandomPgrasesAsArray function

function getRandomPhraseAsArray(arr) {
    const randomPhrase = Math.floor(Math.random() * arr.length);
    let phrase = arr[randomPhrase];  
    return phrase.split('');
};

// Set the game display.

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        const phrase = document.getElementById("phrase");
        const ul = phrase.children[0];
        li.textContent = arr[i];
        ul.appendChild(li);
        if ( arr[i] !== " " ) {
            li.className = "letter";
        } else {
            li.classNmae = "space";
        }
    }
};





