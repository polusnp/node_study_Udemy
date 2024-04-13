const fs = require('fs');
const fspromise = require('fs/promises');
const { performance } = require('perf_hooks');

// const performanceCheck = performance.now().toFixed(2);

// // callback style fs moduleperformance.now().toFixed(2)
// fs.readFile('./file.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err, performanceCheck);
//     } else {
//         console.log(data, performanceCheck);
//     }
// });

// // promise style fs module
// fspromise
//     .readFile('./file2.txt', 'utf-8')
//     .then((data) => console.log(data, performanceCheck))
//     .catch((error) => console.log(error, performanceCheck));

// // promise style fs module by async await
// async function readFile() {
//     try {
//         const data = await fspromise.readFile('./file2.txt', 'utf8');
//         console.log(data, performanceCheck);
//     } catch (error) {
//         console.log(error, performanceCheck);
//     }
// }
// readFile();

// // sync style fs module
// try {
//     const data = fs.readFileSync('./file3.txt', 'utf-8');
//     console.log(data, performanceCheck);
// } catch (error) {
//     console.log(error, performanceCheck);
// }

// // write data to file

// const dataToWrite = 'from node.js!';

// fs.writeFile('./file.txt', dataToWrite, (err) => {
//     console.log(err);
// });

// const newData = 'new data';

// fspromise
//     .writeFile('./file.txt', newData)
//     .then(() => console.log('done'))
//     .catch((error) => console.log(error));

// try {
//     fs.writeFileSync('./file2.txt', newData);
//     console.log('done');
// } catch (error) {
//     console.log(error);
// }

// fs.unlink('./file.txt', (error) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log('file deleted');
// });

// fspromise
//     .unlink('./file2.txt')
//     .then(() => console.log('file 2 deleted'))
//     .catch((error) => console.log(error));

async function deletedFile() {
    try {
        await fspromise.unlink('./file.txt');
        console.log('file test deleted');
    } catch (error) {
        console.log(error);
    }
}

// deletedFile();

try {
    fs.unlinkSync('./file3.txt');
    console.log('sync fil was deleted');
} catch (error) {
    console.log(error);
}
