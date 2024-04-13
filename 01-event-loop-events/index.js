const fs = require('fs');
const dns = require('dns');

const info = (text) => {
    console.log(text, performance.now().toFixed(2));
};

console.log('Program start');

//Close events
fs.writeFile('./test.txt', 'Hello', () => info('File Written'));

//Promises
Promise.resolve().then(() => info('Promise1'));

//Next Tick
process.nextTick(() => info('NextTick1'));

//SetImmediate (Check event)
setImmediate(() => info('immediate1'));

// Timeouts events
setTimeout(() => info('Timeout 1', 0));
setTimeout(() => {
    process.nextTick(() => info('NextTick2'));
    info('Timeout 2');
}, 100);

// Intervals

let intervalCount = 0;
const intervalId = setInterval(() => {
    info(`Interval ${(intervalCount += 1)}`);
    if (intervalCount === 2) clearInterval(intervalId);
}, 50);

// I/O Events
dns.lookup('localhost', (err, address, family) => {
    info('DNS1 localhost');
    Promise.resolve().then(() => info('Promise2'));
    process.nextTick(() => info('nextTick3'));
});

console.log('Program end');
