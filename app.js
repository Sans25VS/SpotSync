const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname,"public")));
app.get('/', (req, res) => {
    res.render("index");
});

io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('send-location', (data) => {
        console.log('Location received:', data);
        io.emit('receive-location', data); // Broadcast location to all connected clients
    });
    
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
