/*
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
*/

//Importa la tua funzione da names.js
const fullName = require('./names.js');

//Importa la tua funzione da hobbies.js
const hobbies = require('./hobbies.js');

//console.log(fullName('Nicola', 'Rizzo'))
//console.log(hobbies('pallavolo', 'calcio', 'basket'));

//Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
function fullNameAndHobbies() {
    return {
        fullName: fullName(Nicola, Rizzo),
        hobbies: hobbies('Calcio', 'Pokemon', 'Youtube')
    };
};

console.log(fullNameAndHobbies)