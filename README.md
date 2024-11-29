/*ESERCIZIO DEL CODE TRAINING 29/11/24 - JS TORNEO*/

/*CONSEGNA*/

esercizio di oggi: **JS: TORNEO**
nome repo: **kata-js-torneo**

Il torneo Boolkaichi è alle porte e in tanti sono giunti per mettersi alla prova in questo speciale evento.
I combattenti che sono riusciti a registrarsi sono stati valutati e accanto al loro nome è stato segnato anche il loro livello di potenza. 
Il torneo si svolgerà in 5 fasi:

- Scelta dell'arma
- Allenamento
- Qualificazione
- Combattimento
- Premiazione

Utilizzando i metodi degli array (map, filter, sort, slice/splice, push) definire l'algoritmo delle 5 fasi e stampare in console il risultato di ognuna di esse.

**Milestone 1 - Scelta dell’arma:**

ogni combattente sceglierà casualmente un'arma dalla relativa lista. Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.

**Milestone 2 - Allenamento:**

ogni combattente si sottoporrà ad un allenamento che incrementerà (o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.

**Milestone 3 - Qualificazione:**

escludiamo dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.

**Milestone 4 - Combattimento:**

i combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco, assicurandosi che ognuno combatta una sola volta. 

In ogni scontro vincerà il combattente con la potenza più alta. In caso di parità vincerà chi "gioca in casa", ossia chi viene prima nell'elenco.

**NB:** bisogna assicurarsi che l'elenco contenga un numero pari di combattenti, altrimenti l'ultimo non avrebbe un avversario. Potrebbe essere necessario aggiungere un combattente "Robot" con potenza "4000" all'ultimo minuto.

**Milestone 5 - Premiazione:**

tra tutti i vincitori degli scontri, saliranno sul podio i 3 combattenti con la potenza più alta, in ordine decrescente.

**Bonus:**

Il torneo non finisce qui! Dopo il primo girone di scontri, non passiamo subito alla premiazione, ma facciamo in modo che i vincitori si scontrino ancora e ancora, finchè non ne resterà solo uno!

NB: L'elenco dei combattenti è rappresentato dall'array **fighters,** quello delle armi dall’array **weapons**. Questi array non vanno modificati!

**ARRAY DEI PERSONAGGI**
const fighters = [
  {
      name: 'Freezer',
      power: 8000
  },
  {
      name: 'Vegeta',
      power: 8500
  },
  {
      name: 'Crilin',
      power: 500
  },
  {
      name: 'Mr Satan',
      power: 50
  },
  {
      name: 'Junior',
      power: 6000
  },
  {
      name: 'Goku',
      power: 9001
  },
  {
      name: 'Tensing',
      power: 450
  },
  {
      name: 'Videl',
      power: 300
  },
  {
      name: 'Bulma',
      power: 20
  },
  {
      name: 'C-18',
      power: 7800
  },
  {
      name: 'Gohan',
      power: 8900
  },
  {
      name: 'Trunks',
      power: 1250
  }
];

**ARRAY DEI PERSONAGGI**

const weapons = [
  { 
      name: "Ventaglio della Musa", 
      power: 15 
  },
  { 
      name: "Scouter", 
      power: 30 
  },
  { 
      name: "Bastone Roshi", 
      power: 60 
  },
  { 
      name: "Fagioli Magici", 
      power: 70 
  },
  { 
      name: "Katana di Yajirobei", 
      power: 85 
  },
  { 
      name: "Spada del Dragone Azzurro", 
      power: 115 
  },
  { 
      name: "Armatura Saiyan", 
      power: 145 
  },
  { 
      name: "Cannone da braccio", 
      power: 170 
  },
  { 
      name: "Nuvola d'oro", 
      power: 200 
  },
  { 
      name: "Bastone Nyoi", 
      power: 220
  },
  { 
      name: "Spada Z", 
      power: 235 
  },
  { 
      name: "Orecchini Potara", 
      power: 250 
  }
];

**Obbiettivi**
- ripasso delle strutture dati
- allenare logica e manipolazione dati
- sfruttare strumenti di debug
- sfruttare la documentazione

**Argomenti da ripassare**
- Strutture dati
- Cicli
- Condizioni
- Metodi degli array
- Operatore spread
- Math.random()


/*SOLUZIONE PROPOSTA*/

FASE PRELIMINARE

- creo i file index.html e script.js
- nel file js creo una funzione per "stampare" lo sviluppo del torneo sia sulla cosnole che sulla pagine del browser
- sempre nel file js aggiiungo gli array dei personaggi e delle armi

MILESTONE 1

1 --- creo una copia dell’array weapons usando l’operatore spread ([...weapons]) per non modificare l’array originale.
2.1 - faccio in modo che ogni commbattente scelga un arma casualmente tramite il metodo Math.random()
2.2 - rimuovo l’arma dall’array delle armi disponibili usando il metodo splice().
2.3 - aggiorno la potenza del combattente aggiungendo il valore power dell’arma.
3 --- restituisco un nuovo array di combattenti, ciascuno con un’arma e una potenza aggiornata.
4 --- la funzione chooseWeapons permetto che ogni combattente sceglie un'arma casualmente, e l'arma scelta non sarà disponibile per gli altri.

MILESTONE 2

1 --- per ogni combattente genero un moltiplicatore casuale con Math.random() (valore tra 1 e 100).
1.1 - moltiplico la potenza originale del combattente per questo moltiplicatore.
1.2 - applico Math.floor() per arrotondare il risultato verso il basso.
2 --- restituisco un nuovo array di combattenti con potenza aggiornata.
3 --- ogni combattente partecipa a un allenamento, durante il quale la sua potenza viene moltiplicata per un numero casuale compreso tra 1 e 100.

MILESTONE 3

1 --- creo la funzione qualification inn cui uso un metodo filter() per selezionare solo i combattenti con power >= 2000.
2 --- stampo i nomi dei qualificati con i metodo map() e join(", ").
3 --- restituisco un array contenente solo i combattenti qualificati.
4 --- lo scopo della funzione qualificatiom è quell di escludere dal torneo i combattenti che, dopo l’allenamento, non hanno raggiunto almeno 2000 di potenza.

MILESTONE 4

1 ----- se il numero di combattenti è dispari, aggiungiamo un "Robot" con potenza 4000.
2 ----- imposto un ciclo for per accoppiare i combattenti due a due.
3 ----- per ogni coppia stampo il combattimento e determino il vincitore confrontando la potenza.
3.1 --- in caso di parità, decidio che il primo combattente che appare nel'elenco vince.
3.1.1 - Con questa regola, ogni combattimento ha sempre un vincitore certo, anche in caso di parità. Così facendo evito di introdurre ulteriori fattori arbitrari.
3.1.2 - Spiegazione più dettagliata del punto precedente:

        const winner = fighter1.power >= fighter2.power ? fighter1 : fighter2;

        Se fighter1.power > fighter2.power, fighter1 vince (potenza più alta).
        Se fighter1.power === fighter2.power, anche in questo caso fighter1 vince, perché l’operatore >= dà priorità al primo.

4 ----- restituisco un array con i vincitori.

MILESTONE 5

1 - creo una copia dell’array con l’operatore spread ([...fighters]).
2 - uso il metodo sort() per ordinare i combattenti in ordine decrescente di potenza.
3 - utilizzo il metodo slice(0, 3) per prendere i primi tre combattenti.
4 - tampiamo i vincitori e restituiamo il podio.