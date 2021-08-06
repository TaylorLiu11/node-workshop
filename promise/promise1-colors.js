const btn = document.getElementById('button');

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
                rej('Something went wrong!');
            }
        }, timer);
    });
};

function pressButton() {
    // Set button to be disabled
    btn.disabled = true;
    btn.classList.remove('hover:scale-105');
    btn.classList.remove('hover:shadow-lg');
    btn.classList.add('cursor-not-allowed');

    let changeColor1 = changeColor(gray, pink, 1000);
    changeColor1
        .then((res) => {
            return changeColor(pink, red, 500);
        })
        .then((res) => {
            return changeColor(red, orange, 300, true);
        })
        .then((res) => {
            return changeColor(orange, yellow, 500);
        })
        .then((res) => {
            return changeColor(yellow, green, 1300);
        })
        .then((res) => {
            return changeColor(green, blue, 1500);
        })
        .then((res) => {
            return changeColor(blue, purple, 200);
        })
        .then((res) => {
            return changeColor(purple, gray, 700);
        })
        .catch((res) => {
            console.log('Something wrong:((');
        })
        .finally((res) => {
            console.log('Finally!');
        });

    btn.disabled = false;
    btn.classList.add('hover:scale-105');
    btn.classList.add('hover:shadow-lg');
    btn.classList.remove('cursor-not-allowed');
}

btn.addEventListener('click', pressButton);









// // Callback Hell - Changing colors
// btn.addEventListener('click', () => {
//     // Set button to be disabled
//     btn.disabled = true;
//     btn.classList.remove('hover:scale-105');
//     btn.classList.remove('hover:shadow-lg');
//     btn.classList.add('cursor-not-allowed');

//     changeColor(
//         gray,
//         pink,
//         () => changeColor(
//             pink,
//             red,
//             () => changeColor(
//                 red,
//                 orange,
//                 () => changeColor(
//                     orange,
//                     yellow,
//                     () => changeColor(
//                         yellow,
//                         green,
//                         () => changeColor(
//                             green,
//                             blue,
//                             () => changeColor(
//                                 blue,
//                                 purple,
//                                 () => changeColor(
//                                     purple,
//                                     gray,
//                                     () => {
//                                         // Set button back
//                                         btn.disabled = false;
//                                         btn.classList.add('hover:scale-105');
//                                         btn.classList.add('hover:shadow-lg');
//                                         btn.classList.remove('cursor-not-allowed');

//                                     }
//                                 )
//                             )
//                         )
//                     )
//                 )
//             )
//         )
//     );
// });






