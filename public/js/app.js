// =============================
// SOUND EFFECTS
// =============================
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  switch(type) {
    case 'input':
      oscillator.type = 'sine';
      oscillator.frequency.value = 400;
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
      break;
    case 'correct':
      oscillator.type = 'triangle';
      oscillator.frequency.value = 523.25; // C5
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
      oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
      oscillator.stop(audioContext.currentTime + 0.5);
      break;
    case 'wrong':
      oscillator.type = 'sawtooth';
      oscillator.frequency.value = 200;
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
      break;
    case 'mistake':
      oscillator.type = 'square';
      oscillator.frequency.value = 150;
      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
      break;
    case 'victory':
      oscillator.type = 'triangle';
      oscillator.frequency.value = 523.25; // C5
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      oscillator.start(audioContext.currentTime);
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.15); // E5
      oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.3); // G5
      oscillator.frequency.setValueAtTime(1046.5, audioContext.currentTime + 0.45); // C6
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
      oscillator.stop(audioContext.currentTime + 0.8);
      break;
  }
}

// =============================
// LEVELS DATA
// =============================
const levels = [
  {
    level: 1,
    category: "INSPIRING SAY",
    solutionMap: new Map([
      [4, "D"], [15, "O"], [12, "W"], [7, "H"], [1, "A"],
      [20, "T"], [25, "Y"], [21, "U"], [22, "L"], [5, "V"], [9, "E"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 4, letter: "D", fixed: true }, { number: 15 }] },
        { type: "word", letters: [{ number: 12 }, { number: 7 }, { number: 1 }, { number: 20 }] },
        { type: "word", letters: [{ number: 25 }, { number: 15 }, { number: 21 }] }
      ],
      [
        { type: "word", letters: [{ number: 22 }, { number: 15 }, { number: 5 }, { number: 9 }], punctuation: "," },
        { type: "word", letters: [{ number: 22 }, { number: 15 }, { number: 5 }, { number: 9 }] },
        { type: "word", letters: [{ number: 12 }, { number: 7 }, { number: 1 }, { number: 20 }] }
      ],
      [
        { type: "word", letters: [{ number: 25 }, { number: 15 }, { number: 21 }] },
        { type: "word", letters: [{ number: 4, letter: "D", fixed: true }, { number: 15 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 2,
    category: "MOTIVATIONAL",
    solutionMap: new Map([
      [1, "D"], [2, "R"], [3, "E"], [4, "A"], [5, "M"],
      [6, "B"], [7, "I"], [8, "G"], [9, "N"], [10, "W"],
      [11, "O"], [12, "K"], [13, "H"], [14, "T"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "D", fixed: true }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }] },
        { type: "word", letters: [{ number: 6 }, { number: 7 }, { number: 8 }] }
      ],
      [
        { type: "word", letters: [{ number: 4 }, { number: 9 }, { number: 1 }] },
        { type: "word", letters: [{ number: 10 }, { number: 11 }, { number: 2 }, { number: 12 }] }
      ],
      [
        { type: "word", letters: [{ number: 13 }, { number: 4 }, { number: 2 }, { number: 1 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 3,
    category: "KIND WORDS",
    solutionMap: new Map([
      [1, "B"], [2, "E"], [3, "K"], [4, "I"], [5, "N"],
      [6, "D"], [7, "T"], [8, "O"], [9, "V"], [10, "R"],
      [11, "Y"], [12, "U"], [13, "M"], [14, "A"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "B", fixed: true }, { number: 2 }] },
        { type: "word", letters: [{ number: 3 }, { number: 4 }, { number: 5 }, { number: 6 }] }
      ],
      [
        { type: "word", letters: [{ number: 7 }, { number: 8 }] },
        { type: "word", letters: [{ number: 2 }, { number: 9 }, { number: 2 }, { number: 10 }, { number: 11 }, { number: 8 }, { number: 5 }, { number: 2 }] }
      ],
      [
        { type: "word", letters: [{ number: 11 }, { number: 8 }, { number: 12 }] },
        { type: "word", letters: [{ number: 13 }, { number: 2 }, { number: 2 }, { number: 7 }], punctuation: "." }
      ]
    ]
  }
];

// =============================
// GAME STATE
// =============================
let currentLevelIndex = 0;
let numberToLetter = new Map();
let inputsByNumber = new Map();
let orderedInputs = [];
let activeInput = null;
let mistakes = 0;
const maxMistakes = 3;
let gameOver = false;

// DOM Elements
const levelDisplay = document.getElementById("level-display");
const categoryDisplay = document.getElementById("category-display");
const phraseRowIds = ["phrase-row-1", "phrase-row-2", "phrase-row-3"];
const statusText = document.getElementById("status-text");
const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");
const nextLevelBtn = document.getElementById("next-level-btn");
const keyboard = document.getElementById("keyboard");
const mistakeDots = Array.from(document.querySelectorAll(".mistakes__dots span"));

function initLevel(index) {
  const levelData = levels[index];
  if (!levelData) {
    statusText.textContent = "You've completed all levels! Well done!";
    return;
  }

  // Reset state
  currentLevelIndex = index;
  numberToLetter.clear();
  inputsByNumber.clear();
  orderedInputs = [];
  activeInput = null;
  mistakes = 0;
  gameOver = false;

  // Update UI
  levelDisplay.textContent = `LEVEL ${levelData.level}`;
  categoryDisplay.textContent = levelData.category;
  statusText.textContent = "Tap a tile and start filling letters.";
  statusText.className = "status";
  nextLevelBtn.style.display = "none";
  keyboard.classList.remove("keyboard--disabled");
  updateMistakes();

  // Clear rows
  phraseRowIds.forEach(id => {
    document.getElementById(id).innerHTML = "";
  });

  // Build Board
  buildPhrase(levelData);
}

function createLetter({ number, letter, fixed, highlight }) {
  const wrapper = document.createElement("div");
  wrapper.className = "letter";

  const input = document.createElement("input");
  input.className = "letter__input";
  input.setAttribute("maxlength", "1");
  input.dataset.number = number;
  input.readOnly = true; // Use virtual keyboard/physical keys only

  if (fixed) {
    input.value = letter;
    input.disabled = true;
    numberToLetter.set(number, letter);
  }

  const numberLabel = document.createElement("span");
  numberLabel.className = highlight
    ? "letter__number letter__number--highlight"
    : "letter__number";
  numberLabel.textContent = number;

  wrapper.appendChild(input);
  wrapper.appendChild(numberLabel);

  return { wrapper, input };
}

function registerInput(number, input) {
  if (!inputsByNumber.has(number)) {
    inputsByNumber.set(number, []);
  }
  inputsByNumber.get(number).push(input);
  orderedInputs.push(input);

  input.addEventListener("click", () => setActiveInput(input));
}

function setActiveInput(input) {
  if (gameOver) return;
  orderedInputs.forEach((item) => item.classList.remove("letter__input--active"));
  activeInput = input;
  activeInput.classList.add("letter__input--active");
  playSound('input');
}

function handleInputValue(input, rawValue) {
  if (gameOver) return;
  const value = rawValue.toUpperCase();
  const number = Number(input.dataset.number);

  if (value) {
    numberToLetter.set(number, value);
    syncInputs(number, value);
    playSound('input');
    moveFocus(1);
  } else {
    numberToLetter.delete(number);
    syncInputs(number, "");
  }
}

function handleBackspace(input) {
  if (gameOver) return;
  if (input.value) {
    handleInputValue(input, "");
    return;
  }
  moveFocus(-1);
}

function syncInputs(number, value) {
  const group = inputsByNumber.get(number) || [];
  group.forEach((input) => {
    if (!input.disabled) {
      input.value = value;
    }
  });
}

function moveFocus(direction) {
  if (!activeInput) return;
  const index = orderedInputs.indexOf(activeInput);
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= orderedInputs.length) return;
  const nextInput = orderedInputs[nextIndex];
  setActiveInput(nextInput);
}

function buildPhrase(levelData) {
  levelData.phraseRows.forEach((row, rowIndex) => {
    const container = document.getElementById(phraseRowIds[rowIndex]);
    row.forEach((wordData) => {
      const word = document.createElement("div");
      word.className = "word";

      wordData.letters.forEach((letterData) => {
        const { wrapper, input } = createLetter({
          number: letterData.number,
          letter: letterData.letter,
          fixed: letterData.fixed,
          highlight: letterData.fixed
        });
        word.appendChild(wrapper);
        if (!letterData.fixed) {
          registerInput(letterData.number, input);
        }
      });

      if (wordData.punctuation) {
        const punctuation = document.createElement("span");
        punctuation.textContent = wordData.punctuation;
        punctuation.className = "punctuation";
        word.appendChild(punctuation);
      }

      container.appendChild(word);
    });
  });

  if (orderedInputs.length) {
    setActiveInput(orderedInputs[0]);
  }
}

function updateMistakes() {
  mistakeDots.forEach((dot, index) => {
    dot.classList.toggle("mistake--active", index < mistakes);
  });
}

function isSolutionComplete() {
  const levelData = levels[currentLevelIndex];
  for (const [number, letter] of levelData.solutionMap.entries()) {
    if ((numberToLetter.get(number) || "") !== letter) {
      return false;
    }
  }
  return true;
}

function checkAnswers() {
  if (gameOver) return;

  if (isSolutionComplete()) {
    statusText.textContent = "Amazing! You decrypted the full phrase!";
    statusText.className = "status status--success";
    playSound('victory');
    endGame(true);
    return;
  }

  mistakes += 1;
  updateMistakes();
  playSound('mistake');

  if (mistakes >= maxMistakes) {
    statusText.textContent = "Out of tries! Reset to play again.";
    statusText.className = "status status--warn";
    playSound('wrong');
    endGame(false);
    return;
  }

  statusText.textContent = `Not quite! Mistake ${mistakes} of ${maxMistakes}.`;
  statusText.className = "status status--warn";
}

function endGame(win) {
  gameOver = true;
  orderedInputs.forEach((input) => {
    input.classList.remove("letter__input--active");
  });
  keyboard.classList.add("keyboard--disabled");
  activeInput = null;
  
  if (win) {
    if (currentLevelIndex < levels.length - 1) {
      nextLevelBtn.style.display = "block";
    } else {
      statusText.textContent = "GAME COMPLETE! You're a Master Decrypter!";
    }
  }
}

function resetBoard() {
  initLevel(currentLevelIndex);
}

function handleKeyboardClick(event) {
  const key = event.target.closest(".key");
  if (!key || gameOver) return;

  const action = key.dataset.action;
  if (action === "backspace") {
    if (activeInput) {
      handleBackspace(activeInput);
    }
    return;
  }
  if (action === "enter") {
    checkAnswers();
    return;
  }

  const letter = key.dataset.key;
  if (!letter || !activeInput) return;
  handleInputValue(activeInput, letter);
}

function handlePhysicalKey(event) {
  if (gameOver || !activeInput) return;
  const key = event.key.toUpperCase();
  if (key === "ENTER") {
    event.preventDefault();
    checkAnswers();
    return;
  }
  if (key === "BACKSPACE") {
    event.preventDefault();
    handleBackspace(activeInput);
    return;
  }
  if (/^[A-Z]$/.test(key)) {
    event.preventDefault();
    handleInputValue(activeInput, key);
  }
}

checkBtn.addEventListener("click", checkAnswers);
resetBtn.addEventListener("click", resetBoard);
nextLevelBtn.addEventListener("click", () => initLevel(currentLevelIndex + 1));
keyboard.addEventListener("click", handleKeyboardClick);
document.addEventListener("keydown", handlePhysicalKey);

// Start game
initLevel(0);
