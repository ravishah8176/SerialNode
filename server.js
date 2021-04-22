const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const inp_out = require("console-read-write");

const getPortsList = async () => {
  const ports = await SerialPort.list();

  ports.forEach((port) => {
    var portInfo = {
      portPath: port.path,
      portManufacturer: port.manufacturer,
    };
    console.log("Port:", portInfo);
  });

  // Function to take input from the user about the port to communicate
  async function main() {
    return await inp_out.ask("Enter the port Number:");
  }

  async function print() {
    var a = "COM" + (await main());
    console.log(`${a}`);

    const port = new SerialPort(`${a}`);

    const parser = port.pipe(new Readline({ delimiter: "\n" }));
    parser.on("data", console.log);
  }
  print();
};
getPortsList();
