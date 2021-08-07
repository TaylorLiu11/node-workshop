async function asyncF() {
    console.log(1);
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2);
            resolve();
        }, 0);
    });
    console.log(3);
}

console.log(4);
asyncF();
console.log(5);

// 4 => 1 => 5 => 2 => 3
// 第一個被執行的是第 12 行， 再來是第 13 行的 function，第 2 行被執行，然後第 14 行被執行。
// async function 等待第 5 行被 event loop 從 queue 裡放進 stack 執行完，才繼續執行第 9 行。