const http = require('http');
const {URLSearchParams} = require('url')

const { fork } = require('child_process');
const { Subject } = require('rxjs');

const { fibonacci } = require('./fibonacci.js')


const port = 4000;
const fibSub$ = new Subject();

fibSub$.subscribe({
    next: (serverObj) => {
        let urlStr = serverObj.req.url;
        if(urlStr.endsWith("favicon.ico")) {
            return;
        }
        
        // console.log(urlStr)
        let params = new URLSearchParams(urlStr.split("?")[1]);
        // console.log(params)
        const n = parseInt(params.get('n'))
        // console.log(n)
        const childProcess = fork('fibonacci.js');
        childProcess.send(n);
        childProcess.on('message', (fibN) => {
            serverObj.res.writeHead(200, {'Content-Type': 'text/plain'});
            serverObj.res.end(`FIB(${n}) = ${fibN}`);
        });
    }
});

const server = http.createServer(function (req, res) {
    fibSub$.next({req, res});
});

server.listen(port, () => console.log(`listening port=${port}`));