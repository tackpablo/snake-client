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

  return conn;
};

module.exports = { connect };
