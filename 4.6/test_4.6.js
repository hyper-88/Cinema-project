
//Задача 1 (работает при обновлении страницы)
let out = document.getElementById('out_name');
out.innerHTML = transform();
function transform() {
    let name = document.getElementById('name__input');
    return (name.value);
}

//Задача 2
let num1 = document.getElementById('number_1').value;
let num2 = document.getElementById('number_2').value;
let res_2 = compare1(num1, num2);
let result_2 = document.getElementById('result_2');
result_2.innerHTML = res_2;
function compare1(x, y) {
    x = Number(x);
    y = Number(y);
    if (x > y) {
        return x;
    }
    else if (x < y) {
        return y;
    }
    else if (x == y) {
        var arr = new Array(x, y);
        return (arr[Math.floor(Math.random() * (arr.length))]);
    }
}

//Задача 3
let res_3 = compare2(num1, num2);
let result_3 = document.getElementById('result_3');
result_3.innerHTML = res_3;
function compare2(x, y) {
    x = Number(x);
    y = Number(y);
    let ax = Math.abs(x)
    let ay = Math.abs(y)
    if (ax > ay) {
        return x;
    }
    else if (ax < ay) {
        return y;
    }
    else if (ax == ay) {
        var arr = new Array(x, y);
        return (arr[Math.floor(Math.random() * (arr.length))]);
    }
}

//Задача 4
let min = document.getElementById('min').value;
let max = document.getElementById('max').value;
let res_4 = func1(min, max);
let result_4 = document.getElementById('result_4');
result_4.innerHTML = res_4;
function func1(x, y) {
    x = Number(x);
    y = Number(y);
    return (Math.random() * (y - x) + x);
}


// console.log(result);
