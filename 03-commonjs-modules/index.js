const { myName, myHobbies, myNumber } = require('./multiple-exports');
const {
    myName: mySecondName,
    myFriendsName,
    myGreatHobbies,
} = require('./export-and-import');
const greetingFn = require('./my-modules/single-exports');

console.log(myName);
console.log(myHobbies);
console.log(myNumber);

myHobbies.push('bee keeping');

greetingFn(myName);

console.log(mySecondName);
console.log(myFriendsName);
console.log(myGreatHobbies);
