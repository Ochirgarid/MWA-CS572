// Straight forward

const {resolve4} = require('dns');

const url = "www.miu.edu";

resolve4(url, (err, data) => {
    if(!err) {
        console.log("Straight forward : " + data);
    } else {
        console.log("Straight forward error : " + err);
    }
})

// promisify
const { promisify } = require('util');
const resolve4Promise = promisify(resolve4);

(async function () {
    result = await resolve4Promise(url);
    console.log("Promisify : " + result);
})();