const App = require("./app");
const http = require("http");

http
  .createServer((_, r) => {
    const app = new App();
    debugger;
    r.end("Node.js");
  })
  .listen(3000);
