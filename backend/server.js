const express = require("express");
const app = express();
var http = require("http").createServer(app);
const port = process.env.PORT || 8000;
var io = require("socket.io")(http);
let dbdata = require("./db");
app.use(express.static("../frontend/build"));
app.get("/api", async (req, res) => {
  //console.log('fetched')
  return res.send(dbdata);
});
app.use((req, res, next) => {
  res.redirect('/'); // Redirect 404 to root
});
io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("submit_operation", data => {
    if (!dbdata.Operations[data.stagename]) {
      dbdata.Operations[data.stagename] = {
        [`${data.uuid}`]: {
          teamid: data.teamid,
          addpoints: data.addpoints
        }
      };
    } else {
      dbdata.Operations[data.stagename][data.uuid] = {
        teamid: data.teamid,
        addpoints: data.addpoints
      };
    }
    dbdata.teamData[data.teamid].score += data.addpoints;
    io.emit("operation_updated", {});
  });
  socket.on("delete_operation", data => {
    dbdata.teamData[data.teamid].score -= data.addpoints;
    delete dbdata.Operations[data.stagename][data.uuid];
    io.emit("operation_updated", {});
  });
});

http.listen(port, function() {
  console.log(`listening on *:${port}`);
});
