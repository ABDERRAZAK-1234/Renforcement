# 📅 SEMAINE 3 — PHP POO (Bases) & SQL Jointures avancées

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

> **Objectif** : Comprendre la syntaxe PHP et créer une première classe  
> **Niveau** : Débutant ⭐

---

## S-Challenge 1 — Hello PHP

Crée un fichier `index.php`. Déclare des variables `$nom`, `$age`, `$ville`. Affiche "Bonjour, je suis [nom], j'ai [age] ans et j'habite à [ville]".

---

## S-Challenge 2 — Conditions et boucles PHP

Crée une variable `$note` entre 0 et 20. Avec if/elseif/else affiche : ≥16 "Très bien", ≥14 "Bien", ≥10 "Passable", sinon "Insuffisant". Crée un tableau `$prenoms` de 5 éléments et affiche chacun avec `foreach`.

---

## S-Challenge 3 — Fonctions PHP

Crée 3 fonctions : `saluer($prenom)` qui retourne "Bonjour, $prenom !", `calculerTTC($prixHT)` qui retourne le prix + 20% TVA, `estMajeur($age)` qui retourne true/false. Teste chacune.

---

## S-Challenge 4 — Ma première classe

Crée une classe `Animal` avec deux propriétés `$nom` et `$race`, un constructeur `__construct($nom, $race)`, et une méthode `sePresenter()` qui affiche "Je suis [nom], un [race]". Crée 3 animaux et appelle `sePresenter()`.

---

## S-Challenge 5 — Classe Produit simple

Crée une classe `Produit` avec `$nom`, `$prix`, `$quantite`, un constructeur, une méthode `getTotal()` (prix × quantité) et `afficher()`. Crée 3 produits et affiche le total général.

---

✅ **Checklist** : Je sais écrire des variables, conditions, boucles et fonctions en PHP. Je sais créer une classe avec un constructeur.

---
---

# 🔴 MARDI — Renforcement : Encapsulation (1h)

> **Objectif** : Maîtriser private, getters, setters et validation  
> **Niveau** : Intermédiaire ⭐⭐

---

## R-Challenge 1 — La classe Produit encapsulée

Crée une classe `Produit` avec les propriétés **private** : `$id`, `$nom`, `$prix`, `$stock`. Ajoute le constructeur, les getters pour chaque propriété, et les setters avec validation : `setPrix($prix)` doit vérifier que le prix est > 0 (sinon lancer une exception ou afficher une erreur), `setStock($stock)` doit vérifier ≥ 0. Ajoute `estDisponible()` qui retourne true si stock > 0, `appliquerRemise($pourcent)` qui réduit le prix, et `__toString()` qui retourne une description formatée. Teste avec 3 produits, essaie de mettre un prix négatif.

---

## R-Challenge 2 — Le compte bancaire

Crée une classe `CompteBancaire` avec propriétés private `$titulaire` et `$solde` (initialisé à 0). Méthodes : `deposer($montant)` (montant > 0), `retirer($montant)` (montant > 0 ET solde suffisant, sinon erreur), `getSolde()`, `getHistorique()` (stocker chaque opération dans un tableau private `$historique`), `afficher()`. Teste : crée un compte, dépose 1000€, retire 300€, essaie de retirer 2000€ (doit échouer), affiche l'historique.

---

## R-Challenge 3 — Collection de produits 🔥

Crée une classe `Catalogue` avec une propriété private `$produits` (tableau). Méthodes : `ajouterProduit(Produit $p)` (type hinting !), `supprimerProduit($id)`, `rechercherParNom($nom)`, `filtrerParPrix($min, $max)`, `calculerValeurStock()` (somme prix × stock), `trierParPrix($ordre)`, `afficherCatalogue()`. Teste avec 5 produits.

---

---

# 🔴 MERCREDI — Renforcement : Abstraction et héritage (1h)

> **Objectif** : Créer des hiérarchies de classes avec extends et abstract  
> **Niveau** : Intermédiaire ⭐⭐

---

## R-Challenge 4 — Hiérarchie de véhicules

Crée une classe abstraite `Vehicule` avec les propriétés `$marque`, `$modele`, `$annee`, `$prix`. Ajoute un constructeur, des getters, une méthode concrète `getAge()` (année courante - année), et une méthode **abstraite** `calculerTaxe()`. Crée 3 classes filles : `Voiture` (propriété `$nbPortes`, taxe = prix × 10%), `Moto` (propriété `$cylindree`, taxe = prix × 5%), `Camion` (propriété `$tonnage`, taxe = prix × 15%). Chaque classe surcharge `calculerTaxe()`. Crée 2 instances de chaque, mets-les dans un tableau et affiche la taxe de chacune (polymorphisme !).

---

## R-Challenge 5 — Le garage

Crée une classe `Garage` qui gère des `Vehicule`. Méthodes : `ajouterVehicule(Vehicule $v)`, `calculerTaxeTotale()` (somme des taxes de tous les véhicules), `filtrerParType(string $type)` ("Voiture", "Moto", "Camion" → utilise `instanceof`), `vehiculePlusCher()`, `statistiques()` (nombre par type, prix moyen, taxe moyenne). Teste avec 6 véhicules (2 de chaque type).

---

## R-Challenge 6 — Formes géométriques 🔥

Crée une classe abstraite `Forme` avec propriété `$couleur` et méthodes abstraites `aire()` et `perimetre()`. Classes filles : `Rectangle` ($largeur, $hauteur), `Cercle` ($rayon), `Triangle` ($base, $hauteur, $cote1, $cote2, $cote3). Chaque fille implémente `aire()` et `perimetre()`. Ajoute une méthode concrète dans Forme : `decrire()` qui affiche "Forme [couleur] — Aire: X, Périmètre: Y". Crée 5 formes et affiche la description de chacune.

---

---

# 🔴 JEUDI — Renforcement : SQL Jointures avancées (1h)

> **Objectif** : Maîtriser LEFT JOIN, sous-requêtes et jointures 3+ tables  
> **Niveau** : Intermédiaire ⭐⭐

---

## R-Challenge 7 — Jointures sur la BDD école

Tables : `etudiants`(id, nom, prenom), `professeurs`(id, nom, specialite), `cours`(id, nom, professeur_id), `inscriptions`(etudiant_id, cours_id, note)

1. Lister les étudiants inscrits à chaque cours avec le nom du professeur (JOIN 3 tables)
2. Professeur avec le plus d'étudiants inscrits (JOIN 4 tables + COUNT + ORDER BY + LIMIT)
3. Cours sans aucun inscrit (LEFT JOIN + IS NULL)
4. Nombre d'inscrits par cours trié décroissant
5. Étudiants inscrits à plus de 3 cours (HAVING)
6. Moyenne des notes par cours
7. Étudiants qui n'ont aucune note inférieure à 10 (NOT EXISTS ou sous-requête)

---

## R-Challenge 8 — Sous-requêtes

1. Étudiants dont la moyenne est supérieure à la moyenne générale → WHERE ... > (SELECT AVG...)
2. Cours où la moyenne est la plus haute → sous-requête dans ORDER BY
3. Professeurs qui enseignent des cours avec plus de 5 inscrits → WHERE id IN (SELECT...)
4. Étudiants inscrits aux mêmes cours que "Alice" → sous-requête corrélée

---

---

# 🏆 VENDREDI — Mini-Projet : Système de gestion d'une école (2-3h)

---

## Brief

Un lycée te demande de développer le cœur métier de son système en PHP POO connecté à MySQL.

## Partie 1 — PHP POO (10 pts)

- Classe abstraite `Personne` : nom, prenom, email, dateNaissance + méthode abstraite `getRole()` + méthode concrète `getAge()`
- Classe `Etudiant extends Personne` : matricule, niveau + `getRole()` retourne "Étudiant" + `sInscrire(Cours $cours)`
- Classe `Professeur extends Personne` : specialite, salaire + `getRole()` retourne "Professeur" + `enseignerCours(Cours $cours)`
- Classe `Cours` : nom, code, professeur, maxEtudiants + `ajouterEtudiant($e)` + `estComplet()`
- Classe `Inscription` : etudiant, cours, dateInscription, note

## Partie 2 — BDD + SQL (10 pts)

- Tables correspondant aux classes avec PK, FK, contraintes
- Données de test (10 étudiants, 3 professeurs, 5 cours, 15 inscriptions)
- 10 requêtes avec jointures (étudiants par cours, notes par étudiant, professeur le plus populaire, moyenne par cours, étudiants sans inscription...)
- Bonus : connexion PDO entre PHP et MySQL

## Challenges weekend (si non validé)

**Challenge 1** : 2 classes avec héritage (Forme abstraite → Rectangle, Cercle) avec aire() et perimetre()

**Challenge 2** : 8 requêtes SQL avec jointures sur la BDD fournie
