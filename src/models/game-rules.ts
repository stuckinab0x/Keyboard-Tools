export default interface GameRules {
  mode: GameMode;
}

export type GameMode = 'all' | 'sharps' | 'flats' | 'modes';
