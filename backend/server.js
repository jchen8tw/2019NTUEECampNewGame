const express = require("express");
const app = express();
const uuid = require("uuid/v4");
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
  res.redirect("/"); // Redirect 404 to root
});
io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("get_operations", data => {
    //console.log(dbdata.Operations[data.stagename]);
    socket.emit("operations_gotten", dbdata.Operations[data.stagename]);
  });
  socket.on("submit_operation", data => {
    /*
    data
    {
         teamid: parseInt(this.teaminput.current.value),
        addpoints: parseInt(this.addpointsinput.current.value),
        stagename: this.props.match.params.stagename,
        time: new Date()
    } */
    console.log(data);
    const this_uuid = uuid();
    const this_time = new Date();
    if (!dbdata.Operations[data.stagename]) {
      dbdata.Operations[data.stagename] = {
        [`${this_uuid}`]: {
          teamid: data.teamid,
          addpoints: data.addpoints
        }
      };
    } else {
      dbdata.Operations[data.stagename][this_uuid] = {
        teamid: data.teamid,
        addpoints: data.addpoints
      };
    }
    dbdata.teamData[data.teamid].score += data.addpoints;
    //TODO need to add tweets
    dbdata.Tweets.push({
        teamName: 'team'+data.teamid,
        StageName: data.stagename,
        Points: data.addpoints,
        time: this_time
    })
    if(dbdata.Tweets.length > 4){
        dbdata.Tweets.shift();
    }
    //console.log(this_uuid);
    io.emit("operation_added", {
      [`${this_uuid}`]: {
        teamid: data.teamid,
        addpoints: data.addpoints,
        stagename: data.stagename
      }
    });
    io.emit("score_update", {
      teamData: dbdata.teamData
    });
    io.emit('tweets_updated',{
        teamName: 'team'+data.teamid,
        StageName: data.stagename,
        Points: data.addpoints,
        time: this_time
    })
  });
  socket.on("delete_operation", data => {
    dbdata.teamData[data.teamid].score -= data.addpoints;
    delete dbdata.Operations[data.stagename][data.uuid];
    io.emit("operation_deleted", { uuid: data.uuid });
    io.emit("score_update", {
      teamData: dbdata.teamData
    });
  });
  socket.on("get_dashboard", () => {
    socket.emit("dashboard_got", {
      Commissions: dbdata.Commissions,
      teamData: dbdata.teamData,
      Tweets: dbdata.Tweets
    });
  });
  socket.on('get_commissions',()=>{
      socket.emit('commissions_got',{Commissions: dbdata.Commissions});
  })
  socket.on('update_commission_display',data =>{
      //the commission name
      dbdata.Commissions[data].show = !dbdata.Commissions[data].show;
      io.emit('commission_display_updated',data);
  })
});

http.listen(port, function() {
  console.log(`listening on *:${port}`);
});
