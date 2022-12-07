salvaIlDato = function(info_da_salvare){
    localStorage.ultimo_pensiero = info_da_salvare;
    alert("memorizzazione effettuata");

    recuperaIlDato = function(elemento){
        if(confirm("Sostituire il contenuto attuale con l'ultimo pensiero memotizzato")){
        elemento.value = localStorage.ultimo_pensiero;
    }
  }
}