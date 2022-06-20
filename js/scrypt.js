"use strict"

let country = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei','Bulgaria'];

const inputText = document.querySelector('.autocomplete__input');
const listAutoComplete = document.querySelector('.list');


// function autoComp() {
//     for (let i of country) {
//         listAutoComplete.innerHTML += `<li class="list__item">${i}</li>`;
//         console.log(i)
//     }
// }
function clickElements() {
    const listAutoCompleteItems = document.querySelectorAll('.list__item');
    listAutoCompleteItems.forEach((element) => element.addEventListener('click', function () {
        inputText.value = element.innerHTML
        listAutoComplete.classList.add('_hide')
    }))
}

function autoComplete() {
    listAutoComplete.classList.remove('_hide')
    listAutoComplete.innerHTML = '';
    for (let i of country) {
        if (i.startsWith(inputText.value)) {
            listAutoComplete.innerHTML += `<li class="list__item">${i}</li>`;
        }
    }
    // autoComp()
    clickElements()
}

inputText.addEventListener('keyup', autoComplete)

// for (let element of listAutoCompleteItems) {
//     element.addEventListener('click', function () {
//         console.log('clik')
//         inputText.innerHTML = element.innerHTML
//     })
// }

// listAutoCompleteItems.addEventListener('click', function(){
//     inputText.innerHTML =
// })

// listAutoCompleteItems.forEach(element => {element.addEventListener('click', () => {
//     inputText.innerHTML = element.innerHTML
// })})

