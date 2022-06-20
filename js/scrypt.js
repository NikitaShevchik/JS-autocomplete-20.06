"use strict"

let country = ['Belarus', 'Belgium', 'Bulgaria'];

const inputText = document.querySelector('.autocomplete__input');
const listAutoComplete = document.querySelector('.list');
var listAutoCompleteItems;



function autoComplete() {
    listAutoComplete.innerHTML = '';
    for (let i of country) {
        if (i.includes(inputText.value))
            listAutoComplete.innerHTML += `<li class="list__item">${i}</li>`
            listAutoCompleteItems = document.querySelectorAll('.list__item');
    }
}

inputText.addEventListener('keyup', autoComplete)

// listAutoCompleteItems.addEventListener('click', function(){
//     inputText.innerHTML = 
// })

// listAutoCompleteItems.forEach(element => {element.addEventListener('click', () => {
//     inputText.innerHTML = element.innerHTML
// })})

for (element of listAutoCompleteItems){
    console.log('clik')
    element.addEventListener('click', function(){
        console.log('clik')
        inputText.innerHTML = element.innerHTML
    })
}