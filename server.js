const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const inp_out = require("console-read-write");

const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = 3000;

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
  const portConnect = new SerialPort(`${a}`);
  const parser = portConnect.pipe(new Readline({ delimiter: "\n" }));
  parser.on("data", (e) => {
    console.log(`${e}`);
  });
});


server.listen(PORT, () =>{
  console.log(`Server is running on port: ${PORT}`);
})