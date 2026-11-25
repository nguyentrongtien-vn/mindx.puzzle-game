class UI {
  constructor() {
    this.boardElement = document.getElementById('game-board');
    this.btnAction = document.getElementById('btn-action');
    this.timerDisplay = document.getElementById('timer-display');
    this.winModal = document.getElementById('win-modal');
    this.winMoves = document.getElementById('win-moves');
    this.winTime = document.getElementById('win-time');
    this.btnModalRestart = document.getElementById('btn-modal-restart');
    this.btnFullscreen = document.getElementById('btn-fullscreen');
    this.iconExpand = document.getElementById('icon-expand');
    this.iconCompress = document.getElementById('icon-compress');

    this.tileElements = new Map();
    this.initTileElements();
  }

  initTileElements() {
    const { TILE_CONFIG } = window.GameConfig;

    for (let val = 0; val <= 11; val++) {
      const tileDiv = document.createElement('div');
      const isBlank = val === 0;
      const config = TILE_CONFIG[val] || { bg: 'bg-gray-200', text: 'text-gray-600' };

      const baseClasses = [
        'aspect-square',
        'rounded-2xl',
        'sm:rounded-3xl',
        'flex',
        'items-center',
        'justify-center',
        'text-2xl',
        'sm:text-3xl',
        'md:text-4xl',
        'lg:text-5xl',
        'font-extrabold',
        'select-none',
        'will-change-transform',
      ];

      if (isBlank) {
        tileDiv.className = [...baseClasses, 'bg-black', 'shadow-inner'].join(' ');
      } else {
        tileDiv.className = [
          ...baseClasses,
          config.bg,
          config.text,
          'shadow-sm',
          'tile-movable',
        ].join(' ');
        tileDiv.textContent = val;
      }

      this.tileElements.set(val, tileDiv);
    }
  }

  renderBoard(tiles, onTileClick, animate = false, validMovableIndices = []) {
    if (!this.boardElement) return;

    const firstRects = new Map();

    if (animate) {
      this.tileElements.forEach((el, val) => {
        firstRects.set(val, el.getBoundingClientRect());
      });
    }

    tiles.forEach((val, index) => {
      const el = this.tileElements.get(val);
      if (!el) return;

      el.onclick = () => {
        if (onTileClick) onTileClick(index);
      };

      if (val !== 0) {
        if (validMovableIndices.includes(index)) {
          el.classList.add('tile-movable');
          el.style.cursor = 'pointer';
        } else {
          el.classList.remove('tile-movable');
          el.style.cursor = 'default';
        }
      }

      this.boardElement.appendChild(el);
    });

    if (animate) {
      tiles.forEach((val) => {
        const el = this.tileElements.get(val);
        const first = firstRects.get(val);
        if (!first || !el) return;

        if (val === 0) {
          el.style.transition = 'none';
          el.style.transform = '';
          el.style.zIndex = '1';
          return;
        }

        const last = el.getBoundingClientRect();
        const deltaX = first.left - last.left;
        const deltaY = first.top - last.top;

        if (deltaX !== 0 || deltaY !== 0) {
          el.style.transition = 'none';
          el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
          el.style.zIndex = '30';
          el.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.18)';

          el.offsetHeight;
          requestAnimationFrame(() => {
            el.style.transition = 'transform 0.18s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.18s ease';
            el.style.transform = 'translate(0px, 0px)';
            el.style.boxShadow = '';
          });

          const cleanup = () => {
            el.style.transition = '';
            el.style.transform = '';
            el.style.zIndex = '';
            el.style.boxShadow = '';
            el.removeEventListener('transitionend', cleanup);
          };
          el.addEventListener('transitionend', cleanup);
        }
      });
    }
  }

  setButtonState(state) {
    if (!this.btnAction) return;

    if (state === 'playing') {
      this.btnAction.textContent = 'Kết thúc';
    } else if (state === 'won') {
      this.btnAction.textContent = 'Chơi lại';
    } else {
      this.btnAction.textContent = 'Bắt đầu';
    }
  }

  setTimerText(text) {
    if (this.timerDisplay) {
      this.timerDisplay.textContent = text;
    }
  }

  showWinModal(moves, timeStr) {
    if (this.winMoves) this.winMoves.textContent = moves;
    if (this.winTime) this.winTime.textContent = timeStr;
    if (this.winModal) this.winModal.classList.remove('hidden');
  }

  hideWinModal() {
    if (this.winModal) this.winModal.classList.add('hidden');
  }

  updateFullscreenIcon(isFullscreen) {
    if (this.iconExpand && this.iconCompress) {
      if (isFullscreen) {
        this.iconExpand.classList.add('hidden');
        this.iconCompress.classList.remove('hidden');
      } else {
        this.iconExpand.classList.remove('hidden');
        this.iconCompress.classList.add('hidden');
      }
    }
  }

  setKeycapActive(keyName, active) {
    const keyEl = document.querySelector(`[data-key="${keyName.toLowerCase()}"]`);
    if (keyEl) {
      if (active) {
        keyEl.classList.add('keycap-active');
      } else {
        keyEl.classList.remove('keycap-active');
      }
    }
  }
}

window.UI = UI;
