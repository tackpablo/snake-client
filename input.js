const { connect } = require("./client");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // event listener for stdin.on
  stdin.on("data", handleUserInput);

  return stdin;
};

// function determining what key presses do
const handleUserInput = function (key) {
  // recognizes ctrl c and displayes msg before exiting
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  // if key press is w
  if (key === "w") {
    conn.write("Move: up");
  }

  // if key press is a
  if (key === "a") {
    conn.write("Move: left");
  }

  // if key press is s
  if (key === "s") {
    conn.write("Move: down");
  }

  // if key press is d
  if (key === "d") {
    conn.write("Move: right");
  }
};

module.exports = { setupInput, handleUserInput };
