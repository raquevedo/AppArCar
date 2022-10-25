const spawn = require("child_process").spawn;

const pythonProcess = spawn('python3',["coordinates.py","Hipólito Yrigoyen 1201, caba"]);

pythonProcess.stdout.on('data', (data) => {
	console.log(data.toString())
});
