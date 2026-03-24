# 📅 SEMAINE 3 — PHP POO (Bases) & SQL Jointures avancées

> 📌 **Note** : PHP possède des fonctions prédéfinies pour le hashing de mots de passe, la manipulation de dates, le formatage de nombres, etc. Consulte php.net pour découvrir les fonctions disponibles avant de réinventer la roue.

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

---

## S-Challenge 1 — Le convertisseur de températures

Crée un script PHP qui déclare une température en Celsius. Convertis-la en Fahrenheit (C × 9/5 + 32) et en Kelvin (C + 273.15). Affiche les 3 valeurs formatées. Ensuite, crée un tableau de 5 températures et affiche le tableau converti.

---

## S-Challenge 2 — Le bulletin scolaire PHP

Crée un tableau associatif PHP contenant 5 matières et leurs notes. Parcours le tableau et affiche chaque matière avec sa note. Calcule la moyenne générale. Affiche la mention : ≥ 16 "Très bien", ≥ 14 "Bien", ≥ 12 "Assez bien", ≥ 10 "Passable", < 10 "Insuffisant".

---

## S-Challenge 3 — Ma première classe : la lampe

Crée une classe `Lampe` avec les propriétés : marque, puissance (en watts), allumée (vrai/faux). Ajoute un constructeur qui initialise la marque et la puissance (la lampe est éteinte par défaut). Ajoute les méthodes `allumer()`, `eteindre()` et `etat()` qui affiche "La lampe [marque] est allumée/éteinte". Crée 2 lampes et joue avec l'interrupteur.

---

## S-Challenge 4 — La classe CompteurKilometrique

Crée une classe `Voiture` avec les propriétés : marque, modele, kilometrage (commence à 0), capacite_reservoir (en litres), carburant_actuel. Constructeur qui initialise marque, modele et capacite_reservoir (réservoir plein). Méthodes : `rouler($km)` qui ajoute au kilométrage et consomme du carburant (7L/100km en moyenne — si pas assez de carburant, affiche l'erreur et indique combien de km sont possibles), `faireLePlein()`, `afficherTableauDeBord()` qui montre toutes les infos. Crée une voiture et simule un voyage : fais le plein, roule 300km, affiche, roule 500km (est-ce possible ?), fais le plein, roule 200km.

---

✅ **Checklist** : Je sais écrire du PHP (variables, tableaux, boucles), je sais créer une classe avec de la logique métier dans les méthodes.

---
---

# 🔴 MARDI — Renforcement : Encapsulation (1h)

---

## R-Challenge 1 — Le distributeur automatique

Crée une classe `Distributeur` qui simule un distributeur de boissons. Propriétés privées : un tableau de produits (chaque produit a un nom, un prix et un stock), et la caisse (montant total encaissé). Méthodes publiques : `afficherProduits()` qui liste les produits disponibles avec leurs prix, `acheter($nomProduit, $montantInsere)` qui vérifie que le produit existe, qu'il est en stock et que le montant inséré est suffisant — si tout est OK : décrémente le stock, ajoute le prix à la caisse, retourne la monnaie (montant inséré - prix) ; si pas assez d'argent : retourne le montant entier ; si rupture : affiche un message, `remplir($nomProduit, $quantite)` pour réapprovisionner, `getRecette()` qui retourne le total encaissé. Crée un distributeur avec 5 produits et simule 8 achats (dont des cas d'erreur).

---

## R-Challenge 2 — Le système de réservation de billets

Crée une classe `Cinema` avec une propriété privée `$salles` (tableau de salles, chaque salle a un nom, un nombre de places total et un tableau de réservations). Méthodes : `ajouterSalle($nom, $nbPlaces)`, `reserver($nomSalle, $nomClient, $nbPlaces)` qui vérifie les places disponibles (places totales - somme des places réservées), `annulerReservation($nomSalle, $nomClient)` qui libère les places, `afficherOccupation()` qui montre pour chaque salle le nombre de places prises/total et le pourcentage d'occupation, `getRevenusEstimes($prixBillet)` qui calcule le revenu potentiel si toutes les places réservées sont payées. Teste avec 3 salles et 10 réservations.

---

## R-Challenge 3 — La bibliothèque avec amendes 🔥

Crée une classe `Bibliotheque` qui gère des emprunts avec un système d'amendes. Propriétés privées : tableau de livres (titre, auteur, disponible), tableau d'emprunts (livre, emprunteur, date_emprunt, date_retour_prevue, date_retour_effectif, amende). Méthodes : `emprunter($titre, $emprunteur)` qui vérifie la disponibilité et enregistre l'emprunt avec une date de retour prévue à 14 jours, `retourner($titre)` qui calcule le retard éventuel (jours après la date prévue) et applique une amende de 0.50€ par jour de retard, `getAmendes($emprunteur)` qui retourne le total des amendes pour un emprunteur, `getStatistiques()` qui affiche le nombre de livres disponibles, empruntés, le montant total des amendes collectées et l'emprunteur le plus en retard.

---

---

# 🔴 MERCREDI — Renforcement : Abstraction et héritage (1h)

---

## R-Challenge 4 — Le système de transport

Crée une classe abstraite `Transport` avec les propriétés : nom, vitesse_max (km/h), capacite_passagers et consommation (litres/100km ou kWh/100km). Méthode concrète `tempsTrajet($distanceKm)` qui retourne le temps en heures. Méthode abstraite `calculerCoutTrajet($distanceKm)`. Classes filles : `Voiture` (carburant à 1.8€/L, consommation 7L/100km), `Train` (électricité à 0.15€/kWh, consommation 30kWh/100km, mais diviser par le nombre de passagers), `Avion` (kérosène à 2.5€/L, consommation 250L/100km, mais diviser par le nombre de passagers). Chaque classe implémente le calcul de coût selon sa logique propre. Crée un comparateur : pour un trajet Paris-Marseille (775km) avec 4 passagers, affiche le temps et le coût par personne pour chaque transport. Quel est le plus rapide ? Le moins cher ?

---

## R-Challenge 5 — La hiérarchie d'employés

Crée une classe abstraite `Employe` avec : nom, prenom, date_embauche, salaire_base. Méthode concrète `anciennete()` (nombre d'années depuis l'embauche). Méthode abstraite `calculerSalaire()`. Classes filles : `Developpeur` (bonus de 500€ par année d'ancienneté, + prime si ancienneté > 5 ans : 10% du salaire base), `Commercial` (commission = pourcentage sur son chiffre d'affaires du mois, propriété $ca_mensuel), `Manager` (prime de 200€ par personne dans son équipe, propriété $taille_equipe + bonus si équipe > 10 : +15%). Crée 2 de chaque type. Calcule et affiche la masse salariale totale. Trouve l'employé le mieux payé. Affiche le salaire moyen par type de poste.

---

## R-Challenge 6 — Le système de facturation 🔥

Crée une classe abstraite `Article` avec : reference, designation, prix_ht. Méthode abstraite `calculerPrixTTC()`. Classes filles : `Produit` (TVA 20%), `Service` (TVA 10%), `ProduitAlimentaire` (TVA 5.5%). Crée une classe `Facture` qui contient un numéro, une date, un client, et un tableau de lignes (chaque ligne a un article et une quantité). Méthodes : `ajouterLigne($article, $quantite)`, `calculerTotalHT()`, `calculerTotalTVA()` (attention : la TVA est différente selon le type d'article !), `calculerTotalTTC()`, `afficherFacture()` qui produit un rendu formaté avec chaque ligne, les totaux par taux de TVA et le total final.

---

---

# 🔴 JEUDI — Renforcement : SQL Jointures avancées (1h)

---

## R-Challenge 7 — Le réseau de transports

Tables : `gares`(id, nom, ville, region), `lignes`(id, nom, type: TGV/TER/Intercités), `arrets`(id, ligne_id, gare_id, ordre, heure_passage), `voyageurs`(id, nom), `billets`(id, voyageur_id, ligne_id, gare_depart_id, gare_arrivee_id, date_voyage, prix)

1. Toutes les gares desservies par la ligne "TGV Paris-Lyon" avec l'heure de passage (3 tables)
2. Le nombre de lignes par gare (quelle gare est la plus connectée ?)
3. Le chiffre d'affaires par ligne
4. Les gares qui ne sont desservies par aucune ligne TGV
5. Le voyageur qui a dépensé le plus en billets ce mois
6. Le trajet le plus emprunté (couple gare départ / gare arrivée le plus fréquent)
7. Le revenu moyen par voyageur par région

---

## R-Challenge 8 — Les requêtes impossibles (sans aide !)

Sur n'importe quelle base de données que tu as créée cette semaine :
1. Écris une requête qui utilise une sous-requête dans le WHERE
2. Écris une requête qui utilise une sous-requête dans le SELECT (sous-requête scalaire)
3. Écris une requête qui utilise une jointure sur 4 tables
4. Écris une requête qui trouve les enregistrements qui N'ONT PAS de correspondance dans une autre table
5. Écris une requête qui calcule un classement (le N-ième meilleur de quelque chose)

---

---

# 🏆 VENDREDI — Mini-Projet : Agence de location de voitures (2-3h)

---

## Brief

Une agence de location te demande de développer le cœur métier en PHP POO + SQL.

**PHP POO (10 pts)** :
- Classe abstraite `Vehicule` : immatriculation, marque, modele, kilometrage, prix_journalier, disponible. Méthode abstraite `calculerPrixLocation($nbJours)`.
- `VoitureCitadine extends Vehicule` : réduction de 10% si location ≥ 7 jours
- `SUV extends Vehicule` : supplément de 15€/jour pour l'assurance tous risques
- `Utilitaire extends Vehicule` : supplément basé sur le tonnage (5€/jour par tonne)
- Classe `Location` : véhicule, client (nom, permis, téléphone), date_debut, date_fin, montant, statut (en cours, terminée, annulée). Méthode `calculerMontant()` qui utilise le polymorphisme.
- Classe `Agence` : gère le parc de véhicules et les locations. Fonctions : louer (vérifier disponibilité, calculer le prix, créer la location), retourner (marquer comme terminée, remettre le véhicule disponible, calculer les jours de retard à 50€/jour), statistiques (taux d'occupation, CA par type de véhicule, véhicule le plus loué).

**BDD + SQL (10 pts)** : Tables correspondant aux classes. Données de test. 10 requêtes avec jointures dont : locations en cours avec nom du client et détails du véhicule, CA par mois, client avec le plus de locations, véhicules jamais loués.

## Challenges weekend (si non validé)

**Challenge 1** : 2 classes avec héritage et logique métier (Compte → CompteCourant avec découvert et CompteEpargne avec intérêts)

**Challenge 2** : 8 requêtes SQL avec jointures
