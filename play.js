const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

// // connect handler that displays msg once connected
// conn.on("connect", () => {
//   // code that does something when the connection is first established
//   console.log("you ded cuz you idled");
// });

// console.log("Connecting ...");
// connect();

// message sent while connecting
console.log("Connecting ...");
// function to connect running
connect();

// function to setup input running
setupInput();
