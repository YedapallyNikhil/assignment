var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
});
// add socket router
var socketRout = require("./routes/socketRouter")(io).router;
app.use("/api/v1", socketRout);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", function (req, res) {
    res.render("index");
});
io.on("connection", function (socket) {
    console.log(socket.id);
});
server.listen(3001, function () {
    console.log("Server is running");
});
