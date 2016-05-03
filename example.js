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
    pelcod.up(up)
                .left(left)
                .down(!up)
                .right(!left)
                .setPanSpeed(2)
                .setTiltSpeed(0)
                .send();

    pelcod.stop().send();
	process.exit(0);
});

