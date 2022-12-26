import Scale from '../models/scale';

export const fullScales: Scale[] = [
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
  },
];

export const modeScales: Scale[] = [
  {
    name: 'C Major',
    notes: ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C2', 'B2'],
    special: [],
    modeDefinition: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    modeRotate: 0,
  },
  {
    name: 'Db Major',
    notes: ['C1', 'Csharp1', 'Dsharp1', 'F1', 'Fsharp1', 'Gsharp1', 'Asharp1', 'C2', 'Csharp2', 'Dsharp2', 'F2', 'Fsharp2', 'Gsharp2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb'],
    modeRotate: 1,
  },
  {
    name: 'D Major',
    notes: ['Csharp1', 'D1', 'E1', 'Fsharp1', 'G1', 'A1', 'B1', 'Csharp2', 'D2', 'E2', 'Fsharp2', 'G2', 'A2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['C#', 'D', 'E', 'F#', 'G', 'A', 'B'],
    modeRotate: 1,
  },
  {
    name: 'Eb Major',
    notes: ['C1', 'D1', 'Dsharp1', 'F1', 'G1', 'Gsharp1', 'Asharp1', 'C2', 'D2', 'Dsharp2', 'F2', 'G2', 'Gsharp2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    modeRotate: 2,
  },
  {
    name: 'E Major',
    notes: ['Csharp1', 'Dsharp1', 'E1', 'Fsharp1', 'Gsharp1', 'A1', 'B1', 'Csharp2', 'Dsharp2', 'E2', 'Fsharp2', 'Gsharp2', 'A2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
    modeRotate: 2,
  },
  {
    name: 'F Major',
    notes: ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'Asharp1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C', 'D', 'E', 'F', 'G', 'A', 'Bb'],
    modeRotate: 3,
  },
  {
    name: 'F# Major/Gb Major',
    notes: ['Csharp1', 'Dsharp1', 'F1', 'Fsharp1', 'Gsharp1', 'Asharp1', 'B1', 'Csharp2', 'Dsharp2', 'F2', 'Fsharp2', 'Gsharp2', 'Asharp2', 'B2'],
    special: ['sharp', 'flat'],
    modeDefinition: ['C#/Db', 'Eb', 'F', 'F#/Gb', 'G#/Ab', 'A#/Bb', 'B'],
    modeRotate: 3,
  },
  {
    name: 'G Major',
    notes: ['C1', 'D1', 'E1', 'Fsharp1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'Fsharp2', 'G2', 'A2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['C', 'D', 'E', 'F#', 'G', 'A', 'B'],
    modeRotate: 4,
  },
  {
    name: 'Ab Major',
    notes: ['C1', 'Csharp1', 'Dsharp1', 'F1', 'G1', 'Gsharp1', 'Asharp1', 'C2', 'Csharp2', 'Dsharp2', 'F2', 'G2', 'Gsharp2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    modeRotate: 5,
  },
  {
    name: 'A Major',
    notes: ['Csharp1', 'D1', 'E1', 'Fsharp1', 'Gsharp1', 'A1', 'B1', 'Csharp2', 'D2', 'E2', 'Fsharp2', 'Gsharp2', 'A2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['C#', 'D', 'E', 'F#', 'G#', 'A', 'B'],
    modeRotate: 5,
  },
  {
    name: 'Bb Major',
    notes: ['C1', 'D1', 'Dsharp1', 'F1', 'G1', 'A1', 'Asharp1', 'C2', 'D2', 'Dsharp2', 'F2', 'G2', 'A2', 'Asharp2'],
    special: ['flat'],
    modeDefinition: ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'],
    modeRotate: 6,
  },
  {
    name: 'B Major',
    notes: ['Csharp1', 'Dsharp1', 'E1', 'Fsharp1', 'Gsharp1', 'Asharp1', 'B1', 'Csharp2', 'Dsharp2', 'E2', 'Fsharp2', 'Gsharp2', 'Asharp2', 'B2'],
    special: ['sharp'],
    modeDefinition: ['C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B'],
    modeRotate: 6,
  },
];
