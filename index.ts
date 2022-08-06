const express = require("express");

const app = express();

const server = require("http").createServer(app);
const io :any = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
// add socket router
const socketRout = require("./routes/socketRouter")(io).router;

app.use("/api/v1", socketRout);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req:any, res:any) => {
  res.render("index");
});

io.on("connection", (socket:any) => {
  console.log(socket.id);
});

server.listen(3001, () => {
  console.log("Server is running");
});