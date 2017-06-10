const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'myapp'});
log.info('hi');
log.warn({lang: 'en'}, 'Welcome');

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });
    cluster.on('exit', (worker, code, signal) => {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    var app = http.createServer((req, res) => {
        res.writeHead(200);
        console.log(process.pid);

        for(var i=0;i<10000000000;i++){}
        res.end('<h1>Welcome I am running on process '+process.pid+'</h1>');
    });

    var server = app.listen(8000, function () {
        console.log('Process ' + process.pid + ' is listening to all incoming requests');
    });

}
