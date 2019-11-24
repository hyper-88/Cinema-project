console.log(window.innerWidth); // вся ширина окна
console.log(document.documentElement.clientWidth); // ширина минус прокрутка

var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
console.log('Высота с учётом прокрутки: ' + scrollHeight);

console.log('Текущая прокрутка сверху: ' + window.pageYOffset);
console.log('Текущая прокрутка слева: ' + window.pageXOffset);


