// engine/PlayerManager.js

class PlayerManager {
  constructor() {
    this.energy = 100;
    this.stress = 0; //沦惑
    this.power = 1;
  }
  
  changeStat(type, value) {
    if (this[type]) this[type] += value;
  }

  setStat(type, value) {
    if (this[type]) this[type] = value;
  }
}

export default PlayerManager;