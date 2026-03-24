# 📅 SEMAINE 2 — UML & SQL : Modélisation et Requêtes

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

> **Objectif** : Comprendre le vocabulaire UML et écrire des requêtes SQL simples  
> **Niveau** : Débutant ⭐

---

## S-Challenge 1 — Identifier les acteurs

Contexte : une application de bibliothèque. Sur une feuille, liste tous les gens qui utilisent l'application (les acteurs). Pense au lecteur, au bibliothécaire, à l'administrateur. Pour chacun, écris 3 choses qu'il peut faire.

---

## S-Challenge 2 — Dessiner un cas d'utilisation simple

Sur Draw.io, dessine un diagramme de cas d'utilisation pour une application de To-Do List. Acteurs : Utilisateur et Admin. Cas d'utilisation : ajouter une tâche, supprimer une tâche, marquer comme faite, voir toutes les tâches, gérer les utilisateurs (admin). Relie chaque acteur à ses cas.

---

## S-Challenge 3 — Ma première classe UML

Dessine une classe UML "Livre" avec les attributs : id (int), titre (string), auteur (string), annee (int), disponible (boolean). Ajoute la visibilité (-) devant chaque attribut. Ajoute 2 méthodes (+) : emprunter() et retourner().

---

## S-Challenge 4 — SQL : mes premiers SELECT

Sur une table `produits` (id, nom, prix, categorie, stock), écris les requêtes pour : afficher tous les produits, afficher seulement les noms et prix, afficher ceux dont le prix > 20€, afficher ceux de la catégorie "Électronique", trier par prix croissant, afficher les 3 moins chers (LIMIT).

---

## S-Challenge 5 — SQL : filtrer avec WHERE

Écris les requêtes : produits entre 10€ et 50€ (BETWEEN), produits dont le nom contient "phone" (LIKE), produits en rupture (stock = 0), produits "Vêtement" OU "Chaussure" (IN), produits > 100€ ET stock > 5.

---

## S-Challenge 6 — SQL : INSERT, UPDATE, DELETE

Crée la table `etudiants` (id, nom, prenom, email, age, ville). Insère 5 étudiants. Modifie la ville de l'étudiant id=3. Supprime l'étudiant id=5. Affiche le nombre d'étudiants restants (COUNT).

---

✅ **Checklist** : Je sais dessiner un cas d'utilisation, je sais écrire SELECT/WHERE/INSERT/UPDATE/DELETE.

---
---

# 🔴 MARDI — Renforcement : Diagramme de cas d'utilisation (1h)

> **Objectif** : Modéliser un système complet avec acteurs, cas d'utilisation et relations  
> **Niveau** : Intermédiaire ⭐⭐

---

## R-Challenge 1 — Le DAB (distributeur automatique)

Modélise un distributeur automatique de billets sur Draw.io :
1. Identifie 3 acteurs : Client, Système bancaire, Technicien
2. Liste 8+ cas d'utilisation : retirer de l'argent, consulter le solde, imprimer un reçu, déposer un chèque, s'authentifier, alimenter en billets, diagnostiquer une panne...
3. Ajoute 3 relations `<<include>>` (ex: retirer `<<include>>` s'authentifier)
4. Ajoute 1 relation `<<extend>>` (ex: retirer `<<extend>>` imprimer reçu)
5. Exporte en PNG

---

## R-Challenge 2 — Le site e-commerce complet

Modélise un site e-commerce type Amazon :
1. Acteurs : Visiteur, Client inscrit, Admin, Système de paiement, Livreur
2. Minimum 12 cas d'utilisation couvrant : navigation catalogue, recherche, panier, commande, paiement, suivi livraison, gestion produits (admin), gestion commandes (admin), inscription, connexion, laisser un avis, contacter le support
3. Relations include : commander `<<include>>` s'authentifier, commander `<<include>>` payer
4. Relations extend : commander `<<extend>>` appliquer code promo, commander `<<extend>>` choisir livraison express
5. Rédige le scénario nominal de "Passer une commande" (6-8 étapes)

---

## R-Challenge 3 — Rédiger des scénarios

Pour le cas d'utilisation "S'inscrire" du e-commerce, rédige :
1. Le scénario nominal (tout se passe bien) : étape par étape
2. Le scénario alternatif 1 : l'email est déjà utilisé
3. Le scénario alternatif 2 : le mot de passe est trop faible
4. Pour chaque scénario, écris les étapes numérotées avec l'acteur qui agit et le système qui répond

---

---

# 🔴 MERCREDI — Renforcement : Diagramme de classes (1h)

> **Objectif** : Créer un diagramme de classes complet et le traduire en schéma BDD  
> **Niveau** : Intermédiaire ⭐⭐

---

## R-Challenge 4 — Classes d'un e-commerce

Sur Draw.io, crée les classes suivantes avec attributs (types + visibilité) et méthodes :
- **Client** : id, nom, prenom, email, mot_de_passe, adresse, date_inscription | + s'inscrire(), + se_connecter()
- **Produit** : id, nom, description, prix, stock, categorie_id | + estDisponible(), + appliquerRemise()
- **Categorie** : id, nom, description | + getProduits()
- **Commande** : id, client_id, date_commande, statut, total | + calculerTotal(), + annuler()
- **LigneCommande** : id, commande_id, produit_id, quantite, prix_unitaire | + getSousTotal()

Relie les classes : Client 1 — 0..* Commande, Commande 1 — 1..* LigneCommande, LigneCommande *..1 Produit, Produit *..1 Categorie.

---

## R-Challenge 5 — Du diagramme au schéma BDD

Transforme le diagramme du challenge 4 en tables SQL :
1. Chaque classe → une table, chaque attribut → une colonne
2. Choisis les types SQL : VARCHAR, INT, DECIMAL, TEXT, DATETIME, ENUM
3. Identifie les PK (id AUTO_INCREMENT) et les FK (client_id, produit_id...)
4. Gère la relation *..* si nécessaire (table de jointure)
5. Écris les 5 requêtes CREATE TABLE dans le bon ordre (tables sans FK d'abord)
6. Ajoute ON DELETE CASCADE ou SET NULL sur chaque FK

---

## R-Challenge 6 — Diagramme avancé : héritage et composition 🔥

Enrichis le diagramme de l'e-commerce :
1. Ajoute une classe abstraite **Utilisateur** (id, nom, email, mot_de_passe)
2. **Client** hérite de Utilisateur (flèche triangle) + ajoute adresse_livraison
3. **Admin** hérite de Utilisateur + ajoute niveau_acces
4. Ajoute une composition : Commande ◆— LigneCommande (LigneCommande n'existe pas sans Commande)
5. Ajoute une classe **Avis** : note, commentaire, date. Relié à Client et Produit.

---

---

# 🔴 JEUDI — Renforcement : SQL Requêtes et Jointures 3 tables (1h)

> **Objectif** : Maîtriser les jointures sur 2 et 3 tables avec agrégations  
> **Niveau** : Intermédiaire ⭐⭐

---

## R-Challenge 7 — Requêtes de base sur la BDD e-commerce

Tables : `produits`(id, nom, prix, categorie_id, stock), `categories`(id, nom), `commandes`(id, produit_id, client, quantite, date_commande)

1. Tous les produits triés par prix décroissant
2. Produits entre 20€ et 100€
3. Produits dont le nom contient "Samsung"
4. Nombre total de produits → COUNT(*)
5. Prix moyen par catégorie → AVG + GROUP BY
6. Catégories avec un prix moyen > 50€ → HAVING
7. Top 5 produits les plus chers
8. Total des quantités commandées par produit → SUM + GROUP BY

---

## R-Challenge 8 — Jointures sur 2 puis 3 tables

1. Chaque produit avec le nom de sa catégorie → INNER JOIN 2 tables
2. Toutes les catégories même sans produit → LEFT JOIN
3. Nombre de produits par catégorie → JOIN + GROUP BY + COUNT
4. Chaque commande avec le nom du produit ET le nom de la catégorie → JOIN 3 tables
5. Chiffre d'affaires par catégorie → JOIN 3 tables + SUM(prix * quantite)
6. Produits jamais commandés → LEFT JOIN + IS NULL
7. Client ayant le plus dépensé → JOIN + SUM + ORDER BY + LIMIT 1

---

## R-Challenge 9 — Sous-requêtes et requêtes complexes 🔥

1. Produits dont le prix est supérieur au prix moyen → WHERE prix > (SELECT AVG(prix)...)
2. Catégories qui ont au moins 3 produits → HAVING COUNT(*) >= 3
3. Le produit le plus commandé (en quantité totale) → JOIN + GROUP BY + ORDER BY + LIMIT
4. Clients qui ont commandé des produits de plus de 100€ → sous-requête avec IN
5. Commandes du mois en cours → WHERE MONTH(date_commande) = MONTH(CURDATE())

---

---

# 🏆 VENDREDI — Mini-Projet : La Bibliothèque Numérique (2-3h)

---

## Brief

Une bibliothèque municipale te demande de concevoir et créer la base de données de son système.

## Partie 1 — UML (6 pts)

**Diagramme de cas d'utilisation** : 3 acteurs (Lecteur, Bibliothécaire, Administrateur), 12+ cas d'utilisation, 3 relations include, 1 relation extend.

**Diagramme de classes** : 6 classes minimum (Livre, Auteur, Membre, Emprunt, Categorie, Exemplaire) avec attributs typés, visibilité, méthodes et relations avec cardinalités.

## Partie 2 — BDD (6 pts)

Script CREATE TABLE pour toutes les tables avec PK, FK, contraintes (NOT NULL, UNIQUE, CHECK). Script INSERT avec données de test réalistes (15+ lignes par table). Index sur les colonnes fréquemment recherchées.

## Partie 3 — Requêtes SQL (8 pts)

15 requêtes minimum :
- 5 requêtes simples (SELECT, WHERE, ORDER BY, LIMIT, LIKE)
- 5 requêtes avec jointures 2 tables
- 3 requêtes avec jointures 3 tables (ex: livres empruntés par un membre avec le nom de l'auteur)
- 2 requêtes avec GROUP BY + HAVING (ex: auteur le plus emprunté, membres avec plus de 3 emprunts en retard)

## Challenges weekend (si non validé)

**Challenge 1** : Refaire le diagramme de classes simplifié (3 classes : Livre, Membre, Emprunt) + script SQL

**Challenge 2** : 10 requêtes SQL sur une BDD fournie (5 SELECT simples + 3 jointures 2 tables + 2 jointures 3 tables)
