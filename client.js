const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "", // IP address here,
    port: "", // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // connect handler that displays msg once connected
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
  });

  // sending name data
  conn.on("connect", () => {
    conn.write("Name: PTA");
  });

  // // sending move up command
  // conn.on("connect", () => {
  //   conn.write("Move: up");

  //   // setInterval to move up snake every 50ms
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 50);

  //   // successive msgs once moving up
  //   console.log("Moving up");
  //   console.log("Moving up in the world");

  //   // delayed msgs once moving up
  //   setTimeout(() => {
  //     console.log("Moving up");
  //   }, 50);

  //   setTimeout(() => {
  //     console.log("Moving up in the world");
  //   }, 100);
  // });

  return conn;
};

module.exports = { connect };

// Notes
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
