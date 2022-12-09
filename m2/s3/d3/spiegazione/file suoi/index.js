var addBtn;
var taskTxt;
var taskListHTML;
var tasksList = [];

window.addEventListener("load", init);

function init(){
    addBtn = document.querySelector("#add_btn");
    taskTxt = document.querySelector("#task_txt");
    taskListHTML = document.querySelector("#tasks_list_html");
    addBtn.addEventListener("click", addTask);
    checkData();
}



function addTask(){
    tasksList.push(taskTxt.value);
    buildList();
    saveData();
    clearForms();
}

function checkData(){
    if(localStorage.getItem('tasks')){
        tasksList = localStorage.getItem('tasks').split(",");
        // The split() method is used to split a string into an array of substrings, and returns the new array
        // https://www.w3schools.com/jsref/jsref_split.asp
    }
    buildList();
}

function buildList(){
    var list = "";
    for(var i=0; i < tasksList.length; i++){
        list += "<li class='list-group-item d-flex justify-content-between align-items-center'>" + tasksList[i] + "<span onclick='removeTask("+i+")' class='remove_btn badge bg-danger rounded-pill pointer'>X</span></li>";
    }
    taskListHTML.innerHTML = list;
}

function saveData(){
    localStorage.setItem('tasks', tasksList);
}

function clearForms(){
    taskTxt.value = '';
}

function removeTask(id){
    tasksList.splice(id, 1);
        // The splice() method adds/removes items to/from an array, and returns the removed item(s).
        // https://www.w3schools.com/jsref/jsref_splice.asp
    saveData();
    buildList();
}