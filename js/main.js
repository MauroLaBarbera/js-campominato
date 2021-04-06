/*- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, 
se il numero è presente nella lista dei numeri generati la partita termina altrimenti
continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” 
o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha inserito un numero consentito.*/

//NUMERO MASSIMO DI NUMERI DA GENERARE
var numeroMax = 10;
//NUMERO MASSIMO DI BOMBE DA GENERARE
var numeroBombe = 2;

//ARRAY VUOTO DOVE INSERIREMO LE BOMBE RANDOM DA CREARE
var listaBomb = [];
//ARRAY VUOTO DA RIMEMPIRE CON I NUMERI INSERITI DALL'UTENTE
var numConsentiti = [];
//NUMERO INSERITO DALL'UTENTE
var utente = 0; 


/*BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il 
range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50*/

//CHIEDIAMO ALL'UTENTE DI SCEGLIERE IL LIVELLO DI DIFFICOLTA'
var livello = parseInt( prompt ('Scegli la difficoltà da 0 a 2').trim() );

//CONTROLLIAMO SE IL NUMERO INSERITO SIA VERAMENTE UN NUMERO E CHE NON SFORI I RANGE
while (isNaN(livello) || 0 > livello || 2 < livello) {
     livello = parseInt( prompt ('Scegli la difficoltà da 0 a 2').trim() );
}


switch (livello) {
    case 0: 
        numeroMax = 10;
    break;
    case 1: 
        numeroMax = 50;
        numeroBombe= 10;
        break;
    case 2: 
        numeroMax = 70;
        numeroBombe= 20;
}

//PROBABILITA' DI SUPERARE IL LIVELLO 
var possibilita = numeroMax - numeroBombe;

//GENERAZIONE BOMBE
while (listaBomb.length < numeroBombe) {
    var bomba = numeroRandom(numeroMax);

//CREIAMO UN IF PER IMPEDIRE DI GENERARE DOPPIONI DI BOMBE    
    if (! listaBomb.includes(bomba)) {
        listaBomb.push(bomba); //SE SUPERA I REQUISITI ALLORA PUSHIAMO LE BOMBA DENTRO L'ARRAY 'LISTABOMB'
    }
}
console.log(listaBomb);


//FUNZIONE GEN NUMERI RANDOM
function numeroRandom(max) {
    return Math.floor (Math.random() * max ) + 1;
}

/**
 * CREAZIONE LOOP GIOCO
 */

//CREIAMO UN WHILE CHE DEVE RISPETTARE LE SEGUENTI REGOLE: DOBBIAMO ESSERE SOTTO IL NUMERO DI POSSIBILITA' E IL NUM NON DEVE ESSERE UNA BOMBA
while ( (numConsentiti.length < possibilita) && (! listaBomb.includes(utente)) ) {
    //FACCIAMO SCEGLIERE ALL'UTENTE UN NUMERO
    utente = parseInt(prompt('Inserisci un numero da 1 a ' + numeroMax + '\nNumeri indovinati: ' + numConsentiti.length + ' di ' + possibilita) );
    //CONTROLLIAMO SE L'UTENTE HA EFFETTIVAMENTE INSERITO UN NUMERO E SE RIENTRA NEL RANGE DI 1 ED IL NUMERO MASSIMO
    while (isNaN(utente) ||  1 > utente || utente > numeroMax) {
        utente = parseInt(prompt('Valore non valido. Inserisci un numero da 1 a ' + numeroMax ) );

    }
    console.log(utente);
    //ADESSO CONTROLLIAMO SE IL NUMERO INSERITO DALL'UTENTE E' UGUALE AL NUMERO CHE RAPPRESENTA LA BOMBA O SE HA GIA' INSERITO QUEL NUMERO
    if(listaBomb.includes(utente) ) {
        alert('Mi spiace ma hai perso =( \nHai provato con successo ' + numConsentiti.length + ' volte prima di morire.');
    } else if (numConsentiti.includes(utente)) {
        alert('Numero già inseirito, inserisci un altro numero')
    } else {
        numConsentiti.push(utente);
    }

    //CONTROLLO RAGGIUNGIMENTO DELLE POSSIBILITA'
    if (numConsentiti.length === possibilita) {
        alert('Complimenti!! Hai vinto!!  =D');
    }
}

console.log(numConsentiti);
