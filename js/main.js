// Milestone 1:

// Crea una funzione chiamata sommaNumeri che prenda un array di N numeri 
// e calcoli la somma di tutti questi numeri contenuti nell'array, 
// restituendolo come risultato.
// Utilizzare la funzione sommaNumeri per stampare il risultato.
// L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N), 
// e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().

function milestone1() {

    const userNumbers = [];
    const arrayLength = parseInt(prompt("Quanti numeri vuoi inserire?"))

    for (let i = 0; i < arrayLength; i++) {
        userNumbers.push(parseInt(prompt("Inserisci un numero.")))
    }

    const sumOfNumbers = sommaNumeri(userNumbers);
    console.log(sumOfNumbers)

    return sumOfNumbers;
}


// Milestone 2:
// Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri
// e restituisca la media aritmetica dei numeri contenuti nell'array.
// Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei numeri che vanno chiesti all'utente attraverso dei prompt.
// Potete ad esempio provare ad usare questo programma per inserire N voti di scuola e farvi restituire qual è la media di tutti i voti inseriti!

function milestone2() {

}




// Functions //

/**
 * Prende un'array e calcola la somma dei numeri presenti in essa.
 *
 * @param {Array<Number>} array - L'array da cui calcolare la somma dei numeri.
 * @returns {Number} La somma dei numeri nell'array.
 */
function sommaNumeri(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        sum += number;
    }
    return sum;
}