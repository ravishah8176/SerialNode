const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const inp_out = require("console-read-write");
const fs = require("fs");

const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = 3000;

fs.readFile("analogData.txt", (err, data) => {
  if (err) throw err;
  if (data.toString()) {
    console.log(data.toString());
  }
});

// server.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });


