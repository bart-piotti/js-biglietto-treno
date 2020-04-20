// Recupero l'età dell'utente e quanti km vuole percorrere
var km = prompt("Quanti Km devi percorrere?")
var eta = prompt("Quanti anni hai?")

//Applico lo sconto a seconda dell'età
if (eta < 18) {
    var prezzo = km * 0.21 / 100 * 80;
    //Faccio in modo che siano sempre presenti 2 cifre decimali (fino all'ordine delle centinaia per pragmatismo)
    var prezzo_arrotondato = prezzo.toString().substr(0, 4);
        if (prezzo > 9.99) {
            var prezzo_arrotondato = prezzo.toString().substr(0, 5);
        }
        if (prezzo > 99.99) {
            var prezzo_arrotondato = prezzo.toString().substr(0, 6);
        }
}

else if (eta >= 60) {
    prezzo = km * 0.21 / 100 * 60;
    //Faccio in modo che siano sempre presenti 2 cifre decimali (fino all'ordine delle centinaia per pragmatismo)
    prezzo_arrotondato = prezzo.toString().substr(0, 4);
        if (prezzo > 9.99) {
            var prezzo_arrotondato = prezzo.toString().substr(0, 5);
        }
        if (prezzo > 99.99) {
            var prezzo_arrotondato = prezzo.toString().substr(0, 6);
        }
}

else {
    prezzo = km * 0.21;
    //Faccio in modo che siano sempre presenti 2 cifre decimali (fino all'ordine delle centinaia per pragmatismo)
    prezzo_arrotondato = prezzo.toString().substr(0, 4);
        if (prezzo > 9.99) {
            var prezzo_arrotondato = prezzo.toString().substr(0, 5);
        }
        if (prezzo > 99.99) {
            var prezzo_arrotondato = prezzo.toString().substr(0, 6);
        }
}

// stampo il prezzo del biglietto
console.log("Il prezzo del biglietto è: " + prezzo_arrotondato + " Euro");
