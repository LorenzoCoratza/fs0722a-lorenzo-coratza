/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/


function(l1,l2) {
    return l1*l2
}
const areaResult = area(3 , 4) 
console.log(areaResult)
    



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (numero1,numero2){
    if(numero1 === numero2){
       ( numero1 + numero2 )*3
    } else{
        return(numero1+numero2)
    }
}
console.log(crazySum)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function(num){
    if(num>19){
        return Math.abs(num-19)*3;
    
    }else{
        return Math.abs(num-19);
    }
}
console.log(crazyDiff)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(){
    let  boolean;
if(n >=20 && n<=100 || n==400){
    return boolean = true;
}else{
    return boolean = false;
}
}
let n = 200;
let boolean = boundary(n);
console.log(boolean)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string){
    if(string.includes("EPICODE")){
        return string;
    }else{
        string = "EPICODE" + string ;
    }
}console.log(string)

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n){
    if n >=0 && (n%3===0 || n%7==0){
        return true
    }else{
        return  false
    }
}
console.log(check3and7(20))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/*function reverseString(string){
    return str.split('').reverse().join('')
}*/

const reverseString = function(str) {
    let strSplitted = str.split("");
    let reverseStr = strSplitted.reverse();
    let finalStr = reverseStr.join("");

    return finalStr;
}
console.log(reverseString("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirstPhrase = function(str){
    let words = str.split("");
    let finalString = [];
    for(let i=0;i<word.leght;i++){
        let firstChar = words[i].charAt(0);
        let upperCaseChart = firstChar. toUppercase();
        let cutString =words.slice(1)
            let finalWord = upperCaseChart + cutString;
            finalString.push(finalWord);
}
console.log(finalString.join(""));
}
upperFirstPhrase("hello word")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function(str){
    return str.slice(1,-1)
}console.log(cutString("EPICODE"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function(n){
const arr=[];
for(let i=0;i<n;i++){
    arr.push(Math.floor(Math.random()*))
    return arr
}}
console.log(giveMeRandom(5))
