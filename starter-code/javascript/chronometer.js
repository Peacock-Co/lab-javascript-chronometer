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
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    if (!this.currentTime) {
      return 0;
    }
    return seconds;
  }

  twoDigitsNumber(value) {
    return ("0" + value).slice(-2);
  }

  stopClick() {
    return clearInterval(this.intervalId);
  }

  resetClick() {
    if (this.currentTime > 0) {
      return (this.currentTime = 0);
    }
  }

  splitClick() {}
}
