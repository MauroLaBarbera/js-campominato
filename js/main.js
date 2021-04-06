/*- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, 
se il numero è presente nella lista dei numeri generati la partita termina altrimenti
continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” 
o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha inserito un numero consentito.*/

//NUMERO MASSIMO DI NUMERI DA GENERARE
var numeroMax = 100;
//NUMERO MASSIMO DI BOMBE DA GENERARE
var numeroBombe = 16;
//PROBABILITA' DI SUPERARE IL LIVELLO 
var possibilita = numeroMax - numeroBombe;
//ARRAY VUOTO DOVE INSERIREMO LE BOMBE RANDOM DA CREARE
var listaBomb = [];
//ARRAY VUOTO DA RIMEMPIRE CON I NUMERI INSERITI DALL'UTENTE
var numConsentiti = [];
//NUMERO INSERITO DALL'UTENTE
var utente = 0; 

//GENERAZIONE BOMBE
while (listaBomb.length < numeroBombe) {
    var bomba = numeroRandom(numeroBombe);

//CREIAMO UN IF PER IMPEDIRE DI GENERARE DOPPIONI DI BOMBE    
    if (! listaBomb.includes(bomba)) {
        listaBomb.push(bomba); //SE SUPERA I REQUISITI ALLORA PUSHIAMO LE BOMBA DENTRO L'ARRAY 'LISTABOMB'
    }
}
console.log(listaBomb);


//FUNZIONE GEN NUMERI RANDOM
function numeroRandom(max) {
    return Math.floor (Math.random() * max) +1;
}










/*BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il 
range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50*/