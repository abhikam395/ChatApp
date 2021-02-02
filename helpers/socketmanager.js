
function setUpSocket(http){
    const io = require('socket.io')(http, {
        cors: {
            origin: "*",
        }
    });
    io.on('connection', (socket) => {
        console.log('no of connection' + socket.client.conn.server.clientsCount);
        socket.on('message', function(message){
            console.log('nMessage')
            io.emit('message', message)
        })
        socket.on('disconnect', () => {
            console.log('no of connection' + socket.client.conn.server.clientsCount);
            console.log('user disconnected');
        });
    })
}

module.exports = setUpSocket;