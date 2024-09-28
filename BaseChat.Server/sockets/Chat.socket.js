const { Server } = require('socket.io')

module.exports = (server) => {
    const io = new Server(server, { cors: true })
    io.on('connection', async (socket) => {
        console.log('a client connected');
        socket.join('lobby')
        socket.broadcast.to('lobby').emit('message', `a client connected to the lobby. ${socket.id}`)
        //Emit Listeners
        socket.on('disconnect', () => {
            console.log('client disconnected');
        });
        socket.on('message', (msg) => {
            console.log('message: ', msg);
            io.in('lobby').emit('message', msg);

        });
    })
    console.log("socket.io online");
}