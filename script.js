// Recupero l'età dell'utente e quanti km vuole percorrere
var km = prompt("Quanti Km devi percorrere?")
var eta = prompt("Quanti anni hai?")

    //Applico lo sconto a seconda dell'età
    if (eta < 18) {
        //Calcolo il prezzo del biglietto
        var prezzo = km * 0.21 / 100 * 80;

        //Faccio in modo che siano sempre presenti 2 cifre decimali (fino all'ordine delle centinaia per pragmatismo)
        var prezzo_arrotondato = prezzo.toString().substr(0, 4);
            if (prezzo > 9.99) {
                var prezzo_arrotondato = prezzo.toString().substr(0, 5);
            }
            if (prezzo > 99.99) {
                var prezzo_arrotondato = prezzo.toString().substr(0, 6);
            }

        //Calcolo lo sconto di cui ha usufruito l'utente
        var sconto = (km * 0.21) - prezzo;
        //Arrotondo lo sconto
        sconto_arrotondato = sconto.toString().substr(0, 4);
            if (sconto > 9.99) {
                sconto_arrotondato = sconto.toString().substr(0, 5);
            }
            if (sconto > 99.99) {
                sconto_arrotondato = sconto.toString().substr(0, 6);
            }

        //Stampo lo sconto e il costo del biglietto
        console.log("Hai usufruito dello sconto Young Traveler del 20% ammontante a: " + sconto_arrotondato + " Euro");
        console.log("Il prezzo del biglietto scontato è: " + prezzo_arrotondato + " Euro");
    }

    else if (eta >= 65) {
        prezzo = km * 0.21 / 100 * 60;

        //Faccio in modo che siano sempre presenti 2 cifre decimali (fino all'ordine delle centinaia per pragmatismo)
        prezzo_arrotondato = prezzo.toString().substr(0, 4);
            if (prezzo > 9.99) {
                var prezzo_arrotondato = prezzo.toString().substr(0, 5);
            }
            if (prezzo > 99.99) {
                var prezzo_arrotondato = prezzo.toString().substr(0, 6);
            }

        //Calcolo lo sconto di cui ha usufruito l'utente
        var sconto = (km * 0.21) - prezzo;
        sconto_arrotondato = sconto.toString().substr(0, 4);
            if (sconto > 9.99) {
                sconto_arrotondato = sconto.toString().substr(0, 5);
            }
            if (sconto > 99.99) {
                sconto_arrotondato = sconto.toString().substr(0, 6);
            }

        //Stampo lo sconto e il costo del biglietto
        console.log("Hai usufruito dello sconto Expert Traveler del 40% ammontante a: " + sconto_arrotondato + " Euro");
        console.log("Il prezzo del biglietto scontato è: " + prezzo_arrotondato + " Euro");
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

        // stampo il prezzo del biglietto
        console.log("Il prezzo del biglietto è: " + prezzo_arrotondato + " Euro");
    }
