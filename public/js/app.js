const phraseRows = [
  [
    { type: "word", letters: [
      { number: 4, letter: "D", fixed: true },
      { number: 15 },
      { number: 7 }
    ] },
    { type: "word", letters: [
      { number: 12 },
      { number: 7 },
      { number: 1 },
      { number: 20 }
    ] },
    { type: "word", letters: [
      { number: 25 },
      { number: 15 },
      { number: 21 }
    ] }
  ],
  [
    { type: "word", letters: [
      { number: 12 },
      { number: 15 },
      { number: 22 },
      { number: 5 }
    ], punctuation: "," },
    { type: "word", letters: [
      { number: 12 },
      { number: 15 },
      { number: 22 },
      { number: 5 }
    ] },
    { type: "word", letters: [
      { number: 23 },
      { number: 9 },
      { number: 12 },
      { number: 7 }
    ] },
    { type: "word", letters: [
      { number: 20 }
    ] }
  ],
  [
    { type: "word", letters: [
      { number: 25 },
      { number: 15 },
      { number: 21 }
    ] },
    { type: "word", letters: [
      { number: 4, letter: "D", fixed: true }
    ], punctuation: "." }
  ]
];

const numberToLetter = new Map();
const inputsByNumber = new Map();

const phraseRowIds = ["phrase-row-1", "phrase-row-2", "phrase-row-3"];
const statusText = document.getElementById("status-text");
const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");

function createLetter({ number, letter, fixed, highlight }) {
  const wrapper = document.createElement("div");
  wrapper.className = "letter";

  const input = document.createElement("input");
  input.className = "letter__input";
  input.setAttribute("maxlength", "1");
  input.dataset.number = number;

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

  input.addEventListener("input", () => {
    const value = input.value.toUpperCase();
    input.value = value;
    if (value) {
      numberToLetter.set(number, value);
      syncInputs(number, value);
    } else {
      numberToLetter.delete(number);
      syncInputs(number, "");
    }
  });
}

function syncInputs(number, value) {
  const group = inputsByNumber.get(number) || [];
  group.forEach((input) => {
    if (!input.disabled) {
      input.value = value;
    }
  });
}

function buildPhrase() {
  phraseRows.forEach((row, rowIndex) => {
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
}

function checkAnswers() {
  statusText.textContent = "Nice work! Keep decoding the phrase.";
  statusText.className = "status status--success";
}

function resetBoard() {
  numberToLetter.clear();
  inputsByNumber.forEach((inputs) => {
    inputs.forEach((input) => {
      input.value = "";
    });
  });
  statusText.textContent = "Board reset. Try again!";
  statusText.className = "status";
}

checkBtn.addEventListener("click", checkAnswers);
resetBtn.addEventListener("click", resetBoard);

buildPhrase();
