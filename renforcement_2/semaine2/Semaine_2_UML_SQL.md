# 📅 SEMAINE 2 — UML & SQL : Modélisation et Requêtes

> 📌 **Note** : SQL possède de nombreuses fonctions et clauses pour manipuler les données. Cherche dans la documentation MySQL les mots-clés disponibles pour filtrer, trier, grouper, joindre et agréger les données.

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

---

## S-Challenge 1 — L'application de livraison de repas

Contexte : une application type Uber Eats. Sur une feuille, identifie tous les acteurs (qui utilise cette application ?). Pour chaque acteur, liste 3-4 actions qu'il peut faire. Dessine un diagramme de cas d'utilisation simple sur Draw.io avec au moins 2 acteurs et 8 cas d'utilisation.

---

## S-Challenge 2 — Mes premières classes UML

Dessine 3 classes UML pour un système de commande de pizza : Classe Pizza (avec les informations qui décrivent une pizza), Classe Client (ses informations personnelles) et Classe Commande (qui lie un client à des pizzas avec un total). Pour chaque classe, choisis les attributs pertinents avec leurs types. Ajoute la visibilité. Relie les classes avec des lignes et indique les cardinalités.

---

## S-Challenge 3 — SQL : Le registre des employés

Tu as une table `employes` avec les colonnes : id, nom, prenom, poste, salaire, departement, date_embauche. Écris les requêtes pour : afficher tous les employés, afficher uniquement ceux du département "Marketing", afficher ceux qui gagnent plus de 3000€, trier par salaire du plus haut au plus bas, afficher les 5 employés les mieux payés, compter le nombre total d'employés.

---

## S-Challenge 4 — SQL : Le magasin en ligne

Tu as une table `articles` (id, nom, prix, categorie, stock, note_moyenne). Écris les requêtes pour : les articles dont le prix est entre 20€ et 80€, les articles dont le nom contient le mot "Pro", les articles en rupture de stock (stock = 0), les articles de catégorie "Informatique" OU "Téléphonie" (en une seule requête), les articles à plus de 50€ ET avec une note ≥ 4. Crée cette table et insère 8 articles pour tester tes requêtes.

---

## S-Challenge 5 — SQL : Modifier les données

Avec la table `employes` du challenge 3 : augmente le salaire de 10% pour tous les employés du département "Développement". Change le département de l'employé avec l'id 5 vers "Direction". Supprime les employés embauchés avant 2015. Affiche le salaire moyen, le salaire le plus haut et le nombre d'employés restants.

---

✅ **Checklist** : Je sais dessiner un diagramme UML simple, je sais écrire des requêtes de sélection, d'insertion, de modification et de suppression en SQL.

---
---

# 🔴 MARDI — Renforcement : Diagramme de cas d'utilisation (1h)

---

## R-Challenge 1 — La plateforme de covoiturage

Modélise une plateforme de covoiturage (type BlaBlaCar) sur Draw.io. Identifie au moins 4 acteurs (pense au conducteur, au passager, à l'admin, et au système de paiement). Liste 15 cas d'utilisation minimum couvrant : l'inscription/connexion, la publication d'un trajet, la recherche et réservation, le paiement, la notation, et l'administration. Ajoute au moins 4 relations d'inclusion (actions qui nécessitent obligatoirement une autre action) et 2 relations d'extension (actions optionnelles). Rédige le scénario nominal et 2 scénarios alternatifs pour le cas "Réserver un trajet".

---

## R-Challenge 2 — La clinique vétérinaire

Modélise le système d'information d'une clinique vétérinaire. Acteurs : le propriétaire d'animal, le vétérinaire, le secrétaire, le système de facturation. Cas d'utilisation : prendre rendez-vous, consulter le dossier médical, prescrire un traitement, facturer, gérer le stock de médicaments, envoyer des rappels de vaccination. Le secrétaire et le vétérinaire partagent certaines actions mais pas toutes. Fais la distinction clairement sur ton diagramme.

---

---

# 🔴 MERCREDI — Renforcement : Diagramme de classes (1h)

---

## R-Challenge 3 — La plateforme de cours en ligne

Modélise une plateforme type Udemy. Classes à créer : Utilisateur (avec distinction Formateur/Apprenant), Cours, Module, Leçon, Inscription, Avis, Categorie. Chaque classe doit avoir ses attributs avec types et visibilité, et au moins 2 méthodes. Les relations doivent refléter la réalité : un cours a plusieurs modules, un module a plusieurs leçons, un apprenant s'inscrit à des cours (relation many-to-many via Inscription), un formateur crée des cours. Ajoute les cardinalités précises. Gère l'héritage : Formateur et Apprenant héritent d'Utilisateur.

---

## R-Challenge 4 — Du diagramme à la BDD

Transforme le diagramme de la plateforme de cours en base de données. Pour chaque classe, crée la table SQL correspondante. Identifie toutes les clés primaires et étrangères. Gère la relation many-to-many entre Apprenant et Cours (quelle table intermédiaire créer ?). Gère l'héritage Utilisateur → Formateur/Apprenant (choisis une stratégie : une seule table avec un champ "rôle" ou des tables séparées ?). Écris tous les CREATE TABLE dans le bon ordre. Ajoute des contraintes de vérification (un prix de cours ne peut pas être négatif, une note doit être entre 1 et 5).

---

## R-Challenge 5 — Le réseau social 🔥

Modélise un réseau social simplifié (type Twitter/X). Classes : Utilisateur, Publication, Commentaire, Like, Abonnement (un utilisateur suit un autre utilisateur — c'est une relation réflexive !), Message (messagerie privée entre 2 utilisateurs), Hashtag. Gère les relations complexes : un utilisateur publie des publications, commente des publications, like des publications, suit d'autres utilisateurs. La relation "Abonnement" est une relation many-to-many entre Utilisateur et Utilisateur. Dessine le diagramme puis explique comment tu traduirais la relation d'abonnement en base de données.

---

---

# 🔴 JEUDI — Renforcement : SQL Requêtes et Jointures 3 tables (1h)

---

## R-Challenge 6 — La librairie en ligne

Tables : `livres`(id, titre, prix, annee_publication, editeur_id, genre_id), `editeurs`(id, nom, pays), `genres`(id, nom), `ventes`(id, livre_id, client, quantite, date_vente)

Écris les requêtes pour :
1. Chaque livre avec le nom de son éditeur et le nom de son genre (3 tables)
2. Le nombre de livres par éditeur, trié du plus au moins prolifique
3. Le chiffre d'affaires par genre (jointure 3 tables avec calcul prix × quantité)
4. Les éditeurs qui n'ont aucun livre vendu (pense à comment trouver l'absence de correspondance)
5. Le livre le plus vendu de chaque genre
6. Les clients qui ont acheté des livres de plus de 3 genres différents
7. L'évolution mensuelle du chiffre d'affaires (regroupé par mois)
8. Les livres publiés après 2020 dont le prix est supérieur au prix moyen de leur genre

---

## R-Challenge 7 — L'hôpital

Tables : `medecins`(id, nom, specialite), `patients`(id, nom, date_naissance), `consultations`(id, medecin_id, patient_id, date_consultation, diagnostic, cout), `prescriptions`(id, consultation_id, medicament, posologie)

1. La liste des consultations avec le nom du médecin, le nom du patient et le diagnostic (3 tables)
2. Le nombre de consultations par médecin ce mois-ci
3. Le coût total des consultations par patient
4. Les patients qui n'ont jamais consulté
5. Le médecin avec le plus de patients différents
6. Les prescriptions d'un patient donné avec le nom du médecin prescripteur (4 tables)
7. La spécialité la plus consultée

---

---

# 🏆 VENDREDI — Mini-Projet : Le système de réservation d'hôtel (2-3h)

---

## Brief

Un hôtel te demande de concevoir et créer la base de données de son système de gestion.

**Partie 1 — UML (6 pts)** : Diagramme de cas d'utilisation (acteurs : Client, Réceptionniste, Admin, Système de paiement, 12+ cas d'utilisation). Diagramme de classes (8 classes : Hotel, Chambre, TypeChambre, Client, Reservation, Facture, Service, Avis) avec attributs, méthodes, relations et cardinalités.

**Partie 2 — BDD (6 pts)** : Script CREATE TABLE pour toutes les entités. Données de test réalistes (10 clients, 20 chambres de 4 types, 15 réservations, 5 factures). Index sur les colonnes pertinentes.

**Partie 3 — Requêtes (8 pts)** : 18 requêtes :
- Taux d'occupation par type de chambre sur un mois donné
- Chiffre d'affaires par mois (jointure réservations + chambres + types)
- Clients fidèles (plus de 3 réservations)
- Chambres disponibles entre 2 dates (la requête la plus complexe : une chambre est disponible si elle n'a aucune réservation qui chevauche les dates demandées)
- Revenu moyen par client
- Top 5 des clients par montant dépensé

## Challenges weekend (si non validé)

**Challenge 1** : Diagramme de classes simplifié (4 classes : Chambre, Client, Reservation, TypeChambre) + script SQL

**Challenge 2** : 10 requêtes sur une BDD fournie (5 simples + 3 jointures 2 tables + 2 jointures 3 tables)
