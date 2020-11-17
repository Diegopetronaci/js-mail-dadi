// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// var xMe = document.getElementById ("generatore_me").value = "Tira per me";
// var xBot = document.getElementById ("generatore_bot").value = "Tira per bot";







// document.getElementById("numero_mio").innerHTML = "è uscito il numero: ";
// document.getElementById("numero_bot").innerHTML = "è uscito il numero: ";


var btnGeneraMio = document.getElementById('generatore_mio');
var btnGeneraBot = document.getElementById('generatore_bot');


btnGeneraMio.addEventListener("click", function () {
var dadoMio = Math.floor(Math.random() * 6) + 1;
document.getElementById("numero_mio").innerHTML = "è uscito il numero: " + dadoMio;
console.log(dadoMio);
});

btnGeneraBot.addEventListener("click", function () {
var dadoBot = Math.floor(Math.random() * 6) + 1;
document.getElementById("numero_bot").innerHTML = "è uscito il numero: " + dadoBot;
console.log(dadoBot);
});

if (dadoMio > dadoBot) {
  alert("YOU WIN");
  console.log("vittoria");
} else if {
  alert("YOU LOSE");
  console.log("sconfitta");
}
