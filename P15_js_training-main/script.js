/*  
Zadanie 1
Zadeklaruj w skrypcie tablicę zawierającą tablice obiektów ze studentami w postaci (min 5 studentów).
Utwórz funkcje: getMaxNote oraz getMinNote, przyjmującą argumenty:
- TABLICA_STUDENTÓW, 
- PESEL_STUDENTA, 
- FUNKCJĘ CALLBACK,
Rolą funkcji jest znajdowanie najmniejszej oraz największej oceny dla zadanego studenta.

Utwórz funkcję displayInfo, która będzie przekazywana do dowolnej funkcji, jako parametr callback oraz będzie wyświetlała na konsoli napis: Max note for student Ewa Nowak is 5 / Min note for student Ewa Nowak is 2.

Uruchom funkcje: getMaxNote oraz getMinNote przekazując odpowiednie parametry oraz metodę displayInfo jako funkcję callback
*/
console.log('_______________zadanie 1________________')

const students = [
    {
       id: 1,
       pesel: '123456789',
       name: "Jacek Kowalski",
       notes: [5, 3, 4, 2, 5, 5]
    },
    {
       id: 2,
       pesel: '234567890',
       name: "Ewa Nowak",
       notes: [2, 3, 3, 3, 2, 5]
    },
    {
       id: 3,
       pesel: '345678901',
       name: "Zygmunt Lewandowski",
       notes: [2, 2, 4, 4, 3, 3]
    },
    {
        id:4,
        pesel: '895678901',
        name: "Daria Peszek",
        notes: [4, 4, 5, 4, 3, 5]
     },
     {
        id: 5,
        pesel: '87567892',
        name: "Witold Lyst",
        notes: [2, 5, 5, 4, 3, 6]
     }
 ];


const displayInfo = (show) => {
   console.log(show);
};

const getMaxNote = (studentsArray, studentId, cb) => {
   studentsArray.filter(person => {
   if (person.id === studentId) {
      const MaxNote = Math.max.apply(null, Object.values(person.notes));
      cb(`Max note for student ${person.name} is ${MaxNote}.`);
   }
})};
getMaxNote(students, 5, displayInfo);

const getMinNote = (studentsArray, studentId,cb) => {
   studentsArray.filter(person => {
   if (person.id === studentId) {
      const MinNote = Math.min.apply(null, Object.values(person.notes));
      cb(`Min note for student ${person.name} is ${MinNote}.`);
      return(MinNote);
   }
})};
getMinNote(students, 5, displayInfo);


console.log('_______________zadanie 2________________')
/*  
Zadanie 2
Dla tablicy studentów, utworzonej w Zadaniu 1, utwórz funkcję: displayStudents(), która wyświetli na konsoli listę studentów w postaci: Student Ewa Nowak, Pesel: 234567890.
Wyświetlona lista studentów powinna być posortowana alfabetycznie rosnąco względem nazwiska studenta, np.
Jacek Kowalski
Zygmunt Lewandowski
Ewa Nowak
*/


const studentsArrayNarrow = students.map((person) => {
   const personFullName = person.name.split(' ');
   person.name = personFullName[0];
   person.surname = personFullName[1];
   return person = {
      pesel: person.pesel,
      name: person.name,
      surname: person.surname,
   }
})

function sortSurName (a, b){
   const tmpA = a.surname.toLowerCase();
   const tmpB = b.surname.toLowerCase();
   if(tmpA > tmpB) {
      return 1
   } else if (tmpA < tmpB) {
      return -1
    } else {
      return 0
    }
  };

studentsArrayNarrow.sort(sortSurName);

const displayStudents = studentsArrayNarrow.map((person) => {
   console.log(`Student ${person.name} ${person.surname}, Pesel: ${person.pesel}.`);
   return `Student ${person.name} ${person.surname}, Pesel: ${person.pesel}.`;
})
