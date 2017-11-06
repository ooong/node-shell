
process.stdout.write('prompt > ');

var commands = require('./commands.js');


//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

  if (data.indexOf(" ") > -1) {
    var cmd = data.toString().trim().slice(0, data.indexOf(" "));
    var args = data.toString().trim().slice(data.indexOf(" ") +1);
  } else {
    var cmd = data.toString().trim();
  }

  

  if (cmd === 'pwd') {
    commands[cmd]();
  }

  if (cmd === 'ls') {
    commands[cmd]();
  }

  if (cmd === 'echo') {
    commands[cmd](args);
  }

  if (cmd === 'cat') {
    commands[cmd](args);
  }

   // if (cmd === 'date') {
   //  var date = Date();
   //  process.stdout.write(date);
   // }
  

});

