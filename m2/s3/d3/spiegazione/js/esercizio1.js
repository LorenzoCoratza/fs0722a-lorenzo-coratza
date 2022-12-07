// Set the date we're counting down to
var OrarioEntrata = new Date().getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the differenza between now and the count down date
  var differenza = now - OrarioEntrata;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(differenza / (1000 * 60 * 60 * 24));
  var hours = Math.floor((differenza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((differenza % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((differenza % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
}, 1000);

function timeCounter() {
    if (typeof(Storage) != undefined) {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("timer").innerHTML = "Hai passato :" + sessionStorage.clickcount + "s dentro questa pagina";
    } else {
        document.getElementById("result").innerHTML = "Il tuo browser non supporta Web storage...";
    }
}
setInterval(timeCounter,1000)





