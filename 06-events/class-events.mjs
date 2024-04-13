import EventMitter from 'events';

class Post extends EventMitter {
    constructor(author, text) {
        super();
        this.author = author;
        this.text = text;
        this.likesQty = 0;
        this.on('likePost', (username) => {
            console.log(`${username} liked your post!`);
        });
        this.on('error', (error) => console.error(error));
    }
    like(userName) {
        if (!userName) {
            return this.emit(
                'error',
                new Error('No username in the like requests!')
            );
        }
        this.likesQty++;
        this.emit('likePost', userName);
    }
}

const myPost = new Post('Pavlo', 'My new one post');

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);
myPost.like('Jhon');
setTimeout(() => myPost.like(), 1000);
setTimeout(() => myPost.like('Bob'), 2000);
// console.log(myPost.likesQty);
