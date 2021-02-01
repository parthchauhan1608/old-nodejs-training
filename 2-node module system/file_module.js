
const fs = require('fs');
const files = fs.readdirSync('./'); //synchronous method
console.log(files);

fs.readdir('./', function(err, files){
    if (err) console.log('Error',file);
    else console.log('Result',files);
}); //Asynchronous method