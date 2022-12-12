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
        const ul = phrase.children[0];
        li.textContent = arr[i];
        ul.appendChild(li);
        if (arr[i] === " ") {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


// Create a checkLetter function

function checkLetter(button) {
    const letters = document.getElementsByClassName('letter');
    let matchingLetter = null;
    for(let i = 0; i<letters.length; i++) {
        if(letters[i].textContent === button.textContent) {
            letters[i].classList.add('show');
            matchingLetter = button.textContent;
        }
    }
    return matchingLetter;
}

// Add a event listener to the keyboard

qwerty.addEventListener('click', (e) => {
    const chosenButton = e.target;
    if (chosenButton.tagName === 'BUTTON' && chosenButton.className !== 'chosen') {
        chosenButton.className = 'chosen';
        const letterFound = checkLetter(chosenButton);
        if(!letterFound) {
            const heartImages = document.getElementsByTagName('img');
            for (let i = 0; i < heartImages.length; i++) {
                if ( heartImages[i].src === "images/lostHeart.png") {
                   heartImages[i].className = 'died';
                }
            }
            const lostHeart = document.querySelector('img:not(.died)');
            lostHeart.src = 'images/lostHeart.png';
            lostHeart.className = 'died';
            missed++;
        }
    }
});

//checkWin function

function checkWin(){
    const letter =document.getElementsByClassName('letter');
    const show =document.getElementsByClassName('show');
    const message =document.getElementsByClassName('title');
    if(letter.length ===show.length){
        overlay.classList.add('win');
        message[0].textContent ='CONGRATULATIONS, YOU GOT IT!!!';
        overlay.style.display ='flex';
    } else if(missed > 4){
        overlay.classList.add('lose');
        message[0].textContent ='Maybe next time...';
        overlay.style.display ='flex';
    }       
}

qwerty.addEventListener('click', checkWin);
    