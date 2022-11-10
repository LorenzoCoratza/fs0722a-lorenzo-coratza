 document.querySelector(#push).onclick = function(){
    if(document.querySelector("#newtask input").ariaValueMax.lenght ==0){
        alert("INSERISCI QUALCOSA!") //CREIAMO L'ALERT PER QUANDO SI INSERISCE QUALCOSA
    }else{//quando inseriamo una task usiamo .innerhtml per mostrarla nella page
        document.querySelector(#"tasks").innerHTML += `
        <div class = "task">
        <span id = "taskname">
        ${document.querySelector("#newtask input").value}
        </span>
        <button class = "delete">
        <i class = "far fa-trash-alt"></i>
        </button>
        </div>`;
    
    var currenttasks = document.querySelectorAll(".delete");//CREIAMO IL TASO CANCELLA
    for(var i=0; i<currenttasks.lenght;i++){
        currenttaks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
  }
}

