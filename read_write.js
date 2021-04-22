const io = require("console-read-write");

async function main() {
  // Simple readline scenario
  io.write("I will echo whatever you write!");
  io.write(await io.read());
  const a = await io.read();
  io.write(a);

  // Simple question scenario
  io.write(`hello ${await io.ask("Who are you?")}!`);
}

main();
