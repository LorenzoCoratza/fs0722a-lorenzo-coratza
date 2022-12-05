function GetID(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var date = document.getElementById("date").value;
    var newPerson = new Person (name, surname, date);
    newPerson.write().bind()
}



function Person(name, surname, date){
    this.name = name ;
    this.surname = surname ;
    this.date = date ;

}

Person.prototype.write = function(){
    document.get
}