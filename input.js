// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // event listener for stdin.on ^
  stdin.on("data", handleUserInput);

  // function determining what key presses do
  const handleUserInput = function () {
    stdin.on("data", (key) => {
      // recognizes ctrl c and displayes msg before exiting
      if (key === "\u0003") {
        console.log("Thanks for using me, ciao!");
        process.exit();
      }
    });
  };

  return stdin;
};

module.exports = { setupInput };
