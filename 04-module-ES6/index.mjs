import { temperature, season } from './named-exports.mjs';
import { humidity, isRaining } from './inline-exports.mjs';
import getData from './default-export.mjs';
import DEFAULT_SERVER, {
    USERNAME,
    PASSWORD as MYPASSWORD,
} from './mixed-exports.mjs';

console.log(season);
console.log(temperature);
isRaining || console.log(humidity);

let array = [];

getData('https://jsonplaceholder.typicode.com/comments?postId=1').then((data) =>
    array.push(data)
);

setTimeout(() => console.log(array), 5000);

console.log(DEFAULT_SERVER);
console.log(USERNAME, MYPASSWORD);
