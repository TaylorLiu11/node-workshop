console.log('Hello World');

// My solution
// function sum(n) {
//     let result = 0;
//     result = (n + 1) * n / 2;

//     return result;
// }

function sum(n) {
    return (n + 1) * n / 2;
}

// Caution
function sum(n) {
    // If we don't specify variable this will still work, but it's dangerous!!
    result = 0;
    result = (n + 1) * n / 2;

    return result;
}


console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum(5));
console.log(sum(6));
console.log(sum(10));
console.log(sum(13));
console.log(sum(18));
