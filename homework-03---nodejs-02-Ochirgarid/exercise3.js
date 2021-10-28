const { cpus } = require('os');

function checkSystem() {
    let minMem = 4;
    let minCores = 2 
    console.log("Checking your system...");

    let checkSystemPromise = new Promise((resolve, resp) => {
        let logText = [];
        if(process.memoryUsage().heapTotal / (1024 ** 2) < minMem) {
            logText.push("This app needs at least 4 GB of RAM");
        }
        if (cpus().length < minCores) {
            logText.push("Processor is not supported");
        }
        if (logText.length == 0){
            logText.push("System is checked successfully.");
        }

        resolve(logText.join("\n"));
    });

    checkSystemPromise.then(console.log, [minMem, minCores]);
}

checkSystem();