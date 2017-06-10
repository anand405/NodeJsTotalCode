var http = require("http");
var app = http.createServer(handler);
var io = require('socket.io')(app);
var fs = require("fs");

function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
        function(err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}
app.listen(5000);
io.on('connection', function(socket) {
    console.log("User Connected");
    //   socket.emit('news', { hello: 'world' });
    //   socket.on('my other event', function (data) {
    //     console.log(data);
    //   });
});