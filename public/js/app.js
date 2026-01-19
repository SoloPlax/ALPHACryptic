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
  },
  {
    level: 4,
    category: "WISDOM",
    solutionMap: new Map([
      [1, "L"], [2, "I"], [3, "V"], [4, "E"], [5, "W"],
      [6, "E"], [7, "L"], [8, "A"], [9, "U"], [10, "G"], [11, "H"], [12, "O"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "L", fixed: true }, { number: 2 }, { number: 3 }, { number: 4 }] },
        { type: "word", letters: [{ number: 5 }, { number: 4 }, { number: 7 }, { number: 7 }] }
      ],
      [
        { type: "word", letters: [{ number: 1, letter: "L", fixed: true }, { number: 8 }, { number: 9 }, { number: 10 }, { number: 11 }] },
        { type: "word", letters: [{ number: 1, letter: "L", fixed: true }, { number: 12 }, { number: 2 }, { number: 4 }, { number: 3 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 5,
    category: "MOTIVATION",
    solutionMap: new Map([
      [1, "Y"], [2, "O"], [3, "U"], [4, "C"], [5, "A"], [6, "N"],
      [7, "D"], [8, "I"], [9, "T"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "Y", fixed: true }, { number: 2 }, { number: 3 }] },
        { type: "word", letters: [{ number: 4, letter: "C", fixed: true }, { number: 5 }, { number: 6 }] }
      ],
      [
        { type: "word", letters: [{ number: 7 }, { number: 2 }] },
        { type: "word", letters: [{ number: 8 }, { number: 9 }], punctuation: "!" }
      ]
    ]
  },
  {
    level: 6,
    category: "INSPIRATION",
    solutionMap: new Map([
      [1, "S"], [2, "T"], [3, "A"], [4, "Y"], [5, "B"],
      [6, "R"], [7, "I"], [8, "G"], [9, "H"], [10, "O"], [11, "N"], [12, "E"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "S", fixed: true }, { number: 2 }, { number: 3 }, { number: 4 }] }
      ],
      [
        { type: "word", letters: [{ number: 5, letter: "B", fixed: true }, { number: 6 }, { number: 7 }, { number: 8 }, { number: 9 }, { number: 2 }] }
      ],
      [
        { type: "word", letters: [{ number: 2, letter: "T", fixed: true }, { number: 10 }] },
        { type: "word", letters: [{ number: 1, letter: "S", fixed: true }, { number: 9 }, { number: 7 }, { number: 11 }, { number: 12 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 7,
    category: "POSITIVITY",
    solutionMap: new Map([
      [1, "B"], [2, "E"], [3, "H"], [4, "A"], [5, "P"], [6, "Y"], [7, "R"], [8, "V"], [9, "O"], [10, "U"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "B", fixed: true }, { number: 2 }] },
        { type: "word", letters: [{ number: 3 }, { number: 4 }, { number: 5 }, { number: 5 }, { number: 6 }] }
      ],
      [
        { type: "word", letters: [{ number: 1, letter: "B", fixed: true }, { number: 2 }] },
        { type: "word", letters: [{ number: 1 }, { number: 7 }, { number: 4 }, { number: 8 }, { number: 2 }] }
      ],
      [
        { type: "word", letters: [{ number: 1, letter: "B", fixed: true }, { number: 2 }] },
        { type: "word", letters: [{ number: 4 }, { number: 9 }, { number: 10 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 8,
    category: "ENCOURAGEMENT",
    solutionMap: new Map([
      [1, "Y"], [2, "O"], [3, "U"], [4, "A"], [5, "R"], [6, "E"], [7, "M"], [8, "Z"], [9, "I"], [10, "N"], [11, "G"], [12, "J"], [13, "S"], [14, "T"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "Y", fixed: true }, { number: 2 }, { number: 3 }] },
        { type: "word", letters: [{ number: 4 }, { number: 5 }, { number: 6 }] }
      ],
      [
        { type: "word", letters: [{ number: 4 }, { number: 7 }, { number: 4 }, { number: 8 }, { number: 9 }, { number: 10 }, { number: 11 }] }
      ],
      [
        { type: "word", letters: [{ number: 12 }, { number: 3 }, { number: 13 }, { number: 14 }] },
        { type: "word", letters: [{ number: 4 }, { number: 13 }] },
        { type: "word", letters: [{ number: 1, letter: "Y", fixed: true }, { number: 2 }, { number: 3 }] },
        { type: "word", letters: [{ number: 4 }, { number: 5 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 9,
    category: "SUCCESS",
    solutionMap: new Map([
      [1, "W"], [2, "O"], [3, "R"], [4, "K"], [5, "H"], [6, "A"], [7, "D"], [8, "B"], [9, "E"], [10, "I"], [11, "N"], [12, "F"], [13, "U"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "W", fixed: true }, { number: 2 }, { number: 3 }, { number: 4 }] },
        { type: "word", letters: [{ number: 5 }, { number: 6 }, { number: 3 }, { number: 7 }] }
      ],
      [
        { type: "word", letters: [{ number: 8, letter: "B", fixed: true }, { number: 9 }] },
        { type: "word", letters: [{ number: 4 }, { number: 10 }, { number: 11 }, { number: 7 }] }
      ],
      [
        { type: "word", letters: [{ number: 6 }, { number: 11 }, { number: 7 }] },
        { type: "word", letters: [{ number: 5 }, { number: 6 }, { number: 8 }, { number: 9 }] },
        { type: "word", letters: [{ number: 12 }, { number: 13 }, { number: 11 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 10,
    category: "HOPE",
    solutionMap: new Map([
      [1, "E"], [2, "V"], [3, "R"], [4, "Y"], [5, "D"], [6, "A"], [7, "I"], [8, "S"], [9, "N"], [10, "W"], [11, "B"], [12, "G"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "E", fixed: true }, { number: 2 }, { number: 1 }, { number: 3 }, { number: 4 }] },
        { type: "word", letters: [{ number: 5 }, { number: 6 }, { number: 4 }] }
      ],
      [
        { type: "word", letters: [{ number: 7 }, { number: 8 }] },
        { type: "word", letters: [{ number: 6 }] },
        { type: "word", letters: [{ number: 9 }, { number: 1 }, { number: 10 }] }
      ],
      [
        { type: "word", letters: [{ number: 11 }, { number: 1 }, { number: 12 }, { number: 7 }, { number: 9 }, { number: 9 }, { number: 7 }, { number: 9 }, { number: 12 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 11,
    category: "AMBITION",
    solutionMap: new Map([
      [1, "D"], [2, "R"], [3, "E"], [4, "A"], [5, "M"],
      [6, "B"], [7, "I"], [8, "G"], [9, "N"], [10, "T"],
      [11, "O"], [12, "F"], [13, "L"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "D", fixed: true }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }] },
        { type: "word", letters: [{ number: 6 }, { number: 7 }, { number: 8 }] }
      ],
      [
        { type: "word", letters: [{ number: 4 }, { number: 9 }, { number: 1 }] },
        { type: "word", letters: [{ number: 1 }, { number: 4 }, { number: 2 }, { number: 3 }] }
      ],
      [
        { type: "word", letters: [{ number: 10 }, { number: 11 }] },
        { type: "word", letters: [{ number: 12 }, { number: 4 }, { number: 7 }, { number: 13 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 12,
    category: "HAPPINESS",
    solutionMap: new Map([
      [1, "C"], [2, "H"], [3, "O"], [4, "S"], [5, "E"],
      [6, "T"], [7, "B"], [8, "A"], [9, "P"], [10, "Y"], [11, "D"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "C", fixed: true }, { number: 2 }, { number: 3 }, { number: 3 }, { number: 4 }, { number: 5 }] },
        { type: "word", letters: [{ number: 6 }, { number: 3 }] }
      ],
      [
        { type: "word", letters: [{ number: 7 }, { number: 5 }] },
        { type: "word", letters: [{ number: 2 }, { number: 8 }, { number: 9 }, { number: 9 }, { number: 10 }] }
      ],
      [
        { type: "word", letters: [{ number: 6 }, { number: 3 }, { number: 11 }, { number: 8 }, { number: 10 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 13,
    category: "POTENTIAL",
    solutionMap: new Map([
      [1, "Y"], [2, "O"], [3, "U"], [4, "A"], [5, "R"], [6, "E"], [7, "C"], [8, "P"], [9, "B"], [10, "L"], [11, "F"], [12, "M"], [13, "Z"], [14, "I"], [15, "N"], [16, "G"], [17, "S"], [18, "T"], [19, "H"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "Y", fixed: true }, { number: 2 }, { number: 3 }] },
        { type: "word", letters: [{ number: 4 }, { number: 5 }, { number: 6 }] }
      ],
      [
        { type: "word", letters: [{ number: 7 }, { number: 4 }, { number: 8 }, { number: 4 }, { number: 9 }, { number: 10 }, { number: 6 }] },
        { type: "word", letters: [{ number: 2 }, { number: 11 }] }
      ],
      [
        { type: "word", letters: [{ number: 4 }, { number: 12 }, { number: 4 }, { number: 13 }, { number: 14 }, { number: 15 }, { number: 16 }] },
        { type: "word", letters: [{ number: 18 }, { number: 19 }, { number: 14 }, { number: 15 }, { number: 16 }, { number: 17 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 14,
    category: "LIFESTYLE",
    solutionMap: new Map([
      [1, "D"], [2, "O"], [3, "W"], [4, "H"], [5, "A"], [6, "T"], [7, "Y"], [8, "U"], [9, "L"], [10, "V"], [11, "E"], [12, "R"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "D", fixed: true }, { number: 2 }] },
        { type: "word", letters: [{ number: 3 }, { number: 4 }, { number: 5 }, { number: 6 }] }
      ],
      [
        { type: "word", letters: [{ number: 7 }, { number: 2 }, { number: 8 }] },
        { type: "word", letters: [{ number: 9 }, { number: 2 }, { number: 10 }, { number: 11 }] }
      ],
      [
        { type: "word", letters: [{ number: 11 }, { number: 10 }, { number: 11 }, { number: 12 }, { number: 7 }] },
        { type: "word", letters: [{ number: 1, letter: "D", fixed: true }, { number: 5 }, { number: 7 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 15,
    category: "KINDNESS",
    solutionMap: new Map([
      [1, "K"], [2, "I"], [3, "N"], [4, "D"], [5, "E"], [6, "S"], [7, "F"], [8, "R"], [9, "P"], [10, "L"], [11, "T"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "K", fixed: true }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 3 }, { number: 5 }, { number: 6 }, { number: 6 }] },
        { type: "word", letters: [{ number: 2 }, { number: 6 }] }
      ],
      [
        { type: "word", letters: [{ number: 7 }, { number: 8 }, { number: 5 }, { number: 5 }] }
      ],
      [
        { type: "word", letters: [{ number: 6 }, { number: 9 }, { number: 8 }, { number: 2 }, { number: 3 }, { number: 1 }, { number: 10 }, { number: 5 }] },
        { type: "word", letters: [{ number: 2 }, { number: 11 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 16,
    category: "SELF BELIEF",
    solutionMap: new Map([
      [1, "B"], [2, "E"], [3, "L"], [4, "I"], [5, "V"], [6, "N"], [7, "Y"], [8, "O"], [9, "U"], [10, "R"], [11, "S"], [12, "F"], [13, "A"], [14, "W"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "B", fixed: true }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 2 }, { number: 5 }, { number: 2 }] },
        { type: "word", letters: [{ number: 4 }, { number: 6 }] }
      ],
      [
        { type: "word", letters: [{ number: 7 }, { number: 8 }, { number: 9 }, { number: 10 }, { number: 11 }, { number: 2 }, { number: 3 }, { number: 12 }] }
      ],
      [
        { type: "word", letters: [{ number: 13 }, { number: 3 }, { number: 14 }, { number: 13 }, { number: 7 }, { number: 11 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 17,
    category: "OPTIMISM",
    solutionMap: new Map([
      [1, "M"], [2, "A"], [3, "K"], [4, "E"], [5, "T"], [6, "O"], [7, "D"], [8, "Y"], [9, "H"], [10, "B"], [11, "S"], [12, "V"], [13, "R"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "M", fixed: true }, { number: 2 }, { number: 3 }, { number: 4 }] },
        { type: "word", letters: [{ number: 5 }, { number: 6 }, { number: 7 }, { number: 2 }, { number: 8 }] }
      ],
      [
        { type: "word", letters: [{ number: 5 }, { number: 9 }, { number: 4 }] },
        { type: "word", letters: [{ number: 10 }, { number: 4 }, { number: 11 }, { number: 5 }] }
      ],
      [
        { type: "word", letters: [{ number: 7 }, { number: 2 }, { number: 8 }] },
        { type: "word", letters: [{ number: 4 }, { number: 12 }, { number: 4 }, { number: 13 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 18,
    category: "PERSPECTIVE",
    solutionMap: new Map([
      [1, "S"], [2, "U"], [3, "C"], [4, "E"], [5, "I"], [6, "A"], [7, "J"], [8, "O"], [9, "R"], [10, "N"], [11, "Y"], [12, "T"], [13, "D"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "S", fixed: true }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 4 }, { number: 1 }, { number: 1 }] },
        { type: "word", letters: [{ number: 5 }, { number: 1 }] },
        { type: "word", letters: [{ number: 6 }] }
      ],
      [
        { type: "word", letters: [{ number: 7 }, { number: 8 }, { number: 2 }, { number: 9 }, { number: 10 }, { number: 4 }, { number: 11 }] }
      ],
      [
        { type: "word", letters: [{ number: 10 }, { number: 8 }, { number: 12 }] },
        { type: "word", letters: [{ number: 6 }] },
        { type: "word", letters: [{ number: 13 }, { number: 4 }, { number: 1 }, { number: 12 }, { number: 5 }, { number: 10 }, { number: 6 }, { number: 12 }, { number: 5 }, { number: 8 }, { number: 10 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 19,
    category: "PROGRESS",
    solutionMap: new Map([
      [1, "K"], [2, "E"], [3, "P"], [4, "G"], [5, "O"], [6, "I"], [7, "N"], [8, "Y"], [9, "U"], [10, "A"], [11, "R"], [12, "D"], [13, "T"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "K", fixed: true }, { number: 2 }, { number: 2 }, { number: 3 }] },
        { type: "word", letters: [{ number: 4 }, { number: 5 }, { number: 6 }, { number: 7 }, { number: 4 }] }
      ],
      [
        { type: "word", letters: [{ number: 8 }, { number: 5 }, { number: 9 }] },
        { type: "word", letters: [{ number: 10 }, { number: 11 }, { number: 2 }] }
      ],
      [
        { type: "word", letters: [{ number: 12 }, { number: 5 }, { number: 6 }, { number: 7 }, { number: 4 }] },
        { type: "word", letters: [{ number: 4 }, { number: 11 }, { number: 2 }, { number: 10 }, { number: 13 }], punctuation: "." }
      ]
    ]
  },
  {
    level: 20,
    category: "FUTURE",
    solutionMap: new Map([
      [1, "T"], [2, "H"], [3, "E"], [4, "B"], [5, "S"], [6, "I"], [7, "Y"], [8, "O"], [9, "C"], [10, "M"]
    ]),
    phraseRows: [
      [
        { type: "word", letters: [{ number: 1, letter: "T", fixed: true }, { number: 2 }, { number: 3 }] },
        { type: "word", letters: [{ number: 4 }, { number: 3 }, { number: 5 }, { number: 1 }] },
        { type: "word", letters: [{ number: 6 }, { number: 5 }] }
      ],
      [
        { type: "word", letters: [{ number: 7 }, { number: 3 }, { number: 1 }] },
        { type: "word", letters: [{ number: 1 }, { number: 8 }] }
      ],
      [
        { type: "word", letters: [{ number: 9 }, { number: 8 }, { number: 10 }, { number: 3 }], punctuation: "." }
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
let gameStarted = false;

// DOM Elements
const levelDisplay = document.getElementById("level-display");
const categoryDisplay = document.getElementById("category-display");
const pointsDisplay = document.getElementById("points-display");
const phraseRowIds = ["phrase-row-1", "phrase-row-2", "phrase-row-3"];
const statusText = document.getElementById("status-text");
const startHintBtn = document.getElementById("start-hint-btn");
const resetBtn = document.getElementById("reset-btn");
const nextLevelBtn = document.getElementById("next-level-btn");
const hintBtn = document.getElementById("hint-btn");
const instructionArea = document.getElementById("instruction-area");
const keyboard = document.getElementById("keyboard");
const mistakeDots = Array.from(document.querySelectorAll(".mistakes__dots span"));

function initLevel(index) {
  const levelData = levels[index];
  if (!levelData) {
    statusText.textContent = "You've completed all 20 levels! You are a Grand Master!";
    instructionArea.classList.remove("instruction--hidden");
    startHintBtn.style.display = "none";
    return;
  }

  // Reset level state
  currentLevelIndex = index;
  inputsByNumber.clear();
  orderedInputs = [];
  activeInput = null;
  mistakes = 0;
  gameOver = false;
  gameStarted = false;

  // Update UI
  levelDisplay.textContent = `LEVEL ${levelData.level}`;
  categoryDisplay.textContent = levelData.category;
  updatePoints(0); 
  statusText.textContent = "Tap a tile and start filling letters.";
  statusText.className = "status";
  instructionArea.classList.remove("instruction--hidden");
  startHintBtn.style.display = "block";
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

  input.addEventListener("click", () => {
    if (!gameStarted) startGame();
    setActiveInput(input);
  });
}

function startGame() {
  gameStarted = true;
  instructionArea.classList.add("instruction--hidden");
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
    // Correct guess
    input.value = value;
    playSound('correct');
    updatePoints(5); 
    
    if (isSolutionComplete()) {
      statusText.textContent = "Amazing! You decrypted the full phrase!";
      statusText.className = "status status--success";
      instructionArea.classList.remove("instruction--hidden");
      startHintBtn.style.display = "none";
      updatePoints(50); 
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
    updatePoints(-10); 
    updateMistakes();
    playSound('mistake');
    
    input.value = value;
    input.classList.remove("letter__input--active");
    input.classList.add("letter__input--active-error");
    
    setTimeout(() => {
      input.classList.remove("letter__input--active-error");
      input.value = ""; 
      if (!gameOver) {
        input.classList.add("letter__input--active");
      }
    }, 400);

    if (mistakes >= maxMistakes) {
      statusText.textContent = "Out of tries! Reset to play again.";
      statusText.className = "status status--warn";
      instructionArea.classList.remove("instruction--hidden");
      startHintBtn.style.display = "none";
      playSound('wrong');
      endGame(false);
    } else {
      statusText.textContent = `Not that letter! Mistake ${mistakes} of ${maxMistakes}.`;
      statusText.className = "status status--warn";
    }
  }
}

function handleHint(isFree = false) {
  if (gameOver || (!isFree && points < 20)) {
    if (!isFree && points < 20) {
      statusText.textContent = "Not enough points for a hint!";
      statusText.className = "status status--warn";
    }
    return;
  }

  const levelData = levels[currentLevelIndex];
  const emptyInputs = orderedInputs.filter(input => !input.value);
  
  if (emptyInputs.length === 0) return;

  const randomInput = emptyInputs[Math.floor(Math.random() * emptyInputs.length)];
  const number = Number(randomInput.dataset.number);
  const correctLetter = levelData.solutionMap.get(number);

  if (!isFree) updatePoints(-20);
  
  randomInput.value = correctLetter;
  playSound('correct');
  statusText.textContent = "Hint revealed!";

  if (isSolutionComplete()) {
    statusText.textContent = "Amazing! You decrypted the full phrase!";
    statusText.className = "status status--success";
    instructionArea.classList.remove("instruction--hidden");
    startHintBtn.style.display = "none";
    playSound('victory');
    endGame(true);
  }
}

function moveFocus(direction) {
  if (!activeInput) return;
  const index = orderedInputs.indexOf(activeInput);
  
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
  if (!gameStarted) startGame();

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
  if (!gameStarted) startGame();
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
startHintBtn.addEventListener("click", () => {
    handleHint(true); // Free hint to start
    startGame();
});
resetBtn.addEventListener("click", resetBoard);
nextLevelBtn.addEventListener("click", () => initLevel(currentLevelIndex + 1));
hintBtn.addEventListener("click", () => handleHint(false));
keyboard.addEventListener("click", handleKeyboardClick);
document.addEventListener("keydown", handlePhysicalKey);

// Start game
initLevel(0);
