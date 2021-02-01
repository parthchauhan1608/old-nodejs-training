
let url = "http://module.io/logger"; 

function log(message){
    // send an HTTP request
    console.log(message);
}

module.exports.log = log;
module.exports.url1 = url;

//module.exports = log; //if we want to export single function or object