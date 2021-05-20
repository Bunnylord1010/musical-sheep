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

var roomlist = [];
//[0] playerlist









server.listen(port, ()=>{
    console.log("server is up on "+port);
})
io.on('connection',(socket)=>{
    socket.on('joined',(data)=>{
        if (roomlist.length == 0){
            var room = [];
            var player =[];
            
            player.push(socket);
            player.push(data.name);
            room.push(player);
            roomlist.push(room);
        }

        var foundroom = false;
        for (var i=0;i<roomlist.length;i++){
            if (roomlist[i].length <= 4 && !foundroom)
            {
                var player = [];
                player.push(socket);
                player.push(data.name);
                roomlist[i].push(player);
                foundroom = true;
            }
        }
        if (foundroom == false){
            var room = [];
            var player =[];
            
            player.push(socket);
            player.push(data.name);
            room.push(player);
            roomlist.push(room);
        }
    });
    
    +socket.on('disconnect', ()=>{
        for (var i=0;i<roomlist.length;i++){
            for (var j=0;j<roomlist[i].length;j++){
                if (roomlist[i] == socket){
                    roomlist.splice(i,1);
                }
            }
        }
    });
});
