const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "", // IP address here,
    port: "", // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;
