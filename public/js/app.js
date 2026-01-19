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
let points = 100;
let inputsByNumber = new Map();
let orderedInputs = [];
let activeInput = null;
let mistakes = 0;
const maxMistakes = 3;
let gameOver = false;

// DOM Elements
const levelDisplay = document.getElementById("level-display");
const categoryDisplay = document.getElementById("category-display");
const pointsDisplay = document.getElementById("points-display");
const phraseRowIds = ["phrase-row-1", "phrase-row-2", "phrase-row-3"];
const statusText = document.getElementById("status-text");
const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");
const nextLevelBtn = document.getElementById("next-level-btn");
const hintBtn = document.getElementById("hint-btn");
const keyboard = document.getElementById("keyboard");
const mistakeDots = Array.from(document.querySelectorAll(".mistakes__dots span"));

function initLevel(index) {
  const levelData = levels[index];
  if (!levelData) {
    statusText.textContent = "You've completed all levels! Well done!";
    return;
  }

  // Reset level state
  currentLevelIndex = index;
  inputsByNumber.clear();
  orderedInputs = [];
  activeInput = null;
  mistakes = 0;
  gameOver = false;

  // Update UI
  levelDisplay.textContent = `LEVEL ${levelData.level}`;
  categoryDisplay.textContent = levelData.category;
  updatePoints(0); // Refresh display
  statusText.textContent = "Tap a tile and start filling letters.";
  statusText.className = "status";
  nextLevelBtn.style.display = "none";
  keyboard.classList.remove("keyboard--disabled");
  updateMistakes();

  // Clear rows
  phraseRowIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = "";
  });

  // Build Board
  buildPhrase(levelData);
}

function updatePoints(amount) {
  points += amount;
  if (points < 0) points = 0;
  pointsDisplay.textContent = points;
}

function createLetter({ number, letter, fixed, highlight }) {
  const wrapper = document.createElement("div");
  wrapper.className = "letter";

  const input = document.createElement("input");
  input.className = "letter__input";
  input.setAttribute("maxlength", "1");
  input.dataset.number = number;
  input.readOnly = true; 

  if (fixed) {
    input.value = letter;
    input.disabled = true;
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
  orderedInputs.forEach((item) => {
    item.classList.remove("letter__input--active");
    item.classList.remove("letter__input--active-error");
  });
  activeInput = input;
  activeInput.classList.add("letter__input--active");
  playSound('input');
}

function handleInputValue(input, rawValue) {
  if (gameOver || !input) return;
  const value = rawValue.toUpperCase();
  if (!value) return;

  const number = Number(input.dataset.number);
  const levelData = levels[currentLevelIndex];
  const correctLetter = levelData.solutionMap.get(number);

  if (value === correctLetter) {
    // Correct guess - ONLY fill this cell (User must fill others manually)
    input.value = value;
    playSound('correct');
    updatePoints(5); // Small reward for correct guess
    
    if (isSolutionComplete()) {
      statusText.textContent = "Amazing! You decrypted the full phrase!";
      statusText.className = "status status--success";
      updatePoints(50); // Bonus for finishing level
      playSound('victory');
      endGame(true);
    } else {
      statusText.textContent = "Correct! Keep going.";
      statusText.className = "status";
      moveFocus(1);
    }
  } else {
    // Wrong guess
    mistakes += 1;
    updatePoints(-10); // Penalty for mistake
    updateMistakes();
    playSound('mistake');
    
    // Immediate visual feedback for error
    input.value = value;
    input.classList.remove("letter__input--active");
    input.classList.add("letter__input--active-error");
    
    setTimeout(() => {
      input.classList.remove("letter__input--active-error");
      input.value = ""; // Clear the wrong letter
      if (!gameOver) {
        input.classList.add("letter__input--active");
      }
    }, 400);

    if (mistakes >= maxMistakes) {
      statusText.textContent = "Out of tries! Reset to play again.";
      statusText.className = "status status--warn";
      playSound('wrong');
      endGame(false);
    } else {
      statusText.textContent = `Not that letter! Mistake ${mistakes} of ${maxMistakes}.`;
      statusText.className = "status status--warn";
    }
  }
}

function handleHint() {
  if (gameOver || points < 20) {
    if (points < 20) {
      statusText.textContent = "Not enough points for a hint!";
      statusText.className = "status status--warn";
    }
    return;
  }

  const levelData = levels[currentLevelIndex];
  const emptyInputs = orderedInputs.filter(input => !input.value);
  
  if (emptyInputs.length === 0) return;

  // Pick a random empty input
  const randomInput = emptyInputs[Math.floor(Math.random() * emptyInputs.length)];
  const number = Number(randomInput.dataset.number);
  const correctLetter = levelData.solutionMap.get(number);

  // Apply hint
  updatePoints(-20);
  randomInput.value = correctLetter;
  playSound('correct');
  statusText.textContent = "Hint revealed!";

  if (isSolutionComplete()) {
    statusText.textContent = "Amazing! You decrypted the full phrase!";
    statusText.className = "status status--success";
    playSound('victory');
    endGame(true);
  }
}

function moveFocus(direction) {
  if (!activeInput) return;
  const index = orderedInputs.indexOf(activeInput);
  
  // Find next non-filled input
  let nextIndex = index + direction;
  while (nextIndex >= 0 && nextIndex < orderedInputs.length) {
    const nextInput = orderedInputs[nextIndex];
    if (!nextInput.value) {
      setActiveInput(nextInput);
      return;
    }
    nextIndex += direction;
  }
}

function buildPhrase(levelData) {
  levelData.phraseRows.forEach((row, rowIndex) => {
    const container = document.getElementById(phraseRowIds[rowIndex]);
    if (!container) return;

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

  // Set first empty input as active
  const firstEmpty = orderedInputs.find(input => !input.value);
  if (firstEmpty) {
    setActiveInput(firstEmpty);
  }
}

function updateMistakes() {
  mistakeDots.forEach((dot, index) => {
    dot.classList.toggle("mistake--active", index < mistakes);
  });
}

function isSolutionComplete() {
  const levelData = levels[currentLevelIndex];
  for (const input of orderedInputs) {
    const number = Number(input.dataset.number);
    const correctLetter = levelData.solutionMap.get(number);
    if (input.value !== correctLetter) {
        return false;
    }
  }
  return true;
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
        activeInput.value = "";
    }
    return;
  }
  if (action === "enter") {
    if (isSolutionComplete() && currentLevelIndex < levels.length - 1) {
        initLevel(currentLevelIndex + 1);
    }
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
    if (isSolutionComplete() && currentLevelIndex < levels.length - 1) {
        initLevel(currentLevelIndex + 1);
    }
    return;
  }
  if (key === "BACKSPACE") {
    event.preventDefault();
    activeInput.value = "";
    return;
  }
  if (/^[A-Z]$/.test(key)) {
    event.preventDefault();
    handleInputValue(activeInput, key);
  }
}

// Events
checkBtn.addEventListener("click", () => {
    if (isSolutionComplete()) {
        if (currentLevelIndex < levels.length - 1) {
            initLevel(currentLevelIndex + 1);
        }
    } else {
        statusText.textContent = "Fill in the correct letters first!";
    }
});
resetBtn.addEventListener("click", resetBoard);
nextLevelBtn.addEventListener("click", () => initLevel(currentLevelIndex + 1));
hintBtn.addEventListener("click", handleHint);
keyboard.addEventListener("click", handleKeyboardClick);
document.addEventListener("keydown", handlePhysicalKey);

// Start game
initLevel(0);
