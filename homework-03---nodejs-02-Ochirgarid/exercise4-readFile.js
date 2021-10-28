const fs = require('fs');
const { join } = require('path');


const port = 8082;
const pathToRead = "Beginner Chess Strategy Lesson-oCmXsjjSlYo.mp4"


require('http').createServer(function (req, res) {
    console.log("[success] entered in !");
    resHandler(res);
}).listen(port, () => console.log(`listening port=${port}`));

var resHandler = (res) => {
    fs.readFile(join(__dirname, pathToRead), 'utf-8', (err, data) => {
        console.log("[success] read file!");
        res.writeHead(200, { 'Content-Type': 'video/mp4' });
        res.end(data);
    });
}