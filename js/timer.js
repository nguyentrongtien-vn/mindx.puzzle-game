class Timer {
  constructor(onTick) {
    this.seconds = 0;
    this.timerId = null;
    this.onTick = onTick;
  }

  start() {
    this.reset();
    if (this.onTick) this.onTick(this.formatTime(this.seconds));

    this.timerId = setInterval(() => {
      this.seconds++;
      if (this.onTick) {
        this.onTick(this.formatTime(this.seconds));
      }
    }, 1000);
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  reset() {
    this.stop();
    this.seconds = 0;
    if (this.onTick) {
      this.onTick(this.formatTime(this.seconds));
    }
  }

  getSeconds() {
    return this.seconds;
  }

  formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const pad = (num) => num.toString().padStart(2, '0');
    return `${pad(mins)}:${pad(secs)}`;
  }
}

window.Timer = Timer;
