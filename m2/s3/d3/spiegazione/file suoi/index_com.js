var addBtn;                                                 // 1
var taskTxt;                                                // 1
var taskListHTML;                                           // 3
var tasksList = [];                                         // 1
//dichiara le variabili
window.addEventListener("load", init);                      // 1
//al caricamento della pagina chiama la funzione init
function init(){
    addBtn = document.querySelector("#add_btn");            // 1
    taskTxt = document.querySelector("#task_txt");          // 1
    taskListHTML = document.querySelector("#tasks_list_html");
    //aggancia alle variabili gli oggetti html              // 3
    addBtn.addEventListener("click", addTask);              // 1
    //si mette in ascolto in attesa di un evento click sul bottone
     //quando avviene il click chiama addtask
    checkData();                                            // 2
    //chiamo anche la funzione che gestisce il localStorage
}

function addTask(){                                         // 1
    tasksList.push(taskTxt.value);
    //inserisce nell'array tasklist il valore scritto nell'input
    //chiama le 3 funzioni sotto
    buildList();                                            // 3
    saveData();                                             // 4
    clearForms();                                           // 4

}

function checkData(){                                       // 2
    //controlla se nel localstorage è stato memorizzata la chiave tasks, 
    // se c'è crea un array splittando i contenuti in base alla virgola
    if(localStorage.getItem('tasks')){
        tasksList = localStorage.getItem('tasks').split(",");
    }
        // The split() method is used to split a string into an array of substrings, and returns the new array
        // https://www.w3schools.com/jsref/jsref_split.asp
        // https://www.geeksforgeeks.org/javascript-string-prototype-split-function/
    buildList();                                            // 3
}

function buildList(){                                       // 3
    //pulisce la stringa
    var list = "";
    //fa il ciclo sull'array ottenuto dallo split di sopra'
    for(var i=0; i < tasksList.length; i++){
        //costruisce la stringa html
        list += "<li class='list-group-item d-flex justify-content-between align-items-center'>" + tasksList[i] + "<span onclick='removeTask("+i+")' class='remove_btn badge bg-danger rounded-pill pointer'>X</span></li>";
    }
    //inserisce l'html nella pagina
    taskListHTML.innerHTML = list;
}

function saveData(){                                        // 4
    //salva la variabile nel localStorage
    localStorage.setItem('tasks', tasksList);
}

function clearForms(){                                      // 4
    taskTxt.value = '';
    //pulisci il campo di input
}

function removeTask(id){                                    // 5
    //rimuove l'elemento selzionato, salva i dati e ricostruisce la lista
    tasksList.splice(id, 1);
    // https://www.w3schools.com/jsref/jsref_splice.asp
    saveData();
    buildList();
}