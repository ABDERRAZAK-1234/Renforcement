// ------- LUNDI — Programme de Sauvetage -------------

// Challenge 1 — La liste des participants

let participants = ["Ahmed", "Said", "Abderrazak", "Mohamed", "Ali", "Salah"];
// Affiche la liste complète
console.log(participants);
// le premier inscrit
console.log(participants[0]);
// le dernier inscrit
console.log(participants[5]);
// le nombre total de participants
console.log(participants.length);
// ajoute 2 nouveaux participants à la fin de la liste
let addParticipant = participants.push("Ibrahim", "Salim");
// retire le dernier de la liste
let removeLastParticipant = participants.pop();
// affiche l'élément retiré
console.log("The name you delete is : " + removeLastParticipant);
// retire le premier de la liste
let removeFirstParticipant = participants.shift();
// Affiche l'état final

console.log("La liste finale de tableau: " + participants);

// -----------------------------------------------------------------------------------------------

// *Challenge 2 — Le relevé de notes

let notes = [12, 8, 15, 6, 18, 9, 14];

// calcule :

// la somme de toutes les notes
let somme = 0;
for (let i = 0; i < notes.length; i++) {
  somme += notes[i];
}
console.log("La somme des notes: " + somme);

// la moyenne de la classe
let moyene = 0;
moyene += somme / notes.length;

console.log("La moyenne du classe est: " + parseFloat(moyene.toFixed(2)));

// la note la plus haute
let notePlusHaute = notes[0];
for (let i = 0; i < notes.length; i++) {
  if (notes[i] >= notePlusHaute) {
    notePlusHaute = notes[i];
  }
}
console.log("La note la plus grande est: " + notePlusHaute);

// la note la plus basse

let notePlusBasse = notes[0];
for (let i = 0; i < notes.length; i++) {
  if (notes[i] <= notePlusBasse) {
    notePlusBasse = notes[i];
  }
}
console.log("La note la plus basse est: " + notePlusBasse);

// le nombre d'élèves qui ont la moyenne (≥ 10)

let nbrEleveOntMoyene = 0;
for (let i = 0; i < notes.length; i++) {
  if (notes[i] >= 10) {
    nbrEleveOntMoyene++;
  }
}
console.log("Le nombre des eleves qui ont la moyenne" + nbrEleveOntMoyene);

//  Affiche un bulletin de résultats formaté
console.log("------------------------ Bulletin ------------------------");
console.log("                                                          ");
console.log("                     Nombre des éleves: " + notes.length);
console.log("----------------------------------------------------------");
console.log("                     La somme des notes: " + somme);
console.log("----------------------------------------------------------");
console.log("                     La moyenne du classe: " + moyene.toFixed(2));
console.log("----------------------------------------------------------");
console.log(
  "                     La note la plus grande est: " + notePlusHaute,
);
console.log("----------------------------------------------------------");
console.log("                     La note la plus basse est: " + notePlusBasse);
console.log("----------------------------------------------------------");

// *Challenge 3 — La fiche d'identité

let infoPerso = {
  nom: "Aamaich",
  prenom: "Abderrazak",
  age: "21",
  ville: "Guelmim",
  email: "abderrazak@gmail.com",
};

// Affiche une phrase de présentation complète

console.log("Nom compléte: " + infoPerso.nom + " " + infoPerso.prenom);
console.log("Age: " + infoPerso.age);
console.log("Ville: " + infoPerso.ville);
console.log("Email: " + infoPerso.email);

// Modifie la ville de la personne
let x = prompt("modifier la ville: ");
infoPerso.ville = x;
console.log(infoPerso);

// Ajoute un numéro de téléphone à sa fiche
infoPerso.numero = prompt("Ajouter votre numero: ");
console.log(infoPerso);

// Affiche la liste de toutes les informations disponibles sur cette personne (les clés) et leurs valeurs.
let keys = Object.keys(infoPerso);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ": " + infoPerso[keys[i]]);
}

// *Challenge 4 — Le ticket de caisse

let listeArticle = [
  { nom: "Telephone", quantite: 1, prixUnitaire: 3000 },
  { nom: "Casque", quantite: 2, prixUnitaire: 200 },
  { nom: "Clavier", quantite: 1, prixUnitaire: 150 },
  { nom: "Souris", quantite: 3, prixUnitaire: 100 },
  { nom: "Écran", quantite: 1, prixUnitaire: 1200 },
];

// Affiche chaque ligne du ticket sous la forme "Lait x2 = 3.00€"
for (let i = 0; i < listeArticle.length; i++) {
  let article = listeArticle[i];
  let nom = article.nom;
  let prixTotal = article.quantite * article.prixUnitaire;
  console.log(
    nom + " x" + article.quantite + " = " + prixTotal.toFixed(2) + "$",
  );
}

// Calcule et affiche le sous-total

let total = 0;
for (let i = 0; i < listeArticle.length; i++) {
  let art = listeArticle[i];
  let priceTot = art.quantite * art.prixUnitaire;
  total += priceTot;
}
console.log("Le total du prix des articles est: " + total.toFixed(2) + "$");

// la TVA (20%) et le total TTC
let totale = 0;
for (let i = 0; i < listeArticle.length; i++) {
    let article = listeArticle[i];
    let prixTotal = article.quantite * article.prixUnitaire;
    totale += priceTot * 1.2;
}
console.log("Le prix total apres ajouter TVA(20%): " + totale.toFixed(2) + "$");

// *Challenge 5 — Le trombinoscope

const etudiants = [
    { nom: "El Amrani", prenom: "Yassine", age: 19, moyenne: 11.5 },
    { nom: "Bennani", prenom: "Salma", age: 23, moyenne: 16.21 },
    { nom: "Alaoui", prenom: "Karim", age: 18, moyenne: 13.83 },
    { nom: "Tazi", prenom: "Nora", age: 24, moyenne: 17.00 },
    { nom: "Idrissi", prenom: "Omar", age: 20, moyenne: 12.98 },
    { nom: "Fassi", prenom: "Lina", age: 22, moyenne: 15.63 },
];

// affiche les étudiants qui ont une moyenne supérieure ou égale à 12
console.log("--------Les etudiants qui ont la note superieur a 12 est:--------------");

for(let i = 0 ; i < etudiants.length ; i++){
    let etudiant = etudiants[i];
    if(etudiant.moyenne>=12.00){
        console.log("Nom Complete: "+etudiant.nom+" "+etudiant.prenom+", avec moyenne: "+etudiant.moyenne.toFixed(2));
    }
}

// affiche les étudiants triés du plus jeune au plus âgé
let arrJeune = [];
let arrAgé = [];
for(let i = 0 ; i < etudiants.length ; i++){
    let etudiant = etudiants[i];
    if(etudiant.age <= 20){
        arrJeune.push(etudiant.nom+" "+ etudiant.prenom);
    }else {
        arrAgé.push(etudiant.nom+" "+ etudiant.prenom);
    }
}
console.log("Les étudiants qui ont jeune est :"+arrJeune.join("|"));
console.log("----------------------------------------------------");
console.log("Les étudiants qui ont agé est :"+arrAgé.join("|"));

// cherche un étudiant par son nom : s'il existe affiche ses informations, sinon affiche "Étudiant non trouvé".

let cherche = prompt("Chercher a un etudiant avec sont nom : ");
let ishere = true;
for(let i = 0 ; i < etudiants.length ; i++){
    let etudiant = etudiants[i];
    let nom = etudiant.nom;
    
    if(nom.match(cherche)){
        ishere = false;
        console.log("Nom Complete: "+etudiant.nom+" "+etudiant.prenom+",avec age: "+etudiant.age+", avec moyenne: "+etudiant.moyenne.toFixed(2));
        break;
    }
}
if(ishere){
console.log("Étudiant non trouvé");
}
