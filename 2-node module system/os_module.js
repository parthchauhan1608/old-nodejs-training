
const os = require('os');

let total = os.totalmem();
let free = os.freemem();
console.log(`Total memory: ${total}`);
console.log(`Free memory: ${free}`);
let cpu = os.cpus();
console.log(cpu);
let bit = os.arch(); //return cpu processor bit x64 or x32 like
console.log(bit);
console.log(os.endianness());