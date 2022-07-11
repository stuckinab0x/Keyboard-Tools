const allKeys = Array.from(document.getElementsByClassName('key'));
const keyDisplay = document.getElementById('key-display');
const goButton = document.getElementById('next-button');
const checkSharps = document.getElementById('check-sharps')
const checkFlats = document.getElementById('check-flats');
const checkModes = document.getElementById('check-modes');
const modeDisplay = document.getElementById('mode-display');
const keyboardImg = document.getElementById('keyboard');

checkSharps.addEventListener('click', () => {
  if (checkFlats.checked) checkFlats.checked = false;
  if (checkModes.checked) checkModes.checked = false;
  checkSharps.checked ? modeDisplay.innerHTML = 'Sharps Only' : modeDisplay.innerHTML = 'All Keys';
  checkSharps.blur();
  resetGame();
})
checkFlats.addEventListener('click', () => {
  if (checkSharps.checked) checkSharps.checked = false;
  if (checkModes.checked) checkModes.checked = false;
  checkFlats.checked ? modeDisplay.innerHTML = 'Flats Only' : modeDisplay.innerHTML = 'All Keys';
  checkFlats.blur();
  resetGame();
})
checkModes.addEventListener('click', () => {
  if (checkSharps.checked) checkSharps.checked = false;
  if (checkFlats.checked) checkFlats.checked = false;
  checkModes.checked ? modeDisplay.innerHTML = 'Modes' : modeDisplay.innerHTML = 'All Keys';
  checkModes.blur();
  resetGame();
})

document.addEventListener('keyup', e => {
  if (e.code === 'Space') generateVisible();
})

const modeScales = [
  {
    name: 'C Major',
    notes: ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C2', 'B2'],
    special: [],
    modeDefinition: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  },
  {
    name: 'Db Major',
    notes: ['C1', 'Csharp1', 'Dsharp1', 'F1', 'Fsharp1', 'Gsharp1', 'Asharp1', 'C2', 'Csharp2', 'Dsharp2', 'F2', 'Fsharp2', 'Gsharp2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C', 'Db', 'Eb', 'F', 'F#/Gb', 'Ab', 'Bb'],
  },
  {
    name: 'D Major',
    notes: ['Csharp1', 'D1', 'E1', 'Fsharp1', 'G1', 'A1', 'B1', 'Csharp2', 'D2', 'E2', 'Fsharp2', 'G2', 'A2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['Db', 'D', 'E', 'F#/Gb', 'G', 'A', 'B'],
  },
  {
    name: 'Eb Major',
    notes: ['C1', 'D1', 'Dsharp1', 'F1', 'G1', 'Gsharp1', 'Asharp1', 'C2', 'D2', 'Dsharp2', 'F2', 'G2', 'Gsharp2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C', 'E', 'Eb', 'F', 'G', 'Ab', 'Bb'],
  },
  {
    name: 'E Major',
    notes: ['Csharp1', 'Dsharp1', 'E1', 'Fsharp1', 'Gsharp1', 'A1', 'B1', 'Csharp2', 'Dsharp2', 'E2', 'Fsharp2', 'Gsharp2', 'A2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['Db', 'Eb', 'E', 'F#/Gb', 'Ab', 'A', 'B'],
  },
  {
    name: 'F Major',
    notes: ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'Asharp1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C', 'D', 'E', 'F', 'G', 'A', 'Bb'],
  },
  {
    name: 'F# Major/Gb Major',
    notes: ['Csharp1', 'Dsharp1', 'F1', 'Fsharp1', 'Gsharp1', 'Asharp1', 'B1', 'Csharp2', 'Dsharp2', 'F2', 'Fsharp2', 'Gsharp2', 'Asharp2', 'B2'],
    special: ['sharp', 'flat'],
    modeDefinition: ['Db', 'Eb', 'F', 'F#/Gb', 'Ab', 'Bb', 'B'],
  },
  {
    name: 'G Major',
    notes: ['C1', 'D1', 'E1', 'Fsharp1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'Fsharp2', 'G2', 'A2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['C', 'D', 'E', 'F#/Gb', 'G', 'A', 'B'],
  },
  {
    name: 'Ab Major',
    notes: ['C1', 'Csharp1', 'Dsharp1', 'F1', 'G1', 'Gsharp1', 'Asharp1', 'C2', 'Csharp2', 'Dsharp2', 'F2', 'G2', 'Gsharp2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb'],
  },
  {
    name: 'A Major',
    notes: ['Csharp1', 'D1', 'E1', 'Fsharp1', 'Gsharp1', 'A1', 'B1', 'Csharp2', 'D2', 'E2', 'Fsharp2', 'Gsharp2', 'A2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['Db', 'D', 'E', 'F#/Gb', 'Ab', 'A', 'B'],
  },
  {
    name: 'Bb Major',
    notes: ['C1', 'D1', 'Dsharp1', 'F1', 'G1', 'A1', 'Asharp1', 'C2', 'D2', 'Dsharp2', 'F2', 'G2', 'A2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'],
  },
  {
    name: 'B Major',
    notes: ['Csharp1', 'Dsharp1', 'E1', 'Fsharp1', 'Gsharp1', 'Asharp1', 'B1', 'Csharp2', 'Dsharp2', 'E2', 'Fsharp2', 'Gsharp2', 'Asharp2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['Db', 'Eb', 'E', 'F#/Gb', 'Ab', 'Bb', 'B'],
  }
]

const fullScales = [
  {
    name: 'C Major',
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    special: [],
  },
  {
    name: 'Db Major',
    notes: ['C', 'Csharp', 'Dsharp', 'F', 'Fsharp', 'Gsharp', 'Asharp'],
    special: ['flat'],
  },
  {
    name: 'D Major',
    notes: ['Csharp', 'D', 'E', 'Fsharp', 'G', 'A', 'B'],
    special: ['sharp'],
  },
  {
    name: 'Eb Major',
    notes: ['C', 'D', 'Dsharp', 'F', 'G', 'Gsharp', 'Asharp'],
    special: ['flat'],
  },
  {
    name: 'E Major',
    notes: ['Csharp', 'Dsharp', 'E', 'Fsharp', 'Gsharp', 'A', 'B'],
    special: ['sharp'],
  },
  {
    name: 'F Major',
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'Asharp'],
    special: ['flat'],
  },
  {
    name: 'F# Major/Gb Major',
    notes: ['Csharp', 'Dsharp', 'F', 'Fsharp', 'Gsharp', 'Asharp', 'B'],
    special: ['sharp', 'flat'],
  },
  {
    name: 'G Major',
    notes: ['C', 'D', 'E', 'Fsharp', 'G', 'A', 'B'],
    special: ['sharp'],
  },
  {
    name: 'Ab Major',
    notes: ['C', 'Csharp', 'Dsharp', 'F', 'G', 'Gsharp', 'Asharp'],
    special: ['flat'],
  },
  {
    name: 'A Major',
    notes: ['Csharp', 'D', 'E', 'Fsharp', 'Gsharp', 'A', 'B'],
    special: ['sharp'],
  },
  {
    name: 'Bb Major',
    notes: ['C', 'D', 'Dsharp', 'F', 'G', 'A', 'Asharp'],
    special: ['flat'],
  },
  {
    name: 'B Major',
    notes: ['Csharp', 'Dsharp', 'E', 'Fsharp', 'Gsharp', 'Asharp', 'B'],
    special: ['sharp'],
  }
]

let guessing = false; 
let currentKey;
let currentStart;
let scaleIndex;
let startingKey;

const sharpsOnly = fullScales.filter(i => i.special.includes('sharp') );
const flatsOnly = fullScales.filter(i => i.special.includes('flat') );

function generateVisible() {
  if (guessing && !checkModes.checked) {
    keyDisplay.innerHTML = currentKey;
    guessing = false;
    goButton.innerHTML = 'Next Scale';
    return;
  } else if (guessing) {
    // keyDisplay.innerHTML = startingKey + modeNames[currentStart];
    goButton.innerHTML = 'Next Scale';
    guessing = false;
    return;
  }
  
  allKeys.forEach(i => i.classList.remove('key-show'));

  let chosenKey;
  let chosenStart
  const validKeys = checkModes.checked ? getValidKeys(true) : getValidKeys();

  if (!checkModes.checked) {
    do {
      chosenKey = validKeys[Math.floor(Math.random() * validKeys.length)];
    } while (currentKey === chosenKey.name);
    chosenKey.notes.forEach(i => {
      const keysOfType = Array.from(document.getElementsByClassName(i));
      keysOfType.forEach(i => i.classList.add('key-show'))
    })
    keyboardImg.classList.add('keyboard-hide');  
  } else {
    scaleIndex = [Math.floor(Math.random() * 12)];
    chosenKey = validKeys[scaleIndex];
    do chosenStart = Math.floor(Math.random() * 7);
    while (chosenStart === currentStart);
    currentStart = chosenStart;
    startingKey = chosenKey.modeDefinition[chosenStart];
    const visible = chosenKey.notes.slice(chosenStart, chosenStart + 7);
    visible.forEach(i => {
      document.getElementById(i).classList.add('key-show');
    })
  }

  keyDisplay.innerHTML = '????';
  guessing = true;
  currentKey = chosenKey.name;
  goButton.innerHTML = 'Show Answer';
}

function getValidKeys(modes = false) {
  let validKeys;
  if (!modes && checkSharps.checked) validKeys = sharpsOnly;
  else if (!modes && checkFlats.checked) validKeys = flatsOnly;
  else if (!modes) validKeys = fullScales;
  else validKeys = modeScales;
  return validKeys;
}

function resetGame() {
  allKeys.forEach(i => i.classList.remove('key-show'));
  guessing = false;
  keyDisplay.innerHTML = '????';
  goButton.innerHTML = 'Next Scale';
  keyboardImg.classList.remove('keyboard-hide');
}

const modeNames = ['Ionian (Major)', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian (Minor)', 'Locrian']
const plainKeyNames = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#/Gb', 'G', 'Ab', 'A', 'Bb', 'B']
