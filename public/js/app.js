const puzzleRows = [
  [
    { number: 4, letter: "D", fixed: true },
    { number: 1 },
    { number: 18 },
    { number: 5 },
    { spacer: true },
    { number: 7 },
    { number: 18 },
    { number: 5 },
    { number: 1 },
    { number: 20 },
    { number: 12 },
    { number: 25 }
  ],
  [
    { number: 1 },
    { number: 14 },
    { number: 4, letter: "D", fixed: true },
    { spacer: true },
    { number: 19 },
    { number: 5 },
    { number: 5 },
    { spacer: true },
    { number: 23 },
    { number: 8 },
    { number: 1 },
    { number: 20 }
  ],
  [
    { number: 21 },
    { number: 14 },
    { number: 6 },
    { number: 15 },
    { number: 12 },
    { number: 4, letter: "D", fixed: true },
    { number: 19 }
  ]
];

const clueData = [
  {
    clue: "Not a cat",
    answer: "DOG",
    numbers: [4, 15, 7]
  },
  {
    clue: "Not big",
    answer: "SMALL",
    numbers: [19, 13, 1, 12, 12]
  },
  {
    clue: "Not a girl",
    answer: "BOY",
    numbers: [2, 15, 25]
  },
  {
    clue: "Not happy",
    answer: "SAD",
    numbers: [19, 1, 4]
  },
  {
    clue: "Not hot",
    answer: "COLD",
    numbers: [3, 15, 12, 4]
  }
];

const numberToLetter = new Map();
const inputsByNumber = new Map();

const puzzleContainerIds = ["puzzle-row-1", "puzzle-row-2", "puzzle-row-3"];
const clueList = document.getElementById("clue-list");
const statusText = document.getElementById("status-text");
const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");

function createTile({ number, letter, fixed, highlight }) {
  const token = document.createElement("div");
  token.className = "token";

  const tile = document.createElement("div");
  tile.className = fixed ? "tile tile--fixed" : "tile";

  const input = document.createElement("input");
  input.setAttribute("maxlength", "1");
  input.dataset.number = number;

  if (fixed) {
    input.value = letter;
    input.disabled = true;
  }

  tile.appendChild(input);

  const numberLabel = document.createElement("span");
  numberLabel.className = highlight
    ? "token__number token__number--highlight"
    : "token__number";
  numberLabel.textContent = number;

  token.appendChild(tile);
  token.appendChild(numberLabel);

  return { token, input };
}

function createSpacer() {
  const spacer = document.createElement("div");
  spacer.className = "token";
  spacer.innerHTML = "<div class=\"tile tile--empty\"></div>";
  return spacer;
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

function buildPuzzle() {
  puzzleRows.forEach((row, rowIndex) => {
    const container = document.getElementById(puzzleContainerIds[rowIndex]);
    row.forEach((cell) => {
      if (cell.spacer) {
        container.appendChild(createSpacer());
        return;
      }
      const { token, input } = createTile({
        number: cell.number,
        letter: cell.letter,
        fixed: cell.fixed,
        highlight: cell.fixed
      });
      container.appendChild(token);
      if (!cell.fixed) {
        registerInput(cell.number, input);
      }
    });
  });
}

function buildClues() {
  clueData.forEach((clue) => {
    const wrapper = document.createElement("div");
    wrapper.className = "clue";

    const label = document.createElement("div");
    label.className = "clue__label";
    label.textContent = clue.clue;

    const tiles = document.createElement("div");
    tiles.className = "clue__tiles";

    clue.numbers.forEach((number, index) => {
      const isFixed = number === 4 && clue.answer[index] === "D";
      const { token, input } = createTile({
        number,
        letter: isFixed ? "D" : "",
        fixed: isFixed,
        highlight: number === 4
      });
      tiles.appendChild(token);
      if (!isFixed) {
        registerInput(number, input);
      }
    });

    wrapper.appendChild(label);
    wrapper.appendChild(tiles);
    clueList.appendChild(wrapper);
  });
}

function checkAnswers() {
  let correct = 0;
  let total = 0;

  clueData.forEach((clue) => {
    clue.numbers.forEach((number, index) => {
      const expected = clue.answer[index];
      const actual = numberToLetter.get(number) || "";
      if (expected === actual) {
        correct += 1;
      }
      total += 1;
    });
  });

  if (correct === total) {
    statusText.textContent = "Awesome! You cracked every clue!";
    statusText.className = "status status--success";
    return;
  }

  statusText.textContent = `You have ${correct} of ${total} letters correct. Keep going!`;
  statusText.className = "status status--warn";
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

buildPuzzle();
buildClues();
