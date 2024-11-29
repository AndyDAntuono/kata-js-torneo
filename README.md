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


/*SOLUZIONE PROPOSTA*/

FASE PRELIMINARE

- creo i file index.html e script.js
- nel file js creo una funzione per "stampare" lo sviluppo del torneo sia sulla cosnole che sulla pagine del browser
- sempre nel file js aggiiungo gli array dei personaggi e delle armi