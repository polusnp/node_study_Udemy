import fs from 'fs';
import EventEmitter from 'events';

const fileEmitter = new EventEmitter();
const filePath = './first.txt';

fileEmitter.on('writeComplete', () => {
    console.log(`File ${filePath} was written`);
    fs.appendFile('filePath', '\nOne more line', () => {
        fileEmitter.emit('appendComplete');
    });
});

fileEmitter.on('appendComplete', () => {
    console.log(`Apended text to the ${filePath} file`);
    fs.rename('filePath', './rename-first.txt', () => {
        fileEmitter.emit('renameComplete');
    });
});

fileEmitter.on('renameComplete', () => {
    console.log('The file was renamed');
});

fs.writeFile('filePath', 'First file text', () => {
    fileEmitter.emit('writeComplete');
});
