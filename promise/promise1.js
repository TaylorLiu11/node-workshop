// Promise 是一個表示非同步運算的「最終」完成或失敗的物件。
//   最終成功
//   最終失敗

//   new Promise
let doWork = function (job, timer, isFinished) {
    // Object - new Promise()
    // Constructor - pass in a function that contains two parameters
    // Normally will be (resolve, reject)

    return new Promise((resolve, reject) => {
        // Async
        console.log("in promise");
        setTimeout(() => {
            let dt = new Date();
            if (isFinished) {
                // succeed
                resolve(`在 ${dt.toISOString()} 完成${job}了`);

            } else {
                // failed
                reject(`${job}失敗囉QQ`);

            }
        }, timer);
    });
};

let dt = new Date();
console.log(`在 ${dt.toISOString()} 開始工作...`);
// 刷牙 -> 吃早餐 -> 寫功課

let job1 = doWork("刷牙", 3000, true);
console.log(job1);
job1.then(
    function (resolve) {
        console.log("第 1 個函式被呼叫", resolve);
    },
    function (reject) {
        console.log("第 2 個函式被呼叫", reject);
    }
);