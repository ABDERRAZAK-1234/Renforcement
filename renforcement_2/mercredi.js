// 1) Crée 6 contacts avec adresses complètes
let contacts = [
  {
    nom: "Yassine",
    entreprise: "Google",
    email: "yassine@gmail.com",
    telephone: "0611111111",
    ville: "Casablanca",
    adresse: {
      rue: "Rue Hassan II",
      code_postal: "20000",
      ville: "Casablanca",
      pays: "Maroc",
    },
  },
  {
    nom: "Sara",
    entreprise: "Microsoft",
    email: "sara@gmail.com",
    telephone: "0622222222",
    ville: "Rabat",
    adresse: {
      rue: "Avenue Mohamed V",
      code_postal: "10000",
      ville: "Rabat",
      pays: "Maroc",
    },
  },
  {
    nom: "Omar",
    entreprise: "Google",
    email: "omar@gmail.com",
    telephone: "0633333333",
    ville: "Casablanca",
    adresse: {
      rue: "Rue Zerktouni",
      code_postal: "20100",
      ville: "Casablanca",
      pays: "Maroc",
    },
  },
  {
    nom: "Imane",
    entreprise: "Amazon",
    email: "imane@gmail.com",
    telephone: "0644444444",
    ville: "Marrakech",
    adresse: {
      rue: "Rue Majorelle",
      code_postal: "40000",
      ville: "Marrakech",
      pays: "Maroc",
    },
  },
  {
    nom: "Hamza",
    entreprise: "Apple",
    email: "hamza@gmail.com",
    telephone: "0655555555",
    ville: "Rabat",
    adresse: {
      rue: "Rue Al Irfane",
      code_postal: "10100",
      ville: "Rabat",
      pays: "Maroc",
    },
  },
  {
    nom: "Lina",
    entreprise: "Amazon",
    email: "lina@gmail.com",
    telephone: "0666666666",
    ville: "Tanger",
    adresse: {
      rue: "Boulevard Pasteur",
      code_postal: "90000",
      ville: "Tanger",
      pays: "Maroc",
    },
  },
];

// 2) Affiche le nom et la ville de chaque contact
console.log("---- Nom + Ville ----");
contacts.forEach((c) => {
  console.log(`${c.nom} - ${c.ville}`);
});

// 3) Regroupe les contacts par ville
console.log("---- Groupé par ville ----");

let groupeParVille = {};

contacts.forEach((c) => {
  if (!groupeParVille[c.ville]) {
    groupeParVille[c.ville] = [];
  }
  groupeParVille[c.ville].push(c.nom);
});

console.log(groupeParVille);

// 4) Cherche tous les contacts d'une entreprise donnée
function chercherParEntreprise(entreprise) {
  return contacts.filter((c) => c.entreprise === entreprise);
}

console.log("---- Contacts Google ----");
console.log(chercherParEntreprise("Google"));

// 5) Modifie l'adresse d'un contact
function modifierAdresse(nomContact, nouvelleAdresse) {
  let contact = contacts.find((c) => c.nom === nomContact);

  if (contact) {
    contact.adresse = nouvelleAdresse;
    console.log(`Adresse modifiée pour ${nomContact}`);
  } else {
    console.log("Contact introuvable !");
  }
}

modifierAdresse("Sara", {
  rue: "Rue Agdal",
  code_postal: "10150",
  ville: "Rabat",
  pays: "Maroc",
});

// 6) Ajoute champ dernierContact
contacts.forEach((c) => {
  c.dernierContact = new Date(); // aujourd'hui
});

// On change quelques dates pour tester
contacts[0].dernierContact = new Date("2025-01-01");
contacts[3].dernierContact = new Date("2025-02-01");

// 7) Affiche les contacts pas contactés depuis +30 jours
console.log("---- Pas contactés depuis +30 jours ----");

let maintenant = new Date();

let contactsNonContactes = contacts.filter((c) => {
  let diffMs = maintenant - c.dernierContact;
  let diffJours = diffMs / (1000 * 60 * 60 * 24);
  return diffJours > 30;
});

console.log(contactsNonContactes);

class Ingredient {
  constructor(nom, quantite, unite, prix_unitaire, seuil_alerte, categorie) {
    this.nom = nom;
    this.quantite = quantite;
    this.unite = unite;
    this.prix_unitaire = prix_unitaire;
    this.seuil_alerte = seuil_alerte;
    this.categorie = categorie;
  }

  valeurStock() {
    return this.quantite * this.prix_unitaire;
  }
}

// 1. Créer 12 ingrédients de 4 catégories
let stock = [
  new Ingredient("Tomates", 3, "kg", 2.5, 5, "légume"),
  new Ingredient("Oignons", 10, "kg", 1.8, 4, "légume"),
  new Ingredient("Pommes de terre", 2, "kg", 1.2, 6, "légume"),

  new Ingredient("Poulet", 5, "kg", 7.5, 4, "viande"),
  new Ingredient("Boeuf", 2, "kg", 12, 3, "viande"),
  new Ingredient("Saucisses", 8, "pièces", 1.5, 10, "viande"),

  new Ingredient("Sel", 1, "kg", 0.8, 2, "épice"),
  new Ingredient("Poivre", 0.3, "kg", 15, 1, "épice"),
  new Ingredient("Paprika", 0.5, "kg", 10, 1, "épice"),

  new Ingredient("Eau", 20, "litres", 0.2, 10, "boisson"),
  new Ingredient("Jus d'orange", 4, "litres", 2.2, 6, "boisson"),
  new Ingredient("Coca", 15, "litres", 1.8, 8, "boisson"),
];

// 2. Afficher ingrédients sous seuil d'alerte
console.log("\n STOCK BAS :");
stock
  .filter((i) => i.quantite < i.seuil_alerte)
  .forEach((i) => {
    console.log(
      `- ${i.nom} (${i.quantite}${i.unite}) seuil: ${i.seuil_alerte}${i.unite}`,
    );
  });

// 3. Valeur totale du stock
let valeurTotale = stock.reduce((acc, ing) => acc + ing.valeurStock(), 0);
console.log("\n Valeur totale du stock :", valeurTotale.toFixed(2), "€");

// 4. Valeur du stock par catégorie
console.log("\n Valeur du stock par catégorie :");

let valeurParCategorie = {};

stock.forEach((ing) => {
  if (!valeurParCategorie[ing.categorie]) {
    valeurParCategorie[ing.categorie] = 0;
  }
  valeurParCategorie[ing.categorie] += ing.valeurStock();
});

for (let cat in valeurParCategorie) {
  console.log(`- ${cat} : ${valeurParCategorie[cat].toFixed(2)} €`);
}

// 5. Simuler une commande (plat)
function simulerCommande(nomPlat, ingredientsRequis) {
  console.log(`\n Commande : ${nomPlat}`);

  let manquants = [];

  ingredientsRequis.forEach((req) => {
    let ingredientStock = stock.find((i) => i.nom === req.nom);

    if (!ingredientStock) {
      manquants.push(`${req.nom} (introuvable)`);
    } else if (ingredientStock.quantite < req.quantite) {
      manquants.push(
        `${req.nom} manque ${req.quantite - ingredientStock.quantite}${ingredientStock.unite}`,
      );
    }
  });

  if (manquants.length > 0) {
    console.log("Commande impossible, il manque :");
    manquants.forEach((m) => console.log(" -", m));
    return;
  }

  // décrémenter le stock
  ingredientsRequis.forEach((req) => {
    let ingredientStock = stock.find((i) => i.nom === req.nom);
    ingredientStock.quantite -= req.quantite;
  });

  console.log(" Commande validée, stock mis à jour !");
}

// Exemple de plat
simulerCommande("Poulet aux légumes", [
  { nom: "Poulet", quantite: 2 },
  { nom: "Tomates", quantite: 4 },
  { nom: "Oignons", quantite: 1 },
  { nom: "Sel", quantite: 0.5 },
]);

// 6. Liste de courses
console.log("\n LISTE DE COURSES :");

stock
  .filter((i) => i.quantite < i.seuil_alerte)
  .forEach((i) => {
    let objectif = i.seuil_alerte * 2;
    let aCommander = objectif - i.quantite;
    console.log(
      `- ${i.nom} : commander ${aCommander}${i.unite} (objectif ${objectif}${i.unite})`,
    );
  });

class Equipe {
  constructor(nom, points, buts_pour, buts_contre, matchs_joues) {
    this.nom = nom;
    this.points = points;
    this.buts_pour = buts_pour;
    this.buts_contre = buts_contre;
    this.matchs_joues = matchs_joues;
  }

  diffButs() {
    return this.buts_pour - this.buts_contre;
  }
}

// 1. Créer 8 équipes
let equipes = [
  new Equipe("PSG", 45, 50, 22, 18),
  new Equipe("OM", 41, 40, 25, 18),
  new Equipe("Lyon", 38, 37, 28, 18),
  new Equipe("Monaco", 38, 42, 30, 18),
  new Equipe("Lille", 35, 33, 27, 18),
  new Equipe("Rennes", 32, 31, 29, 18),
  new Equipe("Nice", 30, 29, 26, 18),
  new Equipe("Nantes", 25, 20, 33, 18),
];

// 2-3. Trier classement
function trierClassement() {
  equipes.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return b.diffButs() - a.diffButs();
  });
}

// 4. Afficher classement formaté
function afficherClassement() {
  trierClassement();
  console.log("\n CLASSEMENT :");

  equipes.forEach((equipe, index) => {
    let diff = equipe.diffButs();
    let signe = diff >= 0 ? "+" : "";
    console.log(
      `${index + 1}. ${equipe.nom} — ${equipe.points} pts (diff: ${signe}${diff})`,
    );
  });
}

afficherClassement();

// 5. Simuler un match aléatoire
function simulerMatch(equipeA, equipeB) {
  let scoreA = Math.floor(Math.random() * 6);
  let scoreB = Math.floor(Math.random() * 6);

  console.log(
    `\n Match : ${equipeA.nom} ${scoreA} - ${scoreB} ${equipeB.nom}`,
  );

  equipeA.buts_pour += scoreA;
  equipeA.buts_contre += scoreB;
  equipeB.buts_pour += scoreB;
  equipeB.buts_contre += scoreA;

  equipeA.matchs_joues++;
  equipeB.matchs_joues++;

  if (scoreA > scoreB) {
    equipeA.points += 3;
    console.log(` Victoire ${equipeA.nom}`);
  } else if (scoreB > scoreA) {
    equipeB.points += 3;
    console.log(` Victoire ${equipeB.nom}`);
  } else {
    equipeA.points += 1;
    equipeB.points += 1;
    console.log(" Match nul");
  }
}

// 6. Simuler 5 matchs puis afficher classement
for (let i = 0; i < 5; i++) {
  let indexA = Math.floor(Math.random() * equipes.length);
  let indexB = Math.floor(Math.random() * equipes.length);

  while (indexA === indexB) {
    indexB = Math.floor(Math.random() * equipes.length);
  }

  simulerMatch(equipes[indexA], equipes[indexB]);
}

afficherClassement();
