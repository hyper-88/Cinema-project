


//Вариант 1
//let вместо var

// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 3000);
// }


//Вариант 2
// поместить цикл for внутрь setTimeout
const arr = [10, 12, 15, 21];
setTimeout(function () {
    for (var i = 0; i < arr.length; i++) {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }
}, 6000);
