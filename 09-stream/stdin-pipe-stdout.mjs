import stream from 'stream';
import fs from 'fs';

const upperCaseStream = new stream.Transform({
    transform: function (chunk, encoding, callback) {
        const upperCased = chunk.toString().toUpperCase();
        callback(null, upperCased);
    },
});

const reverseStringStream = new stream.Transform({
    transform: function (chunk, encoding, callback) {
        const arrayOfChars = chunk.toString().split('');
        const lastChar = arrayOfChars.pop();
        const reverseString = arrayOfChars.reverse().concat(lastChar).join('');
        callback(null, reverseString);
    },
});

process.stdin
    .pipe(upperCaseStream)
    .pipe(reverseStringStream)
    .pipe(process.stdout);

// //Pipe to file
// const filePath = './stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// //Pipe to stdout
// process.stdin.pipe(process.stdout);
