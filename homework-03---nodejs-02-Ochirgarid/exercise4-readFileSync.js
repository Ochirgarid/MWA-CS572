const fs = require('fs');
const { join } = require('path');


const port = 8081;
const pathToRead = "Beginner Chess Strategy Lesson-oCmXsjjSlYo.mp4"


require('http').createServer(function (req, res) {
    console.log("[success] entered in !");
    resHandler(res);
}).listen(port, () => console.log(`listening port=${port}`));

var resHandler = (res) => {
    const f = fs.readFileSync(join(__dirname, pathToRead), 'utf-8');
    console.log("[success] read file!");

    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    res.end(f);
    return "done";
}