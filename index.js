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

var indexCamera = playIndex()

// Play initial
function playIndex() {
  manager.enableNativeLoop();
  var camera = manager.create('index_rotate.mov', {'--loop': true}); // OmxInstance
  camera.play(); // Will start the process to play videos
  return camera;
}

function play1789() {
  indexCamera.stop();
  var camera = manager.create('1789_rotate.mov');
  camera.play();
  return camera;
}

function play1850() {
  indexCamera.stop();
  var camera = manager.create('1850_rotate.mov');
  camera.play();
  return camera;
}

function play1900() {
  indexCamera.stop();
  var camera = manager.create('1900_rotate.mov');
  camera.play();
  return camera;
}

function play1950() {
  indexCamera.stop();
  var camera = manager.create('1900_rotate.mov');
  camera.play();
  return camera;
}

// listen for the "keypress" event
function handleKeyPress(key) {
  console.log('got "keypress"', key);
  //
  // if (key.name == 'a') {
  //   var camera = play1789()
  //   camera.on('end', playIndex);
  // }
  // else if (key.keyCode == 's') {
  //   var camera = play1850()
  //   camera.on('end', playIndex);
  // }
  // else if (key.name == 'd') {
  //   var camera = play1900()
  //   camera.on('end', playIndex);
  // }
  // else if (key.name == 'f') {
  //   var camera = play1950()
  //   camera.on('end', playIndex);
  // }
  //
  // if (key && key.ctrl && key.name == 'c') {
  //   process.stdin.pause();
  // }
}
