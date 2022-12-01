// Zadanie 1 - Wykonaj funkcje dodającą, odejmującą, mnożącą oraz dzielącą 2 wartości przekazane w parametrze (4 funkcje).

// Wynik arytmetyczny powinien wyświetlić się na konsoli
// Jeżeli któryś z zadanych parametrów nie będzię liczbą, funkcja powinna zwrócić napis: "Niepoprawny parametr".
// Jeżeli funkcja zostanie uruchomiona tylko z jednym parametrem, powinien zostać on wyświetlony jako wynik działania funkcji.

const numberOperations = (firstNum, secondNum) => {
   
    if (typeof firstNum == 'number' && typeof secondNum == 'number') {
        const sum = firstNum + secondNum;
        const subtraction = firstNum - secondNum;
        const multiplication = firstNum * secondNum;
        const division = firstNum / secondNum;
        console.log(`Sum is: ${sum}, subtraction is: ${subtraction}, multiplication is: ${multiplication}, division is: ${division}`);
        return;
    }
    if (typeof firstNum == 'number' && typeof secondNum == 'undefined'){
        const sum = firstNum;
        const subtraction = firstNum;
        const multiplication = firstNum;
        const division = firstNum;
        console.log(`Operation applied only to the one number! Second number was not given(and not applied as zero), so the sum, substraction, multiplication and division remain the same: ${sum}`);
        return;
    } 
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        console.log("Niepoprawny parametr");
        return;
    } 
}
numberOperations(6,2);
    
// Zadanie 2 - Utwórz tablicę obiektów, zawierających 5 studentów.
// Każdy obiekt powinien zawierać pola: imię, nazwisko, pesel, kierunek studiów.

const studentNoOne = {
    name: 'Anna',
    surname: 'Kowalska',
    pesel: '76248908865',
    field: 'medicine'
}
const studentNoTwo = {
    name: 'Kiara',
    surname: 'Lennon',
    pesel: '40248908865',
    field: 'art education'
}
const studentNoThree = {
    name: 'Daniel',
    surname: 'York',
    pesel: '3865908865',
    field: 'marketing'
}
const studentNoFour = {
    name: 'Bob',
    surname: 'Bobber',
    pesel: '90248908865',
    field: 'architecture'
}
const studentNoFive = {
    name: 'Sara',
    surname: 'Lyne',
    pesel: '762489088567',
    field: 'digital design'
}
const array = [studentNoOne, studentNoTwo, studentNoThree, studentNoFour, studentNoFive];

// Zadanie 3 - Utwórz funkcję, przyjmującą jako parametr tablicę obiektów, utworzoną w zadaniu nr 2.

// funkcja powinna wyświetlić na konsoli dane wszystkich studentów w postacii: Student 1: Jan Kowalski, PESEL: 111222333, Kierunek: Informatyka dla każdego studenta w tablicy.

const showArray = (student) => {
    for (var i = 0; i<array.length; i++) {
        console.log(`Student ${[i+1]}: ${array[i].name} ${array[i].surname}, PESEL No: ${array[i].pesel}, Field of study: ${array[i].field}`);
    }
} 
showArray(array);

// Zadanie 4 - Utwórz funkcję przyjmującą 4 paramatery (imię, nazwisko, pesel, kierunek studiów). Funkcja po uruchomieniu powinna utworzyć obiekt nowego studenta oraz dodać go do tablicy, utworzonej w Zadaniu 2.

const add = (name, surname, pesel, field) => {

    function addStudent(name, surname, pesel, field) {
            this.name = name;
            this.surname = surname;
            this.pesel = pesel;
            this.field = field;
          }
          const newStudent = new addStudent(name, surname, pesel, field);
          array.push(newStudent);
}
      
add('Natalia', 'Komar', '76549809965', 'Biotechnology');



