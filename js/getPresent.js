let buttoh_get_present = document.getElementById('block-04__get-present');
let modal_present_window = document.getElementById('block-07');
let close_present_window = document.getElementById('block-07__close-present-window');
let button_get = document.getElementById('block-07__get-present');

buttoh_get_present.onclick = function () {
    modal_present_window.style.display = 'block'
}

close_present_window.onclick = function () {
    modal_present_window.style.display = 'none'
}

button_get.onclick = function () {
    let client_name = document.getElementById('block-07__client-name');
    let type_of_present = document.getElementById('block-07__type-of-present');
    
    if (client_name.value) {
        //console.log('client_name', client_name.value)
        client_name.style.border = '0.1rem solid #bebebe'
    }
    else {
        client_name.style.border = '0.1rem solid red'
    }

    if (type_of_present.value != 0) {
        //console.log('type_of_present', type_of_present.value)
        type_of_present.style.border = '0.1rem solid #bebebe'
    }
    else{
        type_of_present.style.border = '0.1rem solid red'
    }

    if (type_of_present.value !=0 && client_name.value) {
        modal_present_window.style.display = 'none'
    }
}

let client_name = document.getElementById('block-07__client-name')
client_name.onchange = function(){
    //console.log('до нажатия кнопки client_name', client_name.value)
}
let type_of_present = document.getElementById('block-07__type-of-present');
type_of_present.onchange = function(){
    //console.log('до нажатия кнопки type_of_present', type_of_present.value)
}