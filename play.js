const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "", // IP address here,
    port: "", // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

conn.on("connect", () => {
  // code that does something when the connection is first established
  console.log("you ded cuz you idled");
});

console.log("Connecting ...");
connect();
