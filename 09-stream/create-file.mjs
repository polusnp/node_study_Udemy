// node create-file.mjs <filename> <linesqty>
import fs from 'fs';
import path from 'path';

if (!process.argv[2] || !process.argv[3]) {
    console.log('Filename and lines must be supplied as arguments');
    process.exit(0);
}

const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);

if (isNaN(linesQty)) {
    console.log('Lines qty must be a number');
    process.exit(0);
}

const writeStream = fs.createWriteStream(path.join('./files', fileName));

console.log('start', performance.now());

for (let i = 1; i <= linesQty; i++) {
    writeStream.write(`This is the line number ${i} in the generates file\n`);
}

console.log('End', performance.now());
setTimeout(() => console.log('Timeout', performance.now()), 0);

writeStream.end(() =>
    console.log(`Auto generates file ${fileName} was created`)
);
