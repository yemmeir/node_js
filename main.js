//console.log("hello nodejs");

console.log("Running the project...");

const http = require("http");
//create a server object:
http
  .createServer((req, res) => {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(3000); //the server object listens on port 8080
