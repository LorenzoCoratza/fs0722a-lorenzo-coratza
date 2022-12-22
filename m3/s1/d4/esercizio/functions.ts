////FILE TypeScript di Lorenzo Coratza/////

///CHIAMATA FETCH///
var url = 'https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f'

var req = new Request(url);
fetch(req)
    .then(function(response) {
       return response.json()
    }).then(function(jsonResponse){
      console.log(jsonResponse)
    })


 ///FUNZIONE ASINCRONA///
async function caricaJSON (url:string) {
    try{
        let res= await fetch("../file_json/Abbigliamento.json");
        return res.json();
    }
    catch{
        console.log("Errore nel caricamento dei dati");
    }
    }

    console.log(caricaJSON('https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f'));

   let caricaHTML= async function(){
        let listacapi = await caricaJSON();
        console.log(listacapi);

        for (let capo of listacapi){
            let CapoAbbigliamento = new costruisciAbbigliamento(capo.id,capo.codProd,capo.collezione,capo.capo,capo.modello,capo.quantita,capo.colore,capo.prezzoivaesclusa,capo.prezzoivainclusa,capo.disponibile,capo.saldo,capo.img);
            console.log(CapoAbbigliamento);
            console.log(CapoAbbigliamento.getSaldoCapo());
            console.log(CapoAbbigliamento.getAcquistoCapo());            
        
        
            let card=document.createElement("div");
            card.classList.add("card");
            card.style="width:200px;";
    
            card.innerHTML=`
                            <div class="card-body">
                            <h5 class="card-title">${CapoAbbigliamento.capo}</h5>
                            <p class="card-text">Prezzo Iva esclusa: ${CapoAbbigliamento.prezzoIvaEsclusa}</p>
                            <p class="card-text">Prezzo Iva inclusa: ${CapoAbbigliamento.prezzoIvaInclusa}</p>
                            <p class="card-text">Saldo: ${CapoAbbigliamento.saldo}%</p>
                            <p class="card-text">Saldo applicato: ${CapoAbbigliamento.getSaldoCapo()}</p>
                            <p class="card-text">Prezzo scontato: ${CapoAbbigliamento.getAcquistoCapo()}</p>
                            <button class="btn btn-primary">Aggiungi al carrello</button>
                            </div>`;
let container= document.querySelector(".container");
    container.appendChild(card);
    }
}
caricaHTML();


///INTERFACCIA///
interface negozioAbbigliamento{
    id:number,
    codProd:number,
    collezione:number,
    capo:string,
    modello:number,
    quantita:number,
    colore:string,
    prezzoIvaEsclusa:number,
    prezzoIvaInclusa:number,
    disponibile:string,
    saldo:number,
    img:string
}

///CLASSE ASTRATTA/// 
abstract class CapoAbbigliamento implements negozioAbbigliamento{
    id:number;
    codProd:number;
    collezione:number;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoIvaEsclusa:number;
    prezzoIvaInclusa:number;
    disponibile:string;
    saldo:number;
    img:string;
    constructor(id:number,codProd:number,collezione:number,capo:string,
        modello:number,quantita:number,colore:string,prezzoIvaEsclusa:number,
        prezzoIvaInclusa:number,disponibile:string,saldo:number,img:string) {
                    this.id=id;
                    this.codProd=codProd;
                    this.collezione=collezione;
                    this.capo=capo;
                    this.modello=modello;
                    this.quantita=quantita;
                    this.colore=colore;
                    this.prezzoIvaEsclusa=prezzoIvaEsclusa;
                    this.prezzoIvaInclusa=prezzoIvaInclusa;
                    this.disponibile=disponibile;
                    this.saldo=saldo;
                    this.img=img;
                }
                ///METODI///
 getSaldoCapo(){ return (this.prezzoIvaInclusa/100)*this.saldo;};
                
 getAcquistoCapo(){ return this.prezzoIvaInclusa-(this.prezzoIvaInclusa/100)*this.saldo;}
}

class costruisciAbbigliamento extends CapoAbbigliamento{};
                console.log("soy el chapo")

                
            

            
 
