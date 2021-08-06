const btn = document.getElementById('button');
const errMessage = document.getElementById('alert');
const errorMessage = document.getElementById('errorMessage');

// Color variables
let pink = 'bg-pink-500';
let red = 'bg-red-500';
let orange = 'bg-orange-500';
let yellow = 'bg-yellow-300';
let green = 'bg-green-500';
let blue = 'bg-blue-500';
let purple = 'bg-purple-500';
let gray = 'bg-gray-500';

// ChangeColor function
const changeColor = (currentColor, newColor, timer, error = false) => {
    return new Promise((res, rej) => {
        setTimeout(function () {
            document.body.classList.remove(currentColor);
            document.body.classList.add(newColor);

            if (!error) {
                res();
            } else {
                rej('Something went wrong:((');
            }
        }, timer);
    });
};

async function pressButton() {
    // Set button to be disabled
    btn.disabled = true;
    btn.classList.remove('hover:scale-105');
    btn.classList.remove('hover:shadow-lg');
    btn.classList.add('cursor-not-allowed');

    try {
        await changeColor(gray, pink, 800);
        await changeColor(red, orange, 300);
        await changeColor(orange, yellow, 500);
        await changeColor(yellow, green, 400);
        await changeColor(green, blue, 900);
        await changeColor(blue, purple, 200);
        await changeColor(purple, gray, 700);

    } catch (err) {
        errorMessage.innerHTML = err;
        errMessage.classList.remove('hidden');
        btn.classList.add('hidden');

    }

    btn.disabled = false;
    btn.classList.add('hover:scale-105');
    btn.classList.add('hover:shadow-lg');
    btn.classList.remove('cursor-not-allowed');
}

// async function pressButton() {
//     // Set button to be disabled
//     btn.disabled = true;
//     btn.classList.remove('hover:scale-105');
//     btn.classList.remove('hover:shadow-lg');
//     btn.classList.add('cursor-not-allowed');

//     try {
//         await changeColor(gray, pink, 800);
//         await changeColor(red, orange, 300);

//         // Set an error here
//         await changeColor(orange, yellow, 500, true);

//         await changeColor(yellow, green, 400);
//         await changeColor(green, blue, 900);
//         await changeColor(blue, purple, 200);
//         await changeColor(purple, gray, 700);

//     } catch (err) {
//         errorMessage.innerHTML = err;
//         errMessage.classList.remove('hidden');
//         btn.classList.add('hidden');

//     }

//     btn.disabled = false;
//     btn.classList.add('hover:scale-105');
//     btn.classList.add('hover:shadow-lg');
//     btn.classList.remove('cursor-not-allowed');
// }

btn.addEventListener('click', pressButton);