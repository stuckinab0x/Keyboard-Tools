const allKeys = Array.from(document.getElementsByClassName('key'));
const keyDisplay = document.getElementById('key-display');
const goButton = document.getElementById('next-button');
const checkSharps = document.getElementById('check-sharps')
const checkFlats = document.getElementById('check-flats');
const checkModes = document.getElementById('check-modes');
const modeDisplay = document.getElementById('mode-display');
const keyboardImg = document.getElementById('keyboard');



function handleCheckEvent(checkName) {
  const checks = [checkSharps, checkFlats, checkModes];
  checks.splice(checks.indexOf(checkName), 1);
  checks.forEach(i => i.checked = false);
  if (!checkName.checked) modeDisplay.innerHTML = 'All Keys';
  else if (checkName === checkSharps) modeDisplay.innerHTML = 'Sharps Only';
  else if (checkName === checkFlats) modeDisplay.innerHTML = 'Flats Only';
  else modeDisplay.innerHTML = 'Modes';
  checkName.blur();
  resetGame();
}

checkSharps.addEventListener('click', () => handleCheckEvent(checkSharps));
checkFlats.addEventListener('click', () => handleCheckEvent(checkFlats));
checkModes.addEventListener('click', () => handleCheckEvent(checkModes));

document.addEventListener('keyup', e => {
  if (e.code === 'Space') generateVisible();
})

const modeScales = [
  {
    name: 'C Major',
    notes: ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C2', 'B2'],
    special: [],
    modeDefinition: ['C Ionian (Major)', 'D Dorian', 'E Phrygian', 'F Lydian', 'G Mixolydian', 'A Aeolian (Minor)', 'B Locrian'],
  },
  {
    name: 'Db Major',
    notes: ['C1', 'Csharp1', 'Dsharp1', 'F1', 'Fsharp1', 'Gsharp1', 'Asharp1', 'C2', 'Csharp2', 'Dsharp2', 'F2', 'Fsharp2', 'Gsharp2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C Locrian', 'Db Ionian (Major)', 'Eb Dorian', 'F Phrygian', 'Gb Lydian', 'Ab Mixolydian', 'Bb Aeolian (Minor)'],
  },
  {
    name: 'D Major',
    notes: ['Csharp1', 'D1', 'E1', 'Fsharp1', 'G1', 'A1', 'B1', 'Csharp2', 'D2', 'E2', 'Fsharp2', 'G2', 'A2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['C# Locrian', 'D Ionian (Major)', 'E Dorian', 'F# Phrygian', 'G Lydian', 'A Mixolydian', 'B Aeolian (Minor)'],
  },
  {
    name: 'Eb Major',
    notes: ['C1', 'D1', 'Dsharp1', 'F1', 'G1', 'Gsharp1', 'Asharp1', 'C2', 'D2', 'Dsharp2', 'F2', 'G2', 'Gsharp2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C Aeolian (Minor)', 'D Locrian', 'Eb Ionian (Major)', 'F Dorian', 'G Phrygian', 'Ab Lydian', 'Bb Mixolydian'],
  },
  {
    name: 'E Major',
    notes: ['Csharp1', 'Dsharp1', 'E1', 'Fsharp1', 'Gsharp1', 'A1', 'B1', 'Csharp2', 'Dsharp2', 'E2', 'Fsharp2', 'Gsharp2', 'A2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['C# Aeolian (Minor)', 'D# Locrian', 'E Ionian (Major)', 'F# Dorian', 'G# Phrygian', 'A Lydian', 'B Mixolydian'],
  },
  {
    name: 'F Major',
    notes: ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'Asharp1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C Mixolydian', 'D Aeolian (Minor)', 'E Locrian', 'F Ionian (Major)', 'G Dorian', 'A Phrygian', 'Bb Lydian'],
  },
  {
    name: 'F# Major/Gb Major',
    notes: ['Csharp1', 'Dsharp1', 'F1', 'Fsharp1', 'Gsharp1', 'Asharp1', 'B1', 'Csharp2', 'Dsharp2', 'F2', 'Fsharp2', 'Gsharp2', 'Asharp2', 'B2'],
    special: ['sharp', 'flat'],
    modeDefinition: ['C#/Db Mixolydian', 'Eb Aeolian (Minor)', 'F Locrian', 'F#/Gb Ionian (Major)', 'G#/Ab Dorian', 'A#/Bb Phrygian', 'B Lydian'],
  },
  {
    name: 'G Major',
    notes: ['C1', 'D1', 'E1', 'Fsharp1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'Fsharp2', 'G2', 'A2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['C Lydian', 'D Mixolydian', 'E Aeolian (Minor)', 'F# Locrian', 'G Ionian (Major)', 'A Dorian', 'B Phrygian'],
  },
  {
    name: 'Ab Major',
    notes: ['C1', 'Csharp1', 'Dsharp1', 'F1', 'G1', 'Gsharp1', 'Asharp1', 'C2', 'Csharp2', 'Dsharp2', 'F2', 'G2', 'Gsharp2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C Phrygian', 'Db Lydian', 'Eb Mixolydian', 'F Aeolian (Minor)', 'G Locrian', 'Ab Ionian (Major)', 'Bb Dorian'],
  },
  {
    name: 'A Major',
    notes: ['Csharp1', 'D1', 'E1', 'Fsharp1', 'Gsharp1', 'A1', 'B1', 'Csharp2', 'D2', 'E2', 'Fsharp2', 'Gsharp2', 'A2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['C# Phrygian', 'D Lydian', 'E Mixolydian', 'F# Aeolian (Minor)', 'G# Locrian', 'A Ionian (Major)', 'B Dorian'],
  },
  {
    name: 'Bb Major',
    notes: ['C1', 'D1', 'Dsharp1', 'F1', 'G1', 'A1', 'Asharp1', 'C2', 'D2', 'Dsharp2', 'F2', 'G2', 'A2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C Dorian', 'D Phrygian', 'Eb Lydian', 'F Mixolydian', 'G Aeolian (Minor)', 'A Locrian', 'Bb Ionian (Major)'],
  },
  {
    name: 'B Major',
    notes: ['Csharp1', 'Dsharp1', 'E1', 'Fsharp1', 'Gsharp1', 'Asharp1', 'B1', 'Csharp2', 'Dsharp2', 'E2', 'Fsharp2', 'Gsharp2', 'Asharp2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['C# Dorian', 'D# Phrygian', 'E Lydian', 'F# Mixolydian', 'G# Aeolian (Minor)', 'A# Locrian', 'B Ionian (Major)'],
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

const sharpsOnly = fullScales.filter(i => i.special.includes('sharp') );
const flatsOnly = fullScales.filter(i => i.special.includes('flat') );

function generateVisible() {
  if (guessing && !checkModes.checked) {
    keyDisplay.innerHTML = currentKey.name;
    guessing = false;
    goButton.innerHTML = 'Next Scale';
    return;
  } else if (guessing) {
    keyDisplay.innerHTML = currentKey.modeDefinition[currentStart];
    goButton.innerHTML = 'Next Scale';
    guessing = false;
    return;
  }
  
  allKeys.forEach(i => i.classList.remove('key-show'));

  let chosenKey;

  if (!checkModes.checked) {
    const validKeys = getValidKeys();
    do {
      chosenKey = validKeys[Math.floor(Math.random() * validKeys.length)];
    } while (currentKey === chosenKey);
    chosenKey.notes.forEach(i => {
      const keysOfType = Array.from(document.getElementsByClassName(i));
      keysOfType.forEach(i => i.classList.add('key-show'))
    })
    keyboardImg.classList.add('keyboard-hide');  
  } else {
    chosenKey = modeScales[Math.floor(Math.random() * 12)];
    let chosenStart;
    do chosenStart = Math.floor(Math.random() * 7);
    while (chosenStart === currentStart);
    currentStart = chosenStart;
    const visible = chosenKey.notes.slice(chosenStart, chosenStart + 7);
    visible.forEach(i => {
      document.getElementById(i).classList.add('key-show');
    })
  }

  keyDisplay.innerHTML = '????';
  guessing = true;
  currentKey = chosenKey;
  goButton.innerHTML = 'Show Answer';
}

function getValidKeys() {
  let validKeys;
  if (checkSharps.checked) validKeys = sharpsOnly;
  else if (checkFlats.checked) validKeys = flatsOnly;
  else validKeys = fullScales;
  return validKeys;
}

function resetGame() {
  allKeys.forEach(i => i.classList.remove('key-show'));
  guessing = false;
  keyDisplay.innerHTML = '????';
  goButton.innerHTML = 'Next Scale';
  keyboardImg.classList.remove('keyboard-hide');
}