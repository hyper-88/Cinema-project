//Задание 1
let arr1 = ['str', 'str2', 123, 456, true, false,];
//console.log(arr1);

//Задание 2
a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};
for (let key1 in a3) {
    if (key1.length > 4) {
        //console.log(a3[key1]);
    }
}

//Задание 3
//При заполнении всех трех форм страница обновляется и массив обнуляется.
//
let a7 = {};
let k = document.getElementById('key__input');
let v = document.getElementById('value__input');
let button = document.getElementById('submit');
button.onclick = function (e) {
    e.preventDefault();
    let key = k.value;
    let val = v.value;
    a7[key] = val;
    //console.log('Массив', a7);
    key1 = key.toString();
    val1 = val.toString();
    let out_key = document.getElementById('out_key');
    out_key.innerHTML = key1;
    let out_val = document.getElementById('out_val');
    out_val.innerHTML = val1;
}

//Задание 4
const a = ['Tor', 'Lokki', 'Odin', 34, 'privet'];
//console.log(a.length);

//Задание 5
d = [0, 2, 5, -4, 6, 22, -9, -12, , 13, 78];
let a1 = [];
let a2 = [];
for (let key1 of d) {
    if (key1 == undefined) {

    }
    else if (key1 % 2 == 0) {
        a1.push(key1);
    }
    else {
        a2.push(key1);
    }
}
//console.log(a1);
//console.log(a2);

//Задание 6
let max = d[0];
for (let i = 0; i < d.length; i++) {
    if (d[i] > max) {
        max = d[i];
    }
}
//console.log(max);

