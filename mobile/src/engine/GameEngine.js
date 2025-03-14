// /engine/GameEngine.js
import PlayerManager from './PlayerManager';
import TimeManager from './TimeManager';

class GameEngine {
  constructor() {
	this.timestamp = performance.now();
	this.playerManager;
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
    this.playerManager = new PlayerManager();
    this.timeManager = new TimeManager();
	  requestAnimationFrame(gameLoop);
  }
	
  pauseGame() {
	  this.isRunning = false;
  }
	
  stopGame() {
	  this.isRunning = false;
  }
}

export default GameEngine;