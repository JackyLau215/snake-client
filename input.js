let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function (data) {
    if (data === '\u0003') {
      process.exit();
    } else if (data === "w") {
        conn.write("Move: up");
    } else if (data === "a") {
        conn.write("Move: left");
    } else if (data === "s") {
        conn.write("Move: down");
    } else if (data === "d") {
        conn.write("Move: right");
    } else if (data === "r") {
      conn.write("Say: YoYoYo");
    }
  }
    stdin.on('data', handleUserInput);
}

module.exports = { setupInput };