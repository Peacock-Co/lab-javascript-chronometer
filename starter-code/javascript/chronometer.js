class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    setInterval(() => {
      return this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    var seconds = this.currentTime - this.minutes * 60;
    if (!this.currentTime) {
      return 0;
    } else if (this.currentTime > 0) {
      return this.currentTime++;
    }
    return seconds;
  }
  twoDigitsNumber() {}
  stopClick() {}
  resetClick() {}
  splitClick() {}
}
