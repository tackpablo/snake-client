const net = require("net");

const config = {
  host: "165.227.47.243", // IP address here,
  port: 50541, // PORT number here,
};

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection(config);

  // connect handler that displays msg once connected
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
  });

  // to see what the passed in data
  conn.on("data", (data) => {
    console.log("data: ", data);
  });

  // sending name data
  conn.on("connect", () => {
    conn.write("Name: PTA");
  });

  //   // sending move up command
  //   conn.on("connect", () => {
  //     conn.write("Move: up");

  //     // setInterval to move up snake every 50ms
  //     setInterval(() => {
  //       conn.write("Move: up");
  //     }, 50);

  //     // successive msgs once moving up
  //     console.log("Moving up");
  //     console.log("Moving up in the world");

  //     // delayed msgs once moving up
  //     setTimeout(() => {
  //       console.log("Moving up");
  //     }, 50);

  //     setTimeout(() => {
  //       console.log("Moving up in the world");
  //     }, 100);
  //   });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };

// Notes
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
