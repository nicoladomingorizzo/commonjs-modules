/*
Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.
*/

//Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
function fullNameObj(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    };
};


//Esporta la funzione dal file.
module.exports = fullNameObj;