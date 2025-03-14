// engine/TimeManager.js
class TimeManager {
  constructor() {
    this.currentTime = {
      quarter: 0,
      hour: 0,
      day: 0,
      month: 1,
      year: 0
    };
    this.gameTime = 0;
  }

  timeRollOver(addedTime) {
    let rollOverH = 0, rollOverD = 0, rollOverM = 0, rollOverY = 0;
    const newTotalQ = this.currentTime.quarter + addedTime.quarter;
    rollOverH = newTotalQ / 4;
    this.currentTime.quarter = newTotalQ % 4;
    const newTotalH = this.currentTime.hour + addedTime.hour + rollOverH;
    rollOverD = newTotalH / 12;
    this.currentTime.hour = newTotalH % 12;
    const newTotalD = this.currentTime.day + addedTime.day + rollOverD;
    this.currentTime.day = newTotalD % 30;
  }

  autoProgress(speed = 1) {
    timeRollOver({ qarter: 1 * speed });
  }
}

export default TimeManager;