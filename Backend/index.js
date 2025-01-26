const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const socketHandler = require('./utils/socketHandler');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

// Connect to MongoDB
connectDB();

io.on('connection', (socket) => {
  console.log('A user connected');
  socketHandler(io, socket);
});

server.listen(9000, () => console.log('Server running on http://localhost:9000'));
