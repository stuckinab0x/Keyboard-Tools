import Scale from '../models/scale';

export const modeScales: Scale[] = [
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
  },
];

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
