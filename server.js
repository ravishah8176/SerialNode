const SerialPort = require("serialport");
const inp_out = require("console-read-write");

var a = 0.0;
const getPortsList = async () => {
  const ports = await SerialPort.list();

  ports.forEach((port) => {
    var portInfo = {
      portPath: port.path,
      portManufacturer: port.manufacturer,
    };
    console.log("Port: ", portInfo);
  });

  // Function to take input from the user about the port to communicate
  async function main() {
    return inp_out.ask(await "Enter the port Number: ");
  }

  async function print() {
    a = "COM" + (await main());
    console.log(`${a}`);
    return a;
  }
  return print();
};

console.log(getPortsList());  
