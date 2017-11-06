
var fs = require('fs');

module.exports = {

	pwd: function () {
	    var directory = process.env.PWD;
	    process.stdout.write(directory);
		process.stdout.write('\nprompt > ');
	},

	echo: function(arg) {
		console.log(arg);
	},

	ls: function() {

		fs.readdir('.', function(err, files) {
	  	if (err) throw err;
	  		files.forEach(function(file) {
	    	process.stdout.write(file.toString() + "\n");
	  		})
	  	process.stdout.write("prompt > ");
	});
	},

	cat: function(filename) {
		fs.readFile(filename, 'utf8', (err, data) => {
			if (err) throw err;
			console.log(data);
		});
	},

	head: function(filename) {

	},

	tail: function(filename) {

	}


}


