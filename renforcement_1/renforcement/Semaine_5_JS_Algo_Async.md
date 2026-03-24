# 📅 SEMAINE 5 — JavaScript : Logique, Algorithmes & Asynchrone

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

> **Objectif** : Réviser la logique JS et faire les premiers pas en asynchrone  
> **Niveau** : Débutant ⭐

---

## S-Challenge 1 — Quiz fonctions (5 fonctions rapides)

Écris : `estPair(n)` → true/false, `inverserChaine(texte)` → texte inversé avec une boucle, `compterVoyelles(texte)` → nombre de a/e/i/o/u, `capitaliser(texte)` → première lettre en majuscule, `factorielle(n)` → n!. Teste chacune avec 2 valeurs.

---

## S-Challenge 2 — Quiz tableaux (5 fonctions)

Écris : `somme(tab)` → total, `minimum(tab)` → plus petit, `sansDoublons(tab)` → nouveau tableau sans doublons (2 boucles), `compter(tab, elem)` → nb d'occurrences, `inverserTableau(tab)` → nouveau tableau inversé.

---

## S-Challenge 3 — Comprendre setTimeout

Écris `console.log("Début"); setTimeout(() => console.log("Milieu"), 2000); console.log("Fin");`. Prédit l'ordre AVANT d'exécuter. Crée un compte à rebours de 5 à 0 avec setTimeout dans une boucle (attention : utilise `let` et pas `var`).

---

## S-Challenge 4 — Les callbacks

Crée `traiterNombres(tableau, callback)` qui applique le callback sur chaque élément et retourne un nouveau tableau. Teste avec : `(n) => n * 2`, `(n) => n * n`, `(n) => n + 5`.

---

## S-Challenge 5 — Ma première Promise

Crée `devinerNombre()` qui retourne une Promise : si un nombre aléatoire > 5 → resolve("Gagné : X"), sinon reject("Perdu : X"). Appelle avec `.then()` et `.catch()`. Appelle 5 fois.

---

✅ **Checklist** : Je sais écrire des fonctions, je comprends setTimeout, je sais créer une Promise simple.

---
---

# 🔴 MARDI — Renforcement : Logique et algorithmes (1h)

> **Objectif** : Résoudre des problèmes algorithmiques classiques  
> **Niveau** : Intermédiaire-Avancé ⭐⭐⭐

---

## R-Challenge 1 — Algorithmes classiques

Écris 6 fonctions : `palindrome(str)` → true si le mot se lit pareil à l'endroit et à l'envers, `fibonacci(n)` → retourne le n-ième terme (récursif), `compteurLettre(texte, lettre)` → nombre d'occurrences d'une lettre, `motLePlusLong(phrase)` → retourne le mot le plus long, `chiffreRomain(n)` → convertit un nombre < 100 en chiffres romains, `puissance(base, exposant)` → calcule base^exposant sans Math.pow (récursif). Teste chacune avec au moins 3 cas.

---

## R-Challenge 2 — Algorithmes de tri

Implémente `bubbleSort(arr)` : compare les éléments adjacents, échange si mal ordonnés, répète jusqu'à trié. Compte le nombre de comparaisons. Implémente `selectionSort(arr)` : trouve le minimum, place-le au début, répète sur le reste. Teste les deux sur `[64, 25, 12, 22, 11]` et sur un tableau de 50 éléments aléatoires. Affiche les résultats et le nombre de comparaisons pour chaque algorithme.

---

## R-Challenge 3 — Récursivité 🔥

Écris ces fonctions récursives : `sommeRecursive(n)` → 1+2+3+...+n, `inverserTableauRecursif(arr)` → inverse sans boucle, `rechercherBinaire(arr, cible, debut, fin)` → recherche dans un tableau trié, `aplatir(arr)` → transforme un tableau imbriqué en tableau plat ([1,[2,[3,4]]] → [1,2,3,4]), `compterElements(arr)` → compte tous les éléments même dans les sous-tableaux.

---

---

# 🔴 MERCREDI — Renforcement : Asynchrone - Promises & async/await (1h)

> **Objectif** : Maîtriser Promises, async/await, Promise.all  
> **Niveau** : Intermédiaire ⭐⭐

---

## R-Challenge 4 — Simuler des appels API

Crée `simulerAPI(donnees, delai)` qui retourne une Promise résolue après `delai` ms avec `donnees`. Si delai > 3000 → rejeter avec "Timeout". Appelle 3 fois en séquentiel avec `.then().then().then()` et mesure le temps total. Réécris avec async/await + try/catch. Compare.

---

## R-Challenge 5 — Promise.all et Promise.race

Avec `simulerAPI`, crée 3 appels avec des délais différents (500ms, 1000ms, 1500ms). Lance-les en parallèle avec `Promise.all()` → affiche tous les résultats quand tous sont terminés et mesure le temps (devrait être ~1500ms, pas ~3000ms). Lance-les avec `Promise.race()` → affiche le premier résultat reçu. Crée un cas où un des appels échoue (delai > 3000) et observe le comportement de Promise.all (tout échoue si un seul échoue).

---

## R-Challenge 6 — Chaînage et gestion d'erreurs 🔥

Crée 3 fonctions async qui simulent : `recupererUtilisateur(id)` → retourne {nom, email} après 500ms, `recupererCommandes(userId)` → retourne un tableau de commandes après 800ms, `recupererDetails(commandeId)` → retourne les détails après 300ms. Écris une fonction `async afficherParcours(userId)` qui : récupère l'utilisateur, puis ses commandes, puis les détails de la première commande, tout en async/await avec try/catch à chaque étape. Si une étape échoue, affiche l'erreur et arrête.

---

---

# 🔴 JEUDI — Renforcement : Fetch API & CRUD REST (1h)

> **Objectif** : Consommer une API REST complète avec Fetch  
> **Niveau** : Intermédiaire ⭐⭐

---

## R-Challenge 7 — Fetch GET : lire des données

Utilise JSONPlaceholder (`https://jsonplaceholder.typicode.com`). En async/await : récupère les 10 premiers posts (GET /posts?_limit=10) et affiche le titre de chacun. Récupère un post spécifique (GET /posts/1) et affiche titre + body. Récupère les posts d'un utilisateur spécifique (GET /posts?userId=1). Gère l'erreur si le post n'existe pas (GET /posts/9999 → vérifie response.ok).

---

## R-Challenge 8 — Fetch POST/PUT/DELETE : écrire des données

Sur JSONPlaceholder : crée un nouveau post avec POST (body JSON : title, body, userId), modifie un post existant avec PUT, supprime un post avec DELETE. Pour chaque opération : configure les headers (Content-Type: application/json), convertis le body avec JSON.stringify, vérifie le code de réponse (201 pour POST, 200 pour PUT, 200 pour DELETE). Affiche le résultat de chaque opération.

---

## R-Challenge 9 — Application complète : liste + DOM 🔥

Crée une page HTML avec un conteneur `<div id="posts"></div>`. En JavaScript : récupère les 20 premiers posts avec Fetch, pour chaque post crée une card HTML (avec createElement) contenant le titre et le body, ajoute les cards au conteneur, ajoute un bouton "Supprimer" sur chaque card qui fait un DELETE puis retire la card du DOM, ajoute un formulaire en haut pour créer un nouveau post (POST puis ajoute la card), ajoute un spinner/loader visible pendant le chargement.

---

---

# 🏆 VENDREDI — Mini-Projet : CinéApp - Dashboard Films (2-3h)

---

## Brief

Crée une application JavaScript qui consomme l'API OMDB (films) pour un dashboard cinéma interactif.

## Fonctionnalités

**Interface HTML/CSS (3 pts)** : Barre de recherche, zone d'affichage des résultats (cards), section favoris, section statistiques, responsive avec Bootstrap.

**Fetch API (5 pts)** : Rechercher des films par titre (OMDB API, clé gratuite sur omdbapi.com), afficher les détails d'un film (poster, titre, année, note, genre), loader visible pendant le chargement, gestion des erreurs (film non trouvé, erreur réseau), debounce sur la recherche (300ms d'attente après la dernière frappe).

**Logique métier (7 pts)** : Ajouter/retirer des favoris (LocalStorage), filtrer les favoris par genre, année ou note, trier les favoris (titre, année, note en asc/desc), statistiques : nombre de favoris, note IMDb moyenne, genre le plus fréquent, année la plus représentée.

**Qualité (5 pts)** : 100% async/await, code propre et commenté, DOM dynamique (pas de innerHTML), UX fluide (pas de rechargement).

## Challenges weekend (si non validé)

**Challenge 1** : Application météo simplifiée (Fetch GET sur OpenWeatherMap, afficher la météo d'une ville, LocalStorage pour les 5 dernières villes)

**Challenge 2** : 5 exercices async/await sur Codewars
