const SerialPort = require("serialport");

var portsList = [];
const getPortsList = async () => {
  const ports = await SerialPort.list();

  ports.forEach((port) => {
    var portInfo = {
      portPath: port.path,
      portManufacturer: port.manufacturer,
    };

    portsList.push(portInfo);
    console.log("Port: ", portInfo);
  });
};

getPortsList();
