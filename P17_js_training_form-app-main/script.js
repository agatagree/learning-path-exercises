/* 
Zadanie 1
Wykorzystując zewnętrzne api: https://jsonplaceholder.typicode.com/ oraz endpoint: https://jsonplaceholder.typicode.com/users, pobierz listę użytkowników.
Wyświetl w ramach dokumentu html pobraną listę użytkowników. Dla każdego użytkownika powinieny zostać wyświetlone informacje:
imię i nazwisko
adres e-mail
adres zamieszania (ulica, miasto)
*/
/* 
Zadanie 2
Utwórz formularz służący do dodawania nowych użytkowników.
Formularz powinien zawierać pola: Imię i nazwisko, Adres email oraz Adres zamieszkania (mogą być oddzielne pola na ulicę oraz miasto).
Po wysłaniu formularza, nowy użytkownik powinien wyświetlić się w dokumencie html.
Użytkownicy dodani przez użytkownika, powinni być wyświetleni na tej samej liście, co użytkownicy pobrani z API.
Użytkownicy dodanie przez użytkownika powinni wyświetlać się na górze listy.
*/

const URL = "https://jsonplaceholder.typicode.com";

const list = document.querySelector("ol");
const newArray = [];
const showArray = [];

function show() {
  for (let index in newArray) {
    const listItem = document.createElement("li");
    listItem.innerText = `Name: ${newArray[index].name}, E-mail: ${newArray[index].email}, Address: ${newArray[index].street}, ${newArray[index].city}`;
    list.append(listItem);
  }
}

window.addEventListener("load", () => {
  fetch(`${URL}/users`)
    .then((result) => result.json())
    .then((result) => {
      for (let index in result) {
        const newUser = {
          name: `${result[index].name}`,
          email: `${result[index].email}`,
          street: `${result[index].address.street}`,
          city: `${result[index].address.city}`,
        };
        newArray.push(newUser);
      }

      let localArray = localStorage.getItem("addedUserList");
      let newUserArray = [];
      if (localArray !== null) {
        newUserArray = JSON.parse(localArray);
        for (let index in newUserArray) {
          newArray.unshift(newUserArray[index]);
        }
      }
      show();
    });
});

const nameInput = document.getElementById("fname");
const emailInput = document.getElementById("femail");
const streetInput = document.getElementById("fstreet");
const cityInput = document.getElementById("fcity");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    cityInput.value === "" ||
    streetInput.value === ""
  ) {
    alert("Please, fill out all required informations");
    return;
  } else {
    const addUser = {
      name: nameInput.value,
      email: emailInput.value,
      street: streetInput.value,
      city: cityInput.value,
    };
    nameInput.value = "";
    emailInput.value = "";
    streetInput.value = "";
    cityInput.value = "";

    let localArray = localStorage.getItem("addedUserList");
    let newUserArray = [];
    if (localArray !== null) {
      newUserArray = JSON.parse(localArray);
    }
    newUserArray.push(addUser);
    localStorage.setItem("addedUserList", JSON.stringify(newUserArray));
    newArray.unshift(addUser);
    list.innerHTML = "";
    show();
  }
});
