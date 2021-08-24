const arr = [1, 3, 5, 2];

(async function () {
    for (let i = 0; i < arr.length; i++) {
        await wait(arr[i]);
    }
    console.log('done');
})();

function wait(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(console.log(`${num} second pass`));
        }, num * 1000);
    });
}
