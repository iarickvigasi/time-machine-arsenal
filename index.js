var InputEvent = require('input-event');

var input = new InputEvent('/dev/input/event4');

var keyboard = new InputEvent.Keyboard(input);
//
// keyboard.on('keyup'   , console.log);
// keyboard.on('keydown' , console.log);
keyboard.on('keypress', handleKeyPress);

var OmxManager = require('omx-manager');
var manager = new OmxManager(); // OmxManager
// var camera = manager.create('video.avi'); // OmxInstance
// camera.play(); // Will start the process to play videos

var indexCamera;
var isPlaying = false;
// Play initial
function playIndex() {
  isPlaying = false;
  manager.enableNativeLoop();
  indexCamera = manager.create('index_rotate.mov', {'--loop': true}); // OmxInstance
  indexCamera.play(); // Will start the process to play videos
}

function play1789() {
  if (!isPlaying) {
    isPlaying = true;
    indexCamera.stop();
    indexCamera = manager.create('1789_rotate.mov');
    indexCamera.play();
    indexCamera.on('end', playIndex);
  }
}

function play1850() {
  if (!isPlaying) {
    isPlaying = true;
    indexCamera.stop();
    indexCamera = manager.create('1850_rotate.mov');
    indexCamera.play();
    indexCamera.on('end', playIndex);
  }
}

function play1900() {
  if (!isPlaying) {
    isPlaying = true;
    indexCamera.stop();
    indexCamera = manager.create('1900_rotate.mov');
    indexCamera.play();
    indexCamera.on('end', playIndex);
  }
}

function play1950() {
  if (!isPlaying) {
    isPlaying = true;
    indexCamera.stop();
    indexCamera = manager.create('1950_rotate.mov');
    indexCamera.play();
    indexCamera.on('end', playIndex);
  }
}

// listen for the "keypress" event
function handleKeyPress(key) {
  console.log('got "keypress"', key);

  if (key.code == 49) {
    play1789()
  }
  else if (key.code == 50) {
    play1850()
  }
  else if (key.code == 51) {
    play1900()
  }
  else if (key.code == 52) {
    play1950()
  }
}

playIndex()
