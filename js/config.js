const GRID_ROWS = 3;
const GRID_COLS = 4;
const TOTAL_TILES = GRID_ROWS * GRID_COLS;

const TILE_CONFIG = {
  1: { bg: 'bg-green-100', text: 'text-green-500' },
  2: { bg: 'bg-red-100', text: 'text-red-500' },
  3: { bg: 'bg-blue-100', text: 'text-blue-500' },
  4: { bg: 'bg-purple-100', text: 'text-purple-500' },
  5: { bg: 'bg-yellow-100', text: 'text-yellow-500' },
  6: { bg: 'bg-pink-100', text: 'text-pink-500' },
  7: { bg: 'bg-indigo-100', text: 'text-indigo-500' },
  8: { bg: 'bg-gray-100', text: 'text-gray-500' },
  9: { bg: 'bg-emerald-100', text: 'text-emerald-500' },
  10: { bg: 'bg-amber-100', text: 'text-amber-500' },
  11: { bg: 'bg-lime-100', text: 'text-lime-500' },
  0: { bg: 'bg-black', text: 'text-cyan-500' },
};

const INITIAL_TILES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0];

const SHUFFLE_COUNT = 100;

window.GameConfig = {
  GRID_ROWS,
  GRID_COLS,
  TOTAL_TILES,
  TILE_CONFIG,
  INITIAL_TILES,
  SHUFFLE_COUNT,
};
