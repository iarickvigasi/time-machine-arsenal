var stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode( true );

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding( 'utf8' );

// on any data into stdin
stdin.on( 'data', function( key ){
  // ctrl-c ( end of text )
  if ( key === '\u0003' ) {
    process.exit();
  }
  // write the key to stdout all normal like
  process.stdout.write( key );
});

// var keypress = require('keypress');
// var OmxManager = require('omx-manager');
// var manager = new OmxManager(); // OmxManager
// // var camera = manager.create('video.avi'); // OmxInstance
// // camera.play(); // Will start the process to play videos
//
// var indexCamera = playIndex()
//
// // Play initial
// function playIndex() {
//   manager.enableNativeLoop();
//   var camera = manager.create('index_rotate.mov', {'--loop': true}); // OmxInstance
//   camera.play(); // Will start the process to play videos
//   return camera;
// }
//
// function play1789() {
//   indexCamera.stop();
//   var camera = manager.create('1789_rotate.mov');
//   camera.play();
//   return camera;
// }
//
// function play1850() {
//   indexCamera.stop();
//   var camera = manager.create('1850_rotate.mov');
//   camera.play();
//   return camera;
// }
//
// function play1900() {
//   indexCamera.stop();
//   var camera = manager.create('1900_rotate.mov');
//   camera.play();
//   return camera;
// }
//
// function play1950() {
//   indexCamera.stop();
//   var camera = manager.create('1900_rotate.mov');
//   camera.play();
//   return camera;
// }
//
// // make `process.stdin` begin emitting "keypress" events
// keypress(process.stdin);
// // listen for the "keypress" event
// process.stdin.on('keypress', function (ch, key) {
//   console.log('got "keypress"', key);
//
//   if (key.name == 'a') {
//     var camera = play1789()
//     camera.on('end', playIndex);
//   }
//   else if (key.keyCode == 's') {
//     var camera = play1850()
//     camera.on('end', playIndex);
//   }
//   else if (key.name == 'd') {
//     var camera = play1900()
//     camera.on('end', playIndex);
//   }
//   else if (key.name == 'f') {
//     var camera = play1950()
//     camera.on('end', playIndex);
//   }
//
//   if (key && key.ctrl && key.name == 'c') {
//     process.stdin.pause();
//   }
// });
//
// process.stdin.setRawMode(true);
// process.stdin.resume();
