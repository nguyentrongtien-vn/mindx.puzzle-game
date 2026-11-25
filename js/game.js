class PuzzleGame {
  constructor() {
    const { INITIAL_TILES } = window.GameConfig;
    this.tiles = [...INITIAL_TILES];
    this.gameState = 'idle';
    this.moves = 0;
  }

  start() {
    this.tiles = this.generateShuffledBoard();
    this.gameState = 'playing';
    this.moves = 0;
  }

  getValidMoves(blackIndex) {
    const { GRID_ROWS, GRID_COLS } = window.GameConfig;
    const row = Math.floor(blackIndex / GRID_COLS);
    const col = blackIndex % GRID_COLS;
    const moves = [];

    if (row > 0) {
      moves.push({ dir: 'up', targetIndex: (row - 1) * GRID_COLS + col });
    }
    if (row < GRID_ROWS - 1) {
      moves.push({ dir: 'down', targetIndex: (row + 1) * GRID_COLS + col });
    }
    if (col > 0) {
      moves.push({ dir: 'left', targetIndex: row * GRID_COLS + (col - 1) });
    }
    if (col < GRID_COLS - 1) {
      moves.push({ dir: 'right', targetIndex: row * GRID_COLS + (col + 1) });
    }

    return moves;
  }

  generateShuffledBoard() {
    const { INITIAL_TILES, SHUFFLE_COUNT } = window.GameConfig;
    const current = [...INITIAL_TILES];
    let lastDir = null;
    const opposite = { up: 'down', down: 'up', left: 'right', right: 'left' };

    for (let i = 0; i < SHUFFLE_COUNT; i++) {
      const blackIndex = current.indexOf(0);
      const validMoves = this.getValidMoves(blackIndex);

      const filtered = validMoves.filter((m) => m.dir !== opposite[lastDir]);
      const chosen =
        filtered.length > 0
          ? filtered[Math.floor(Math.random() * filtered.length)]
          : validMoves[Math.floor(Math.random() * validMoves.length)];

      const temp = current[blackIndex];
      current[blackIndex] = current[chosen.targetIndex];
      current[chosen.targetIndex] = temp;
      lastDir = chosen.dir;
    }

    return current;
  }

  move(direction) {
    if (this.gameState !== 'playing') return false;

    const { GRID_ROWS, GRID_COLS } = window.GameConfig;
    const blackIndex = this.tiles.indexOf(0);
    const row = Math.floor(blackIndex / GRID_COLS);
    const col = blackIndex % GRID_COLS;

    let targetIndex = -1;

    switch (direction) {
      case 'up':
        if (row > 0) targetIndex = (row - 1) * GRID_COLS + col;
        break;
      case 'down':
        if (row < GRID_ROWS - 1) targetIndex = (row + 1) * GRID_COLS + col;
        break;
      case 'left':
        if (col > 0) targetIndex = row * GRID_COLS + (col - 1);
        break;
      case 'right':
        if (col < GRID_COLS - 1) targetIndex = row * GRID_COLS + (col + 1);
        break;
      default:
        return false;
    }

    if (targetIndex === -1) {
      return false;
    }

    this.tiles[blackIndex] = this.tiles[targetIndex];
    this.tiles[targetIndex] = 0;
    this.moves++;

    return true;
  }

  moveByTileIndex(tileIndex) {
    if (this.gameState !== 'playing') return false;

    const blackIndex = this.tiles.indexOf(0);
    const validMoves = this.getValidMoves(blackIndex);
    const matched = validMoves.find((m) => m.targetIndex === tileIndex);

    if (matched) {
      return this.move(matched.dir);
    }
    return false;
  }

  checkWin() {
    const { INITIAL_TILES } = window.GameConfig;
    for (let i = 0; i < INITIAL_TILES.length; i++) {
      if (this.tiles[i] !== INITIAL_TILES[i]) {
        return false;
      }
    }
    return true;
  }
}

window.PuzzleGame = PuzzleGame;
