//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//chiedere una parola all'utente
const userWord = prompt('inserisci una parola');
console.log(userWord);

const userWordReverted = revertWord(userWord);
console.log(userWordReverted);

//capire se la parola è palindroma
if(userWord === userWordReverted) {
    alert('la parola è palindroma');
} else {
    alert('la parola non è palindroma');
}

//function
//prende una parola e inverte i suoi caratteri
function revertWord(word) {
    let wordReverted = '';

    for(let i = word.length - 1; i >= 0; i--) {
        const letter = word[i];

        wordReverted += letter;
    }

    return wordReverted;
}