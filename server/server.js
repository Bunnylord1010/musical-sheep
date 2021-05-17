const path = require("path")
const http = require("http")
const express = require("express")
const socketIO = require ("socket.io")
const publicpath = path.join(__dirname, "/../public");
const port = process.env.PORT || 1273;
let app = express ();
let server = http.createServer(app);
let io = socketIO(server);
app.use(express.static(publicpath));
server.listen(port, ()=>{
    console.log("server is up on "+port);
})