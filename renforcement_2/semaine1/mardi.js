// -----------------MARDI — Renforcement : Méthodes de tableaux---------------

const chansons = [
  { titre: "Blinding Lights", artiste: "The Weeknd", duree: 200, genre: "Pop" },
  { titre: "Bohemian Rhapsody", artiste: "Queen", duree: 354, genre: "Rock" },
  { titre: "Shape of You", artiste: "Ed Sheeran", duree: 233, genre: "Pop" },
  {
    titre: "Smells Like Teen Spirit",
    artiste: "Nirvana",
    duree: 301,
    genre: "Grunge",
  },
  {
    titre: "Billie Jean",
    artiste: "Michael Jackson",
    duree: 294,
    genre: "Jazz",
  },
  { titre: "Lose Yourself", artiste: "Eminem", duree: 326, genre: "Rap" },
  { titre: "Rolling in the Deep", artiste: "Adele", duree: 228, genre: "Soul" },
  { titre: "One Dance", artiste: "Drake", duree: 173, genre: "Dancehall" },
  { titre: "Hotel California", artiste: "Eagles", duree: 391, genre: "Rock" },
  { titre: "Despacito", artiste: "Luis Fonsi", duree: 229, genre: "Reggaeton" },
];

// Affiche uniquement les titres de toutes les chansons
for (let i = 0; i < chansons.length; i++) {
  console.log("- " + chansons[i].titre);
}

// Crée un nouveau tableau contenant uniquement les chansons de genre "Rock"
let rockMusic = [];
for (let i = 0; i < chansons.length; i++) {
  if (chansons[i].genre == "Rock") {
    rockMusic.push(chansons[i]);
  }
}
console.log(rockMusic);

// Crée un nouveau tableau où chaque durée est convertie en format "3:45" (minutes:secondes)
let minSec = [];
for (let i = 0; i < chansons.length; i++) {
  let min = (chansons[i].duree / 60).toFixed(0);
  let sec = chansons[i].duree % 60;
  // console.log("- "+chansons[i].duree+" : "+min+":"+sec);
  minSec.push(min + ":" + sec + "s");
}
console.log(minSec);

// Calcule la durée totale de la playlist en minutes et secondes
let totalDuree = 0;
for (let i = 0; i < chansons.length; i++) {
  totalDuree += chansons[i].duree;
}
let min = (totalDuree / 60).toFixed(0);
let sec = totalDuree % 60;
console.log("La durée totale du Playlist est: " + min + ":" + sec);

// Trouve la chanson la plus longue
let musicDuree = chansons[0].duree;
let nom = "";
let musicNewDuree;
for (let i = 0; i < chansons.length; i++) {
  let chanson = chansons[i];
  if (chanson.duree >= musicDuree) {
    musicDuree = chanson.duree;
    nom = chanson.titre;
    let min = (chanson.duree / 60).toFixed(0);
    let sec = chanson.duree % 60;
    musicNewDuree = min + ":" + sec;
  }
}

console.log(
  nom +
    ", est la chansons la plus longue, avec une duree de: " +
    musicNewDuree +
    "s",
);

// Vérifie si toutes les chansons durent moins de 6 minutes
let musicMoinsSexMn = [];
let musicPlusSexMn = [];
for (let i = 0; i < chansons.length; i++) {
  if (chansons[i].duree > 360) {
    musicPlusSexMn.push(chansons[i].titre);
  } else {
    musicMoinsSexMn.push(chansons[i].titre);
  }
}
console.log(
  "Voici les chansons qui ont la durée plus de 6 minutes: " +
    musicPlusSexMn.join("-|-"),
);
console.log("------------------------------");
console.log(
  "Voici les chansons qui ont la durée moins de 6 minutes: " +
    musicMoinsSexMn.join("-|-"),
);

// Vérifie si au moins une chanson est du genre "Jazz"
let countJazz = 0;
for (let i = 0; i < chansons.length; i++) {
  let chanson = chansons[i];
  if (chanson.genre.match("Jazz")) {
    countJazz++;
  }
}
if (countJazz > 0) {
  console.log("Le geenre 'Jazz' il est dans: " + countJazz + " chansons");
} else {
  console.log("Aucan chansons avec genre 'Jazz' ");
}

// Trie les chansons par durée, de la plus courte à la plus longue
chansons.sort((a, b) => a.duree - b.duree);
console.log(chansons);

// *Challenge 2 — L'analyse des ventes

const ventes = [
  {
    mois: "Janvier",
    chiffre_affaires: 12000,
    nb_clients: 80,
    ville: "Casablanca",
  },
  { mois: "Février", chiffre_affaires: 15000, nb_clients: 95, ville: "Rabat" },
  {
    mois: "Mars",
    chiffre_affaires: 17000,
    nb_clients: 110,
    ville: "Marrakech",
  },
  { mois: "Avril", chiffre_affaires: 14000, nb_clients: 90, ville: "Tanger" },
  { mois: "Mai", chiffre_affaires: 20000, nb_clients: 130, ville: "Fès" },
  { mois: "Juin", chiffre_affaires: 22000, nb_clients: 150, ville: "Agadir" },
  {
    mois: "Juillet",
    chiffre_affaires: 25000,
    nb_clients: 170,
    ville: "Casablanca",
  },
  { mois: "Août", chiffre_affaires: 24000, nb_clients: 160, ville: "Rabat" },
  {
    mois: "Septembre",
    chiffre_affaires: 18000,
    nb_clients: 120,
    ville: "Marrakech",
  },
  {
    mois: "Octobre",
    chiffre_affaires: 21000,
    nb_clients: 140,
    ville: "Tanger",
  },
  { mois: "Novembre", chiffre_affaires: 19000, nb_clients: 125, ville: "Fès" },
  {
    mois: "Décembre",
    chiffre_affaires: 30000,
    nb_clients: 200,
    ville: "Agadir",
  },
];

// 1. Calcule le chiffre d'affaires total de l'année

let totalChaiffre = 0;
for (let i = 0; i < ventes.length; i++) {
  totalChaiffre += ventes[i].chiffre_affaires;
}
console.log(totalChaiffre.toFixed(2) + "$");

// 2. Calcule le chiffre d'affaires moyen par mois

let moyenneChaiffre = 0;
for (let i = 0; i < ventes.length; i++) {
  moyenneChaiffre += ventes[i].chiffre_affaires;
}
console.log(
  "Le chiffre d'ffaires moyenpar mois est: " +
    (moyenneChaiffre / 12).toFixed(2) +
    "$",
);

// 3. Trouve le mois avec le meilleur chiffre d'affaires

let bestChaiffre = ventes[0].chiffre_affaires;
let bestMounth = "";
for (let i = 0; i < ventes.length; i++) {
  let vent = ventes[i];
  if (vent.chiffre_affaires > bestChaiffre) {
    bestChaiffre = vent.chiffre_affaires;
    bestMounth = vent.mois;
  }
}
console.log(
  "Le moi qui le meilleur chiffre d'affaires est le moi: " + bestMounth,
);

// 4. Trouve le mois avec le moins de clients

let lessClient = ventes[0].mois;
let nbrClient = ventes[0].nb_clients;
for (let i = 0; i < ventes.length; i++) {
  let vent = ventes[i];
  if (vent.nb_clients < nbrClient) {
    nbrClient = vent.nb_clients;
    lessClient = vent.mois;
  }
}
console.log(
  "Le moi avec le moins de clients estt le moi: " +
    lessClient +
    ", avec " +
    nbrClient +
    " client",
);

// 5. Crée un nouveau tableau avec uniquement les mois où le CA dépasse 50 000€

let arrCh = [];
for (let i = 0; i < ventes.length; i++) {
  let vent = ventes[i];
  if (vent.chiffre_affaires > 50000) {
    arrCh.push(vent.mois);
  }
}
console.log("Voici les mois qui dépasse '50000$' est: " + arrCh);

// 6. Crée un résumé par ville : pour chaque ville, le CA total et le nombre total de clients
let passed = [];
for (let i = 0; i < ventes.length; i++) {
  let ville = ventes[i].ville;

  if (!passed.includes(ville)) {
    let totalChaiffreParVille = 0;
    let nbClients = 0;

    for (let j = 1; j < ventes.length; j++) {
      if (ventes[j].ville === ville) {
        totalChaiffreParVille += ventes[j].chiffre_affaires;
        nbClients += ventes[j].nb_clients;
      }
    }

    console.log(
      "Ville: " +
        ville +
        ", avec Chaiffre d'affaires: " +
        totalChaiffreParVille +
        ", avec nombre total de clients: " +
        nbClients,
    );
    passed.push(ville);
  }
}

// 7. Trie les mois par chiffre d'affaires décroissant

ventes.sort((a,b)=>b.chiffre_affaires - a.chiffre_affaires);
for(let i = 0 ; i < ventes.length ; i++){
    console.log(ventes[i].mois);
}

// 8. Calcule la croissance entre chaque mois (CA mois N - CA mois N-1) et affiche-la

let mounthCh = ventes[0].chiffre_affaires;
let chaifre;
let arrChiffre = [];
for(i = 0; i < ventes.length ; i++){
  let ventCh = ventes[i].chiffre_affaires;
  chaifre = (mounthCh - ventCh);
  arrChiffre.push(chaifre);
  chaifre = 0;
  mounthCh = ventes[i].chiffre_affaires
}
for(let i = 0 ; i < arrChiffre.length ; i++){
    if(arrChiffre[i] == 0){
        arrChiffre.splice(i,1);
    }else if(arrChiffre[i] < 0){
        arrChiffre[i] = arrChiffre[i] * (-1);
    }
}

console.log(arrChiffre.join(" | "));

// *Challenge 3 — Le système de notation 

let avis = [
  { pseudo: "Ali", note: 5, commentaire: "Top recette !", date: "2026-03-01" },
  { pseudo: "Sara", note: 4, commentaire: "Très bon", date: "2026-03-02" },
  { pseudo: "Yassine", note: 2.5, commentaire: "Moyen", date: "2026-03-03" },
  { pseudo: "Lina", note: 5, commentaire: "Excellent", date: "2026-03-04" },
  { pseudo: "Omar", note: 1, commentaire: "Pas terrible", date: "2026-03-05" },
  { pseudo: "Nadia", note: 3, commentaire: "Bon goût", date: "2026-03-06" },
  { pseudo: "Karim", note: 1.6, commentaire: "Je n'aime pas", date: "2026-03-07" },
  { pseudo: "Salma", note: 5, commentaire: "Parfait !", date: "2026-03-08" },
  { pseudo: "Hicham", note: 2, commentaire: "Correct", date: "2026-03-09" },
  { pseudo: "Imane", note: 3, commentaire: "Bien fait", date: "2026-03-10" },
  { pseudo: "Rachid", note: 2, commentaire: "Bof", date: "2026-03-11" },
  { pseudo: "Khadija", note: 2.5, commentaire: "Passable", date: "2026-03-12" },
  { pseudo: "Mehdi", note: 3, commentaire: "Ça passe", date: "2026-03-13" },
  { pseudo: "Fatima", note: 4, commentaire: "J'ai aimé", date: "2026-03-14" },
  { pseudo: "Anas", note: 5, commentaire: "Magnifique", date: "2026-03-15" }
];

// 1. Calcule la note moyenne arrondie à 1 décimale
let moyenneNotes = 0;
for(let i = 0 ; i < avis.length ; i++){
    moyenneNotes += avis[i].note;
}
console.log("La moyenne du class: "+parseFloat(moyenneNotes.toFixed(1)));


// 2. Compte combien d'avis par note (combien de 1 étoile, combien de 2 étoiles, etc.)
let arrNotes = avis.map(a => Math.floor(a.note));
console.log(arrNotes)
for (let n = 1; n <= 5; n++) {
  let count = 0;
  for (let i = 0; i < arrNotes.length; i++) {
    if (arrNotes[i] === n) {
      count++;
    }
  }
  console.log("Voici le nombre des avis qui ont " + n + " étoile: " + count);
}

// 3. Filtre les avis positifs (≥ 4) et les avis négatifs (≤ 2)

let positif = [];
let negatif = [];
for(let i = 0 ; i < avis.length ; i++){
  if(avis[i].note>=4){
    positif.push(avis[i].pseudo);
  }else if(avis[i].note <=2){
    negatif.push(avis[i].pseudo)
  }
}
// console.log(positif)
console.log("Voici les client qui ont fait une avis positif: "+positif.join(' | '));
console.log("Voici les client qui ont fait une avis negatif: "+negatif.join(' | '));

// 4. Trie les avis du plus récent au plus ancien
let year = avis[0].date[0]+avis[0].date[1]+avis[0].date[2]+avis[0].date[3];
let mounth = avis[0].date[5]+avis[0].date[6];
let day = avis[0].date[8]+avis[0].date[9];
let ancienArray = [];
for(let i = 0 ; i < avis.length ; i++){
    if(year > (avis[i].date[i]+avis[i].date[1]+avis[i].date[2]+avis[i].date[3])){
        ancienArray.push(avis[i].pseudo);
    }else if (year>(avis[i].date[i]+avis[i].date[1]+avis[i].date[2]+avis[i].date[3])){
      year = (avis[i].date[i]+avis[i].date[1]+avis[i].date[2]+avis[i].date[3]);
      mounth = (avis[i].date[5]+avis[i].date[6]);
      day = (avis[i].date[8]+avis[i].date[9]);
    }else if (year == (avis[i].date[i]+avis[i].date[1]+avis[i].date[2]+avis[i].date[3])){
      if(mounth > (avis[i].date[5]+avis[i].date[6])){
        ancienArray.push(avis[i].pseudo);
      }else if(mounth < (avis[i].date[5]+avis[i].date[6])){
        ancienArray.push(avis[i].pseudo);
      }
    }
}
