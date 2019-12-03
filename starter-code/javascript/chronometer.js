class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    let counter = 0;
    setInterval(() => {
      return counter++;
    }, 1000);
  }
  getMinutes() {}
  getSeconds() {}
  twoDigitsNumber() {}
  stopClick() {}
  resetClick() {}
  splitClick() {}
}
