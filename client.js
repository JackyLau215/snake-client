const net = require('net');
const { IP, PORT } = require('./constants');


const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT

  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JL");
  })

  // conn.on('connect', (data) => {
  //   conn.write("Move: up");
  //   conn.write("Move: up");
  //   conn.write("Move: up");
  //   conn.write("Move: up");
  //   conn.write("Move: left");
  //   conn.write("Move: left");
  //   conn.write("Move: up");

  // })
  
  conn.on('data', (data) => {
    console.log(data);
  })


  return conn;
}

module.exports = { connect };