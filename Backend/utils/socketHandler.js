module.exports = (io, socket) => {
  socket.on('addTask', (task) => {
    io.emit('taskUpdated', task); // Emit task to all clients
  });
};
