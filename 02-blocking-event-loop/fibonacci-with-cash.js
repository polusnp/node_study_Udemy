const fs = require('fs');

setTimeout(() => console.log('Timeout'), 0);

const cash = new Map();

function fib(n) {
    return new Promise((resolve, reject) => {
        if (n === 0 || n === 1) {
            return resolve(n);
        }

        if (cash.has(n)) {
            return resolve(cash.get(n));
        }

        setImmediate(() =>
            fib(n - 1).then((fib1) =>
                fib(n - 2).then((fib2) => {
                    cash.set(n, fib1 + fib2);
                    resolve(fib1 + fib2);
                })
            )
        );
    });
}

fib(10).then((res) => console.log(res));
