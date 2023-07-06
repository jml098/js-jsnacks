// Milestone 1:

// Crea una funzione chiamata sommaNumeri che prenda un array di N numeri 
// e calcoli la somma di tutti questi numeri contenuti nell'array, 
// restituendolo come risultato.
// Utilizzare la funzione sommaNumeri per stampare il risultato.
// L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N), 
// e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().

function milestone1() {

    const arrayLength = parseInt(prompt("Quanti numeri vuoi inserire?"))
    const userNumbers = generateArrayFromInputs(arrayLength, "Inserisci il numero da inserire.", true)
    const sumOfNumbers = sommaNumeri(userNumbers);

    return sumOfNumbers;
}


// Milestone 2:
// Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri
// e restituisca la media aritmetica dei numeri contenuti nell'array.
// Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei numeri che vanno chiesti all'utente attraverso dei prompt.
// Potete ad esempio provare ad usare questo programma per inserire N voti di scuola e farvi restituire qual è la media di tutti i voti inseriti!

function milestone2() {

    const arrayLength = parseInt(prompt("Quanti numeri vuoi inserire?"))
    const userNumbers = generateArrayFromInputs(arrayLength, "Inserisci il numero da inserire.", true)
    const mediaAritmeticaOfNumbers = mediaAritmetica(userNumbers);

    return mediaAritmeticaOfNumbers;
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

/**
 * Prende un'array e calcola la media dei numeri presenti in essa.
 *
 * @param {Array<Number>} array - L'array da cui calcolare la media dei numeri.
 * @returns {Number} La media dei numeri nell'array.
 */
function mediaAritmetica(array) {
    return sommaNumeri(array) / array.length;
}

/**
 * Genera un'array di N numeri inseriti dall'utente tramite prompts.
 *
 * @param {Number} n - Quantità di numeri da inserire.
 * @param {String} promptMessage - Testo visualizzato all'inserimento del numero.
 * @param {Boolean} isNumber - Indica se sarà un'array di Numeri nel caso fosse true, Stringhe nel caso fosse false.
 * @returns {Array<Number>} Array con i numeri inseriti.
 */
function generateArrayFromInputs(n, promptMessage, isNumber) {
    const array = [];
    for (let i = 0; i < n; i++) {
        let value = prompt(promptMessage)
        if (isNumber) {
            value = parseInt(value)
        }
        array.push(value)
    }
    return array;
}


/**
 * Inserisce nel DOM il risultato di una funzione.
 *
 * @param {any} result - Quantità di numeri da inserire.
 * @returns {void}
 */
function insertInDOM(result) {
    document.getElementById("result").innerHTML = result
}



// BONUS:

// BONUS 3:
// Creare una funzione che dato un array di stringhe o di numeri mi restituisca il numero di volte 
// che un elemento è presente dentro quell'array. 
// Ad esempio se ho un array con dei numeri mi dica quante volte il numero 2 compare dentro l'array.

function bonus3() {
    const arrayLength = parseInt(prompt("Quanti valori vuoi inserire?"))

    let areNumbers;
    switch (prompt("Vuoi inserire Numeri o Stringhe?").toLowerCase()) {
        case "numeri":
            areNumbers = true;
            break;

        case "stringhe":
            areNumbers = false;
            break;

        default:
            return "Devi scegliere tra Numeri o Stringhe"
    }

    const userValues = generateArrayFromInputs(arrayLength, "Inserisci il valore da inserire.", areNumbers)
    const valueToSearch = prompt("Che valore vuoi cercare?")

    const elementsFound = howManyInArray(userValues, valueToSearch)

    return "Ci sono " + elementsFound + " " + valueToSearch + " dentro l'array."
}

/**
 * Controlla quante volte un valore appare in un'array.
 *
 * @param {Array} array - Array da controllare.
 * @param {any} value - Valore da cercare nell'array.
 * @returns {Number} - Numero di apparizioni del valore all'interno dell'array.
 */
function howManyInArray(array, value) {
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];

        if (currentValue == value) {
            counter++;
        }

    }

    return counter;
}



// BONUS 4:
// Chiedere all’utente di inserire una parola. 
// Creare una funzione per capire se la parola inserita è palindroma. 
// Per palindroma di intende una parola che letta da sinistra a destra e da destra a sinistra si legge uguale. 
// Trovate in internet un sacco di parole palindrome, un esempio è ANNA.
// Fate un programma in cui chiedete la parola all'utente e gli comunicate dunque se la parola è palindroma o meno 
// usando la funzione appena creata!

function bonus4() {
    const wordToCheck = prompt("Inserisci una parola.")

    if (isPalindrome(wordToCheck)) {
        return wordToCheck + " è palindroma."
    } else {
        return "'" + wordToCheck + "' non è palindroma."
    }
}

/**
 * Controlla se una parola è palindroma.
 *
 * @param {String} text - Testo da controllare.
 * @returns {Boolean} - True se è palindroma, false se non lo è.
 */
function isPalindrome(text) {
    text = text.replace(" ", "");

    const length = text.length;
    if (length == 0) return false;

    const nOfIterations = Math.floor(length / 2);

    for (let i = 0; i < nOfIterations; i++) {
        const leftPointer = text.charAt(i).toLowerCase()
        const rightPointer = text.charAt(length - 1 - i).toLowerCase()

        if (leftPointer != rightPointer) {
            return false;
        }
    }

    return true;
}