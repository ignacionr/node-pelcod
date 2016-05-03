var PelcoD = require('./pelcod');

var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/ttyUSB0", {
  baudrate: 2400,
  parity: 'none',
  dataBits: 8,
  stopBits: 1,
});

var up = false;
var left = true;

var stream = serialPort.on("open", function(){

    var pelcod = new PelcoD(stream)

    pelcod.stop().send();
	process.exit(0);
});

