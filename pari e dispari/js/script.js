//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


//chiedere all'utente pari o dispari
const userEvenOrOdd = prompt('scegli pari o dispari');
console.log('hai scelto',userEvenOrOdd);
//chiedere all'utente un numero
const userNumber = parseInt(prompt('dimmi un numero tra 1 e 5'));
console.log('il tuo numero è',userNumber);

//stampare il numero del computer
const computerNumber = getRndInteger(1,5);
console.log('il numero del computer è',computerNumber);

//sommare i due numeri
const numbSum = userNumber + computerNumber;
console.log(numbSum);

//stabilisco se è pari o dispari
const sumResult = isEvenOrOdd(numbSum);
console.log(sumResult);

//dichiarare chi ha vinto
if(userEvenOrOdd === sumResult) {
    alert('hai vinto');
} else {
    alert('ha vinto il computer');
}


//function 1
//genera un numero random da 1 a 5
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//function 2
//stabilisce se un numero è pari o dispari
function isEvenOrOdd(number) {
    let eveneOrOdd;

    if(number % 2 === 0) {
        eveneOrOdd = 'pari';
    } else {
        eveneOrOdd = 'dispari';
    }

    return eveneOrOdd;
}