const allKeys = Array.from(document.getElementsByClassName('key'));
const keyDisplay = document.getElementById('key-display');
const goButton = document.getElementById('next-button');
const checkSharps = document.getElementById('check-sharps')
const checkFlats = document.getElementById('check-flats');
const modeDisplay = document.getElementById('mode-display');


checkSharps.addEventListener('click', () => {
  if (checkFlats.checked) checkFlats.checked = false;
  checkSharps.checked ? modeDisplay.innerHTML = 'Sharps Only' : modeDisplay.innerHTML = 'All Keys';
  checkSharps.blur();
  resetGame();
})
checkFlats.addEventListener('click', () => {
  if (checkSharps.checked) checkSharps.checked = false;
  checkFlats.checked ? modeDisplay.innerHTML = 'Flats Only' : modeDisplay.innerHTML = 'All Keys';
  checkFlats.blur();
  resetGame();
})

document.addEventListener('keyup', e => {
  if (e.code === 'Space') generateVisible();
})

let guessing = false; 
let currentKey;

const scales = [
  {
    name: 'C Major',
    notes: ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C2', 'B2'],
    special: [],
  },
  {
    name: 'Db Major',
    notes: ['C1', 'Csharp1', 'Dsharp1', 'F1', 'Fsharp1', 'Gsharp1', 'Asharp1', 'C2', 'Csharp2', 'Dsharp2', 'F2', 'Fsharp2', 'Gsharp2', 'Asharp2'],
    special: ['flat'],
  },
  {
    name: 'D Major',
    notes: ['Csharp1', 'D1', 'E1', 'Fsharp1', 'G1', 'A1', 'B1', 'Csharp2', 'D2', 'E2', 'Fsharp2', 'G2', 'A2', 'B2'],
    special: ['sharp'],
  },
  {
    name: 'Eb Major',
    notes: ['C1', 'D1', 'Dsharp1', 'F1', 'G1', 'Gsharp1', 'Asharp1', 'C2', 'D2', 'Dsharp2', 'F2', 'G2', 'Gsharp2', 'Asharp2'],
    special: ['flat'],
  },
  {
    name: 'E Major',
    notes: ['Csharp1', 'Dsharp1', 'E1', 'Fsharp1', 'Gsharp1', 'A1', 'B1', 'Csharp2', 'Dsharp2', 'E2', 'Fsharp2', 'Gsharp2', 'A2', 'B2'],
    special: ['sharp'],
  },
  {
    name: 'F Major',
    notes: ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'Asharp1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'Asharp2'],
    special: ['flat'],
  },
  {
    name: 'F# Major/Gb Major',
    notes: ['Csharp1', 'Dsharp1', 'F1', 'Fsharp1', 'Gsharp1', 'Asharp1', 'B1', 'Csharp2', 'Dsharp2', 'F2', 'Fsharp2', 'Gsharp2', 'Asharp2', 'B2'],
    special: ['sharp', 'flat'],
  },
  {
    name: 'G Major',
    notes: ['C1', 'D1', 'E1', 'Fsharp1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'Fsharp2', 'G2', 'A2', 'B2'],
    special: ['sharp'],
  },
  {
    name: 'Ab Major',
    notes: ['C1', 'Csharp1', 'Dsharp1', 'F1', 'G1', 'Gsharp1', 'Asharp1', 'C2', 'Csharp2', 'Dsharp2', 'F2', 'G2', 'Gsharp2', 'Asharp2'],
    special: ['flat'],
  },
  {
    name: 'A Major',
    notes: ['Csharp1', 'D1', 'E1', 'Fsharp1', 'Gsharp1', 'A1', 'B1', 'Csharp2', 'D2', 'E2', 'Fsharp2', 'Gsharp2', 'A2', 'B2'],
    special: ['sharp'],
  },
  {
    name: 'Bb Major',
    notes: ['C1', 'D1', 'Dsharp1', 'F1', 'G1', 'A1', 'Asharp1', 'C2', 'D2', 'Dsharp2', 'F2', 'G2', 'A2', 'Asharp2'],
    special: ['flat'],
  },
  {
    name: 'B Major',
    notes: ['Csharp1', 'Dsharp1', 'E1', 'Fsharp1', 'Gsharp1', 'Asharp1', 'B1', 'Csharp2', 'Dsharp2', 'E2', 'Fsharp2', 'Gsharp2', 'Asharp2', 'B2'],
    special: ['sharp'],
  }
]

const sharpsOnly = scales.filter(i => i.special.includes('sharp') );
const flatsOnly = scales.filter(i => i.special.includes('flat') );

function generateVisible() {
  if (guessing) {
    keyDisplay.innerHTML = currentKey;
    guessing = false;
    goButton.innerHTML = 'Next Scale';
    return;
  }
  
  const start = Math.floor(Math.random() * 7);
  let chosenKey;

  if (checkSharps.checked) {
    chosenKey = sharpsOnly[Math.floor(Math.random() * 6)];
  } else if (checkFlats.checked) {
    chosenKey = flatsOnly[Math.floor(Math.random() * 6)];
  } else {
    chosenKey = scales[Math.floor(Math.random() * 12)];
  }
  
  keyDisplay.innerHTML = '????';
  allKeys.forEach(i => i.classList.remove('key-show'));
  
  const visible = chosenKey.notes.slice(start, start + 7);
  
  visible.forEach(i => {
    document.getElementById(i).classList.add('key-show');
  })
  
  guessing = true;
  currentKey = chosenKey.name;
  goButton.innerHTML = 'Show Answer';
}

function resetGame() {
  allKeys.forEach(i => i.classList.remove('key-show'));
  guessing = false;
  keyDisplay.innerHTML = '????';
  goButton.innerHTML = 'Next Scale';
}