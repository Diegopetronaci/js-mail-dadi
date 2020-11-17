alert("Autorizzazione solo con Diego@gmail.com")

// Chiedi all’utente la sua email,

var email = (prompt("Scrivi l' Email"));
console.log("email");


// controlla che sia nella lista di chi può accedere,

var utenti = [ "romi@gmail.com", "gianluca@gmail.com", "nicco@gmail.com", "fabio@gmail.com",];
console.log("autorizzati");

var emailDiego = utenti.unshift("Diego@gmail.com");

var autorizzati = utenti [0];

// stampa un messaggio appropriato sull’esito del controllo.

if (email == autorizzati) {
  // alert ("Email Autorized");
  document.getElementById("esito") .innerHTML = "L' Email è stata Accettata";
  console.log("accepted");
} else {
  document.getElementById("esito") .innerHTML = "L' Email è stata rifiutata";
  console.log("blocked");
}
