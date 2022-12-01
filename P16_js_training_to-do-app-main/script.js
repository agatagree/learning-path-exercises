/*
Stwórzcie formularz ( zwykkły input - type text), oraz button do zatwierdzania formularza
Pod spodem niech wyświetla się lista TODO z czynnościami do wykonania
Dane zapisujcie i pobierajcie z localStorage
Po wpisaniu tekstu do inputa i kliknięcie buttona Dodaj nowa wartość powinna dodać się do aktualnej listy
Dodatkowo - dla wszystkich: Kazdy element z listy powinien mieć przycisk Usuń, który umozliwi nam usunięcie elementu z aktualnej listy
*/


const container = document.createElement('div');
document.body.append(container);
container.classList.add('container');

const title = document.createElement('h1');
title.innerText = 'List To Do';
container.append(title);

const addItems = document.createElement('div');
container.append(addItems);
addItems.classList.add('addDiv');

const input = document.createElement('input');
addItems.append(input);
input.classList.add('input');

const btnAdd = document.createElement('button');
btnAdd.innerText = '+ Add';
addItems.append(btnAdd);

const div = document.createElement('div');
container.append(div);
div.classList.add('divList');

const list = document.createElement('ul');
div.append(list);

////////////////////wyświetlenie istniejącej listy
window.addEventListener('load', showItems());

////////////////////dodawanie nowego zadania
btnAdd.addEventListener('click', () => {
    let listItem = input.value;
    if (listItem == '') {
        alert('Puste pole');
        return;
    } else {
    let localArray = localStorage.getItem('ListToDo');
    let toDoArray = [];
    if ( localArray !== null) {
        toDoArray = JSON.parse(localArray); 
    }
    toDoArray.push(listItem);
    localStorage.setItem('ListToDo', JSON.stringify(toDoArray));
    input.value = "";
    showItems();
}})

////////////////////wyświetlenie 
function showItems () {
    let toDoArray = JSON.parse(localStorage.getItem('ListToDo'));
    list.innerHTML = '';
    if (toDoArray === null) {
        return;
    }else{
    for ( let i = 0; i < toDoArray.length; i++){
        const listItem = document.createElement('li');
        listItem.innerText = toDoArray[i];
        list.append(listItem);
        listItem.setAttribute('id', i);
        listItem.classList.add('listItem');

         const btnRemove = document.createElement('button');
         btnRemove.innerText = 'done';
         btnRemove.classList.add("btnRemove");
         listItem.append(btnRemove);
         btnRemove.setAttribute('id', i);
    }}
}

////////////////////nasluchiwanie na usuwanie
list.addEventListener('click', (event) => {
    if (event.target.className === 'btnRemove') {
        removeItem(event.target.id);
    }
})

////////////////////usuwanie
function removeItem(index) {
    let toDoArray = JSON.parse(localStorage.getItem('ListToDo'));
    toDoArray.splice(index,1);
    localStorage.setItem("ListToDo", JSON.stringify(toDoArray));
    showItems();
}

