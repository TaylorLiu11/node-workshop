// 請問下列程式碼印出的順序為何？

function syncF() {
    console.log(1);

    setTimeout(() => {
        console.log(2);
    }, 0);
    console.log(3);
}

console.log(4);
syncF();
console.log(5);


// 4 => 1 => 3 => 5 => 2

// 因為第 12 行是第一個被執行，再來是第 3 行的function，第 4 行被執行了，第 7 行被放進 queue 等待，
// 然後是第 9 行，最後是第 5 行。當 stack 沒東西以後第 7 行被event loop 從 queue 搬去 stack 執行。