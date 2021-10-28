const fs = require('fs');
const { join } = require('path');


const port = 8083;
const pathToRead = "Beginner Chess Strategy Lesson-oCmXsjjSlYo.mp4"


require('http').createServer(function (req, res) {
    console.log("[success] entered in !");
    resHandler(res);
}).listen(port, () => console.log(`listening port=${port}`));

var resHandler = (res) => {
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    fs.createReadStream(join(__dirname, pathToRead)).pipe(res);
}

