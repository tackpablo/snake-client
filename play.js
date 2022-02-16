const net = require("net");
const { connect } = require("./client");

conn.on("connect", () => {
  // code that does something when the connection is first established
  console.log("you ded cuz you idled");
});

console.log("Connecting ...");
connect();
