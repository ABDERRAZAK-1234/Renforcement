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
