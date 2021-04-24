const serialPort = require("serial-node");
const serialList = new serialPort().list;

const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const inp_out = require("console-read-write");
const fs = require("fs");

const serial = new serialPort();

const getPortsList = async () => {
  const ports = await SerialPort.list();
  ports.forEach((port) => {
    var portInfo = {
      portPath: port.path,
      portManufacturer: port.manufacturer,
    };
    console.log("Port:", portInfo);
  });
};

getPortsList().then(async () => {
  var a = "COM" + (await inp_out.ask("Enter the port Number:"));
  console.log(`You are connecting to ${a}`);

  serial.use(a, {
    callbackRead: (args) => {
      const read = args.value.trim() || "";
      if (read) {
        console.log(read);
      }
    },
  });
  serial.read(true);
});
