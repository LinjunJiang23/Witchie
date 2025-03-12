// /engine.tsx

class Engine {
  constructor() {
	this.timestamp = performance.now();
	this.player;
	this.timeManager;
	this.uiManager;
	this.eventManager;
	this.sceneManager;
	this.characterManager;
	this.isRunning = false;
  }
	
  gameLoop(timestamp) {
	if (this.isRunning) {
	  this.timeManager.update(timetamp);
	  this.timestamp = timestamp;
	}
  }
	
  startGame() {
	this.isRunning = true;
	requestAnimationFrame(gameLoop);
  }
	
  pauseGame() {
	this.isRunning = false;
  }
	
  stopGame() {
	this.isRunning = false;
  }
};