const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');

// Create the HTTP server
const server = http.createServer(app);

// Initialize Socket.io with the server
const io = socketio(server);
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname,"public")));
app.get('/', function (req, res) {
    res.send("Hello");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, function () {
    console.log(`Server is running on ${PORT}`);
});
