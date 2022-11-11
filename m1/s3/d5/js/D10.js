/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20  //creo la variabile con la somma
console.log(sum)  // la richiamo

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
function randomNumber(min,max){   //creo la funzione per generare un numero random
 return Math.floor(Math.random() *(max - min +1) + min ) ;
}
let random = randomNumber(0 ,20);  //creo la variabile con i valori dell'esercizio
console.log(random)  //la richiamo


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {   //creo la variabile e le assegno le caratteristiche richieste
  name: "lorenzo",
  surname: "coratza",
  age: "22",
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;   //uso la funzione delete sull'attributo richiesto
console.log(me) ;   //la richiamo

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JavaScript"] ;   //aggiungo un attributo come richiesto
console.log(me) ;   //la richiamo

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Python") ;  //aggiungo un attributo come richiesto
console.log(me) ;    //la richiamo

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop() ;    //uso pop() per eliminare l'ultimo elemento
console.log(me) ; //la richiamo

// Funzioni

//non è una funzione ma un metodo,ho usato pop()


/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
let randomN ;  //definisco la variabile che rappresenta il numero

function dice(){  //creo la funzione
  randomN = Math.trunc(Math.random() * 6);
}
console.log(randomN)   //la richiamo


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(n1 , n2){   //creo la funzione
  if(n1 > n2){   //creo  i 3 if per comprendere tutti i casi possibili
    console.log(`Il primo numero: ${n1} è maggiore del seconso numero: ${n2}`)
  };
  if(n1 < n2){
    console.log(`Il primo numero: ${n1} è minore del secondo numero: ${n2}`)
  };
  if(n1 == n2){
    console.log(`i numeri ${n1} e ${n2} si equivalgono`)
  };
}
whoIsBigger(3,2)  //la richuiamo con valori casuali per vedere se va


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(string){    //creo la fuznione
  console.log(string.split(" "));
}

splitMe("ciao mi chiamo mario")  //la richiamo con valori casuali per vedere se funziona

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str,bool){   //creo la funzione
  if(bool){
    console.log(str.slice(1 , str.lenght));
  }else{
    console.log(str.slice(0 , -1))
  };
}
deleteOne("OrazioStrazio",true) // la rpovo assegnando valori casuali

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(string){    //creo la funzione
  console.log(string.replace(/[0-9]/g, ""));
}
onlyLetters("I have 4 dogs and 3 cats")  //la provo richiamandola
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(string){ //prendo il regex della mail per validare la mail con i giusti criteri
  let regexEmail = /^(([^<>;()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
if(regexEmail.test(string)){  //faccio un ciclo if 
  console.log(`${string} è un E-Mail valida.`);
}else{
  console.log(`${string} non è un E-Mail valida. `);
}
}
isThisAnEmail("bababa");   //la rpovo con testo casuale

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt(){     //creo la funzione
  let today = new Date();
  console.log(today);
  console.log(today.getDay());
}
whatDayIsIt()   //la lancio per vedere se va ed è giusta

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(n)                 //creo la funzione con "n"(numero) come valore in entrata                    
{
  var obj={  }; // creo oggetto vuoto                                            
  let value=[]; //creo array vuoto                                            
  let sum=0;    // creo la variabile sum e gli assegno un numero                               
  for(i=0;i<n;i++)                                          // creo un ciclo for 
  {
    dice();   // richiamo la funzione dice()                                             
    value.push(randomN);   // aggiungo il numero all'array
    sum+=randomN;   // aggiungo il valore a sum 
  }
  console.log(value); // console log di value                                      
  console.log(sum);  // console log sum                                       
  obj.value=value;    // aggiungo l'attr. value all'oggetto                                      
  obj.somma=sum;  // assegno somma a sum                                           
  console.log(obj);                                       // console log per vedere oggetto 
  return obj;                                               
}
rollTheDices(5)  //la richiamo per vedere se funziona

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date){
  let millisec = 1000 * 60 * 60 *24;   //millisec. in un gg.
  let today = new Date();  // creo una variabile con la data di oggi
  let giorno = new Date(date)  //creo una data selezionabile cambiando il parametro
  let differenza = Math.floor((giorno - today) /millisec);   //creo la funzione

  console.log(`oggi ${today} sono passati ${differenza} giorni dal ${giorno} `);
}

howManyDays("09/11/2001")  // la rpovo con una data casuale

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
let date = new Date();   //creo una variabile con la data attuale


function isTodayMyBirthday(date){  // creo una funzione
  let compleanno = new Date("11/08/2000");   //creo una variabile con il gg. del mio compleanno
  if(compleanno === date) {console.log("E' il tuo compleannoooo!!!");   //se coincidono me lo dice
}else{
  console.log("Non è il tuo compleanno :(");   //se non coincidono manda quest'altro msg.
}
}
isTodayMyBirthday(date)   //la richiamo per vedere se va


// Arrays & Oggetti//////////////////////////////////////////////////////////////////

/////////////////* Questo array viene usato per gli esercizi. Non modificarlo. *///////////////////////

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj,str)  //creo la funzione che riceve oggetto e stringa
{
  for(let prop in obj) //uso il ciclo for sulle proprietà dell'oggetto
  {
    if(obj[prop] === str) //sele proprietà dell obj. sono uguali alla str. allora eliminalo
    {
      delete obj[prop];
    }
    console.log(obj);  //richiamo l'obj
  }
}
object = {
  name :"pizza",
  gusto :"diavola",
  qualità : "buona",
}
deleteProp(Object,"diavola")   // la provo

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(arr){  //creo la funzione 
let newest = arr.reduce((previous , current) =>{
  if(previous.Year < current.Year){  //creo un if che si basa sul Year della lista e la cicla tutta prendenddo il più nuovo
  return current ;
}else{
  return previous ;
}})
console.log(newest) ;  //richia,ìmo la variabile del più nuovo
}
newestMovie(movies)  //la prvo per vedere se funziona

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(arr){   //creo la funzione
  let count = movies.lenght ;   //creo una variabile che comprende solo la lunghezza dell'array
  console.log(count)  ;
}
countMovies(movies)  //la provo

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(arr){ //creo la funzione
let movieYear = [];  //creo l'array con solo gli anni
for(let movie of movies){   //ciclo for per pushare nell'array degli anni, gli anni
  movieYear.push(movie.Year)
}
console.log(movieYear)   //richiamo il risultato del ciclo
}
onlyTheYears();  //richiamo la funzione

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(arr){  //creo la funzione
  let moviesYear = [];   //ricreo l'array vuoto
  for(let movie in movies){  //ciclo l'array vuoto con l' if <2000
    if( movie.Year < 2000){
      moviesYear.push(movie.Year)  //pusho solo quelli minori
    }
  }
  console.log(moviesYear);  //richiamo l'array per vedere se è pieno ora
}
onlyInLastMillennium() //richiamo la funzione

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(){  //creo la funzione
  let moviesYear = [];  //creo un array vuoto
  let tot = 0; //creo la variabile che rappresenta il totale della somma
  for(let movie of movies){   
    moviesYear = movie.year*1 ;  //trasformo la strigna in numero
    tot += moviesYear ;  //aggiungo la somma al totale
  }
  console.log(tot);  //RICHIAMO il risultato
}
sumAllTheYears()   //richiamo la funzione

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(str){  //creo la funzione
  str = str.toLowerCase();  //rendo tutti i caratteri della str minuscoli
  let trovaTit = [];  //array vuoto
  for(let titolo of movies){  //ciclo for con if per cercare tra i tioli la str ammessa
    if(titolo.Title.toLowerCase().includes(str)){
      trovaTit.push(titolo.Title);  //pusho in trovaTit
    }
  }
  console.log(trovaTit)   //risultato dell'array
}
searchByTitle("avengers")   //richiamo per vedere se va

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(str){  //creo la funzione
  let obj =  { match:[],unmatch:[]};  //creo ls variabile con i 2 array vuoti

movies.forEach((elem) =>{  //cerco in tutto l'array movies
  if(elem.Title.toLowerCase().includes(str.  toLowerCase())){  //se contiene str pushalo nei match
    obj.match.push(elem);
  }else{  //sennò negli unmatch
    obj.unmatch.push(elem);
  }
}); console.log(obj);  //richiama la variabile con lgi array
}
//vedo se funziona
searchAndDivide("avengers")

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(n){  //creo la funzione che accetta un numero (n)
  let copy = [movies];  //creo una copia dell'array movies
  copy.splice(n , 1);   //uso uno splice sull elem.indicato da (n)
};
removeIndex(2)   //la richiamo per vedere se funziona


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function Container20(){   //creo la funzione
  return document.getElementById("container");   //uso il get element con l ID richiesto e un return
}


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
 function selectTd{  //creo la funzione
  return document,querySelectorAll("td");  //uso il queryselectorall per prendere i td 
 }

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaTd(){ // creo la funzione
  let td = document.querySelectorAll("td");  //seleziono i td
  td.forEach((elem) => console.log(elem.innerHTML));  //seleziono il loro contenuto e lo mostro in console
};


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function linkColor(){  // creo la funzione
  let link = document.querySelectorAll("a");  //seleziono tutti i link
  links.forEach((elem) =>(elem.style.backgroundColor = "red"));  //cambio il bgcolor con .style
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addList(){  // creo la funzione
  let list = document.getElementById("myList");  //prendo la lista e la metto in una  var.
  list.innerHTML += "<li>per fortuna ho quasi finito</li>"  //seleziono il contenuto della lista e aggiuno un li
}


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function deleteList(){  // creo la funzione
  let list = document.getElementById("myList");  //seleziono la lista
  list.innerHTML = "";  //seleziono il contenuto e lo svuoto
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
funzione addCss(){ // creo la funzijne
let tag = document.querySelectorAll("tr");  //seleziono tutti i tr
tag.forEach((elem) => elem.classList.add("test"))}// aggiungo la classe css con un .forEach

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

