# 📅 SEMAINE 6 — Full-Stack : PHP + JS + UML (5 jours × 2h)

> ⚠️ **Semaine intensive** : 5 jours, 2h/jour. Le sauvetage est intégré au renforcement.

---

# 🟢 LUNDI — Conception UML + Architecture MVC (2h)

> **Objectif** : Concevoir l'application avant de coder  
> **Projet de la semaine** : Application de gestion de recettes de cuisine

---

## Challenge 1 — Analyse du besoin

Lis le brief : l'application de recettes permet aux visiteurs de voir les recettes, aux membres de les ajouter et de les commenter, et aux admins de modérer. Liste sur une feuille : les 3 acteurs, au moins 10 fonctionnalités, les données à stocker.

---

## Challenge 2 — Diagramme de cas d'utilisation

Sur Draw.io, dessine le diagramme avec les acteurs Visiteur, Membre, Admin. Cas d'utilisation minimum : voir les recettes, rechercher, s'inscrire, se connecter, ajouter une recette, modifier sa recette, supprimer sa recette, commenter, noter, gérer les utilisateurs (admin), modérer les commentaires (admin), voir les statistiques (admin). Ajoute 3 include et 1 extend.

---

## Challenge 3 — Diagramme de classes

Dessine les classes : Utilisateur, Recette, Ingredient, Categorie, Commentaire. Pour chaque classe : attributs typés, visibilité, méthodes principales. Relations avec cardinalités : un Utilisateur crée 0..* Recettes, une Recette a 1..* Ingredients, une Recette appartient à une Categorie, un Utilisateur écrit 0..* Commentaires sur des Recettes.

---

## Challenge 4 — Création de la BDD

Transforme ton diagramme en tables SQL. Écris les CREATE TABLE dans le bon ordre. Ajoute les FK, contraintes et index. Insère des données de test (5 utilisateurs, 3 catégories, 8 recettes, 15 ingrédients, 5 commentaires).

---

## Challenge 5 — Init projet PHP MVC + Git

Crée la structure : config/, models/, controllers/, routes/, views/, public/. Crée Database.php (Singleton PDO). Initialise Git avec Git Flow. Premier commit. Push sur GitHub.

---

---

# 🔴 MARDI — Back-end PHP : Models + Controllers (2h)

---

## Challenge 6 — Model Recette

Crée `RecetteModel` qui étend un `BaseModel`. Méthodes : `findAll()` avec pagination, `findById($id)` avec jointures (catégorie + utilisateur auteur), `create($data)` avec validation, `update($id, $data)` en vérifiant que l'utilisateur est bien l'auteur, `delete($id)` en vérifiant le propriétaire, `search($terme)` recherche dans titre et description, `findByCategorie($categorieId)`.

---

## Challenge 7 — Model Utilisateur + Auth

Crée `UtilisateurModel` : `register($data)` avec hash du mot de passe et validation (email unique, mot de passe fort), `login($email, $mdp)` avec password_verify et démarrage de session, `logout()` avec destruction de session, `findById($id)` sans retourner le mot de passe, `update($id, $data)`.

---

## Challenge 8 — Controllers

Crée `RecetteController` : `index()` liste paginée, `show($id)` détail, `store()` création (vérifier auth), `update($id)` modification (vérifier propriétaire), `destroy($id)` suppression (vérifier propriétaire). Crée `AuthController` : `register()`, `login()`, `logout()`, `me()`. Chaque méthode retourne du JSON avec le format standard `{success, data, message}`.

---

## Challenge 9 — Routing et middleware

Crée un fichier `public/index.php` qui : récupère la méthode HTTP et l'URL, route vers le bon Controller, applique un middleware d'authentification sur les routes protégées, retourne du JSON avec le bon code HTTP. Teste : GET /api/recettes retourne la liste, POST /api/recettes sans token retourne 401.

---

---

# 🔴 MERCREDI — Front-end JS : DOM + Fetch + Logique métier (2h)

---

## Challenge 10 — Affichage dynamique des recettes

En JavaScript, utilise Fetch pour récupérer les recettes depuis ton API PHP (GET /api/recettes). Pour chaque recette, crée une card HTML avec createElement : titre, catégorie, temps de préparation, image placeholder. Ajoute les cards au DOM. Ajoute un loader pendant le chargement.

---

## Challenge 11 — Recherche et filtrage dynamique

Ajoute une barre de recherche en haut de la page. À chaque frappe (avec debounce 300ms), filtre les recettes affichées côté client OU appelle l'API de recherche. Ajoute des boutons de filtre par catégorie. Le filtrage doit se faire sans rechargement de page.

---

## Challenge 12 — Logique métier : favoris et calculs

Implémente un système de favoris : un bouton coeur sur chaque card, clic → ajouter/retirer des favoris dans LocalStorage. Section "Mes favoris" qui affiche les recettes sauvegardées. Calcul automatique des quantités d'ingrédients : un sélecteur "nombre de personnes" (1 à 10), les quantités s'adaptent proportionnellement (quantité_base × nb_personnes / nb_base).

---

## Challenge 13 — Formulaire de création

Crée un formulaire pour ajouter une recette : titre, description, catégorie (select), temps de préparation, ingrédients (ajout dynamique de lignes). À la soumission, envoie les données avec Fetch POST vers l'API. Si succès : ajoute la recette à la liste sans recharger. Si erreur : affiche les messages d'erreur du serveur.

---

---

# 🔴 JEUDI — Intégration, Tests et Sécurité (2h)

---

## Challenge 14 — Intégration front ↔ back

Vérifie que tous les flux fonctionnent de bout en bout : inscription → connexion → créer recette → voir dans la liste → rechercher → ajouter aux favoris → modifier → supprimer. Corrige tous les bugs d'intégration.

---

## Challenge 15 — Sécurité

Vérifie : toutes les requêtes SQL sont des requêtes préparées (aucune concaténation), htmlspecialchars() sur tous les affichages dynamiques côté PHP, les routes protégées vérifient bien l'authentification, un utilisateur ne peut pas modifier la recette d'un autre, les mots de passe sont hashés en BCRYPT.

---

## Challenge 16 — Responsive + README

Vérifie que la page est lisible sur mobile (Bootstrap grid, media queries si besoin). Rédige le README.md : titre, description, technologies, installation, liste des endpoints API, captures d'écran si possible.

---

---

# 🏆 VENDREDI — Soutenance Full-Stack (2h)

---

## Format de la soutenance (10-15 min par apprenant)

**Présentation (3-5 min)** : Montre tes diagrammes UML, explique l'architecture MVC, décris les choix techniques.

**Démonstration live (5-7 min)** : Fais le parcours complet en direct : inscription, connexion, créer une recette, la rechercher, l'ajouter en favori, modifier, supprimer. Montre la BDD dans MySQL Workbench.

**Questions (3-5 min)** : Le formateur pose des questions sur le code, les choix d'architecture et la sécurité.

## Critères d'évaluation : /20

Conception UML : /3, Back-end PHP MVC : /5, Front-end JS : /5, Sécurité : /3, Soutenance : /4

## Si non validé

Corriger les bugs identifiés + re-soutenance de 5 min le lundi S7 matin.
