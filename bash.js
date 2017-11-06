
//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

   if (cmd === 'pwd') {
    var pwd = process.argv0;
    process.stdout.write(pwd);
   }

   if (cmd === 'date') {
    var date = Date();
    process.stdout.write(date);
   }
  
  process.stdout.write('\nprompt > ');

});

