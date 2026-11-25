document.addEventListener('DOMContentLoaded', () => {
  const ui = new window.UI();
  const game = new window.PuzzleGame();
  const timer = new window.Timer((timeStr) => ui.setTimerText(timeStr));
  const history = new window.HistoryManager(document.getElementById('history-body'));

  function getMovableIndices() {
    if (game.gameState !== 'playing') return [];
    const blackIndex = game.tiles.indexOf(0);
    const validMoves = game.getValidMoves(blackIndex);
    return validMoves.map((m) => m.targetIndex);
  }

  ui.renderBoard(game.tiles, handleTileClick, false, getMovableIndices());
  ui.setButtonState('idle');

  function handleActionClick() {
    if (game.gameState === 'playing') {
      startNewGame();
    } else {
      startNewGame();
    }
  }

  function startNewGame() {
    game.start();
    timer.start();
    ui.setButtonState('playing');
    ui.hideWinModal();
    ui.renderBoard(game.tiles, handleTileClick, false, getMovableIndices());
  }

  function handleTileClick(index) {
    if (game.gameState !== 'playing') return;

    const moved = game.moveByTileIndex(index);
    if (moved) {
      ui.renderBoard(game.tiles, handleTileClick, true, getMovableIndices());
      checkGameStatus();
    }
  }

  function handleKeyDown(e) {
    const key = e.key.toLowerCase();
    let dir = null;

    if (key === 'arrowup' || key === 'w') dir = 'up';
    else if (key === 'arrowdown' || key === 's') dir = 'down';
    else if (key === 'arrowleft' || key === 'a') dir = 'left';
    else if (key === 'arrowright' || key === 'd') dir = 'right';

    if (dir) {
      ui.setKeycapActive(key, true);

      if (game.gameState === 'playing') {
        e.preventDefault();
        const moved = game.move(dir);
        if (moved) {
          ui.renderBoard(game.tiles, handleTileClick, true, getMovableIndices());
          checkGameStatus();
        }
      }
    }
  }

  function handleKeyUp(e) {
    const key = e.key.toLowerCase();
    ui.setKeycapActive(key, false);
  }

  function checkGameStatus() {
    if (game.checkWin()) {
      timer.stop();
      game.gameState = 'won';
      ui.setButtonState('won');

      const timeFormatted = timer.formatTime(timer.getSeconds());
      history.addRecord(game.moves, timeFormatted);

      setTimeout(() => {
        ui.showWinModal(game.moves, timeFormatted);
      }, 250);
    }
  }

  if (ui.btnFullscreen) {
    ui.btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.warn('Lỗi khi bật toàn màn hình:', err);
        });
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });

    document.addEventListener('fullscreenchange', () => {
      ui.updateFullscreenIcon(!!document.fullscreenElement);
    });
  }

  if (ui.btnAction) {
    ui.btnAction.addEventListener('click', handleActionClick);
  }

  if (ui.btnModalRestart) {
    ui.btnModalRestart.addEventListener('click', () => {
      ui.hideWinModal();
      startNewGame();
    });
  }

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
});
