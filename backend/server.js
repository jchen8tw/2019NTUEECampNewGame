const express = require("express");
const app = express();
var http = require("http").createServer(app);
const port = process.env.PORT || 8000;
var io = require("socket.io")(http);
let data = require("./db");
app.use(express.static("../frontend/build"));
app.get("/api", async (req, res) => {
    //console.log('fetched')
  return res.send(data);
});
io.on("connection", function(socket) {
  console.log("a user connected");
  socket.emit('hehe');
});
io.on("haha", function(socket) {
  console.log('haha');
});

http.listen(port, function() {
  console.log(`listening on *:${port}`);
});
