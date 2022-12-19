

giocatoriRandomNumberGeneratorrrrr();



function giocatoriRandomNumberGeneratorrrrr():void{

    let g1 = 10;
    
    let g2 = 7;
    
    let rnd = Math.floor(Math.random() * 99 + 1) 
    
    console.log("attualmente stanno giocando: ",g1,g2);

    setTimeout(function() {
        if(g1 == rnd ||g2 ==rnd){
            console.log("uno dei 2 ha indovinato...");

            setTimeout(function() {
                if(g1 == rnd){
                    console.log("il primo giocatore ha vinto la sessione");
                }else{
                    console.log("il secondo giocatore ha vinto la partita");
                }
            },2000);
        }else{
            console.log("nessuno ha vinto ma il giocatore che si è avvicinato di più è...")
            setTimeout(function() {
                let diff1 = Math.abs(g1 - rnd);
                let diff2 =Math.abs(g2 - rnd);

                Math.min(diff1,diff2) == diff1 ? console.log("giocatore1") : console.log("giocatore2");
            },2000);
        }
    },2000);
}