// interface -> è un modo di definire dei tipi personalizzati in TypeScript
// interface -> è una sorta di vincolo di contratto,cioè stabilisce come un oggetto può interagire con un altro oggetto
// interface -> definisce i membri che una classe deve avere così gli oggetti che devono interagire sanno che proprietà/metodi chiamare
interface IPersona {
    nome:string;
    cognome:string;
    visualizzaNomeCognome(): string;
}
// una classe che vuole interagire con l'interfaccia deve "aderire al contratto" 
// e cioè avere nome, cognome, visualizzaNomeCognome e con questi proprietà/metodi devono essere string
class Persona implements IPersona {
    nome:string;
    cognome: string;
    constructor(nome:string, cognome:string){
        this.nome =nome;
        this.cognome = cognome;
    }
    visualizzaNomeCognome() {
         return this.nome + " " + this.cognome;        
    }
}
// implemento una proprietà non prevista dall'interfaccia
enum Materie {Storia, Informatica, Matematica, Html, Css, Javascript};
class Studente implements IPersona {
    nome: string;
    cognome:string;
    materie:Materie [];
    constructor (nome:string, cognome:string){
        this.nome = nome;
        this.cognome = cognome;
        this.materie = [];
    }
    visualizzaNomeCognome() {
        return this.nome + " " + this.cognome;
    }
}

// posso implementare più interfacce contemporaneamente
interface IStudio {
    materie: Materie[];
}
/*
class Studente implements IPersona, IStudio {
    nome: string;
    cognome: string;
    materie: [];
    constructor(nome:string, cognome:string) {
        this.nome = nome;
        this.cognome = cognome;
        this.materie = [];
    }
    visualizzaNomeCognome() {
        return this.nome + " " + this.cognome;
    }
}
*/
// TypeScript prevede l'estendibilità delle interfacce
// -> definiamo una nuova interfaccia ereditante le caratteristiche definite in un'altra interfaccia
interface IStudente extends IPersona {
    materie: Materie[];
}

class Studente implements IStudente, IStudio {
    nome: string;
    cognome: string;
    materie: [];
    constructor(nome:string, cognome:string) {
        this.nome = nome;
        this.cognome = cognome;
        this.materie = [];
    }
    visualizzaNomeCognome() {
        return this.nome + " " + this.cognome;
    }
}