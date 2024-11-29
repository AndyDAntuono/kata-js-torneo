// Funzione per loggare messaggi nella console e nel browser
function logMessage(message) {
    console.log(message); // Stampa nella console
    const p = document.createElement("p"); // Crea un elemento <p>
    p.textContent = message; // Imposta il contenuto del messaggio
    document.body.appendChild(p); // Aggiunge il messaggio al corpo della pagina
  }
  
  // Array di personaggi e armi forniti
  const fighters = [
    { name: 'Freezer', power: 8000 },
    { name: 'Vegeta', power: 8500 },
    { name: 'Crilin', power: 500 },
    { name: 'Mr Satan', power: 50 },
    { name: 'Junior', power: 6000 },
    { name: 'Goku', power: 9001 },
    { name: 'Tensing', power: 450 },
    { name: 'Videl', power: 300 },
    { name: 'Bulma', power: 20 },
    { name: 'C-18', power: 7800 },
    { name: 'Gohan', power: 8900 },
    { name: 'Trunks', power: 1250 }
  ];
  
  const weapons = [
    { name: "Ventaglio della Musa", power: 15 },
    { name: "Scouter", power: 30 },
    { name: "Bastone Roshi", power: 60 },
    { name: "Fagioli Magici", power: 70 },
    { name: "Katana di Yajirobei", power: 85 },
    { name: "Spada del Dragone Azzurro", power: 115 },
    { name: "Armatura Saiyan", power: 145 },
    { name: "Cannone da braccio", power: 170 },
    { name: "Nuvola d'oro", power: 200 },
    { name: "Bastone Nyoi", power: 220 },
    { name: "Spada Z", power: 235 },
    { name: "Orecchini Potara", power: 250 }
  ];

  // Milestone 1: Scelta dell'arma
function chooseWeapons(fighters, weapons) {
    const availableWeapons = [...weapons]; // Copia delle armi originali
    return fighters.map(fighter => {
      const randomIndex = Math.floor(Math.random() * availableWeapons.length);
      const chosenWeapon = availableWeapons.splice(randomIndex, 1)[0]; // Rimuove l'arma scelta
      logMessage(`${fighter.name} ha scelto l'arma ${chosenWeapon.name}, incrementando la sua potenza di ${chosenWeapon.power}`);
      return { ...fighter, weapon: chosenWeapon.name, power: fighter.power + chosenWeapon.power };
    });
  }

// Miestone 2: Allenamento
function training(fighters) {
    return fighters.map(fighter => {
      const trainingMultiplier = Math.random() * 100 + 1; // Moltiplicatore casuale tra 1 e 100
      const trainedPower = Math.floor(fighter.power * trainingMultiplier);
      logMessage(`${fighter.name} ha terminato l'allenamento. Potenza incrementata a ${trainedPower}`);
      return { ...fighter, power: trainedPower };
    });
  }

// Milestone 3: Qualificazione
function qualification(fighters) {
    const qualified = fighters.filter(fighter => fighter.power >= 2000);
    logMessage(`Qualificati: ${qualified.map(f => f.name).join(", ")}`);
    return qualified;
  }

// Milestone 4: Combattimento
function combat(fighters) {
    if (fighters.length % 2 !== 0) {
      fighters.push({ name: "Robot", power: 4000, weapon: "Laser" });
      logMessage("Aggiunto combattente Robot per pareggiare i partecipanti.");
    }
  
    const winners = [];
    for (let i = 0; i < fighters.length; i += 2) {
      const fighter1 = fighters[i];
      const fighter2 = fighters[i + 1];
  
      logMessage(`${fighter1.name} (${fighter1.power}) VS ${fighter2.name} (${fighter2.power})`);
      const winner = fighter1.power >= fighter2.power ? fighter1 : fighter2;
      logMessage(`Vincitore: ${winner.name}`);
      winners.push(winner);
    }
    return winners;
  }