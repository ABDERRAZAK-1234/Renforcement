# 📅 SEMAINE 5 — JavaScript : Logique, Algorithmes & Asynchrone

> 📌 **Note** : JavaScript possède un mécanisme natif pour gérer les opérations asynchrones (Promises) et une syntaxe simplifiée pour les utiliser. Il existe aussi une API native pour faire des requêtes HTTP depuis le navigateur. Cherche dans la documentation MDN les outils disponibles.

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

---

## S-Challenge 1 — Le chiffrement César

Crée une fonction qui prend un texte et un décalage, et retourne le texte chiffré. Chaque lettre est décalée de N positions dans l'alphabet (si on dépasse Z, on revient à A). Exemple : "HELLO" avec décalage 3 → "KHOOR". Crée aussi la fonction de déchiffrement. Teste avec le message "JAVASCRIPT EST GENIAL" et un décalage de 5.

---

## S-Challenge 2 — Le validateur de mot de passe

Crée une fonction qui vérifie si un mot de passe est valide selon ces règles : au moins 8 caractères, au moins une majuscule, au moins une minuscule, au moins un chiffre, au moins un caractère spécial (!@#$%^&*). La fonction retourne un objet avec : `valide` (true/false) et `erreurs` (tableau des règles non respectées). Teste avec : "abc" (faible), "Abcdef1!" (fort), "12345678" (moyen).

---

## S-Challenge 3 — Le minuteur

Crée un programme qui affiche un compte à rebours de 10 à 0, avec un affichage chaque seconde. Quand il atteint 0, affiche "Temps écoulé !". Utilise le mécanisme de JavaScript qui permet d'exécuter du code après un délai. Ensuite, crée un chronomètre qui compte les secondes de 0 vers l'infini et s'arrête quand tu le décides (après 15 secondes par exemple).

---

## S-Challenge 4 — Le simulateur de dé

Crée une fonction `lancerDe()` qui retourne une valeur aléatoire entre 1 et 6, mais avec un délai de 500ms (pour simuler le temps de lancer). Cette fonction doit retourner une "promesse" du résultat (le résultat n'est pas immédiat). Appelle cette fonction 5 fois de suite et affiche chaque résultat quand il arrive. Calcule le total des 5 lancers.

---

## S-Challenge 5 — Le chargement séquentiel

Crée 3 fonctions qui simulent le chargement de données avec un délai : `chargerProfil()` (800ms), `chargerMessages()` (1200ms), `chargerNotifications()` (500ms). Chaque fonction retourne une promesse. Appelle-les dans l'ordre : d'abord le profil, puis les messages, puis les notifications. Affiche le temps total de chargement. Ensuite, trouve un moyen de les charger toutes en même temps (en parallèle) et compare le temps.

---

✅ **Checklist** : Je sais écrire des fonctions avec logique, je comprends les délais en JS, je sais créer et utiliser des promesses.

---
---

# 🔴 MARDI — Renforcement : Logique et algorithmes (1h)

---

## R-Challenge 1 — Le robot de caisse

Tu programmes un robot de caisse qui doit rendre la monnaie de manière optimale. La fonction reçoit le prix à payer et le montant donné par le client. Elle retourne le nombre de billets et pièces à rendre (50€, 20€, 10€, 5€, 2€, 1€, 0.50€, 0.20€, 0.10€, 0.05€, 0.02€, 0.01€). L'algorithme doit utiliser le moins de pièces/billets possible. Teste avec : prix 67.35€, montant donné 100€ → rendu 32.65€ (détaille les pièces/billets).

---

## R-Challenge 2 — L'analyseur de texte

Crée un programme qui analyse un texte (un paragraphe de 100+ mots) et retourne : le nombre de mots, le nombre de phrases, le nombre de caractères (avec et sans espaces), le mot le plus fréquent, le mot le plus long, la longueur moyenne des mots, la fréquence de chaque lettre (histogramme), un score de lisibilité simplifié (les phrases longues = moins lisible). Implémente tout avec des boucles, pas avec des méthodes toutes faites.

---

## R-Challenge 3 — Le solveur de Sudoku simplifié 🔥

Tu ne vas pas résoudre un Sudoku entier, mais valider une solution. Crée une fonction qui prend une grille 9×9 (tableau de tableaux) et vérifie : que chaque ligne contient les chiffres 1-9 sans doublon, que chaque colonne contient les chiffres 1-9 sans doublon, que chaque bloc 3×3 contient les chiffres 1-9 sans doublon. La fonction retourne true si la grille est valide, false sinon avec l'indication de l'erreur. Teste avec une grille valide et une grille invalide.

---

---

# 🔴 MERCREDI — Renforcement : Asynchrone (1h)

---

## R-Challenge 4 — Le système de notification en temps réel

Simule un système où des notifications arrivent à intervalles aléatoires. Crée une fonction `genererNotification()` qui après un délai aléatoire (entre 500ms et 3000ms) retourne une notification avec un type (message, alerte, info), un contenu et une date. Crée un "écouteur" qui attend 10 notifications les unes après les autres, les affiche au fur et à mesure et tient à jour un compteur par type. À la fin, affiche le résumé : "Reçu : 4 messages, 3 alertes, 3 infos en X secondes".

---

## R-Challenge 5 — Le téléchargeur de fichiers

Simule le téléchargement de 5 fichiers de tailles différentes. Chaque fichier a un nom, une taille (en Mo) et un temps de téléchargement proportionnel à sa taille (100ms par Mo). Crée une fonction `telecharger(fichier)` qui retourne une promesse résolue après le délai, avec un objet `{nom, taille, duree}`. D'abord, télécharge les 5 fichiers un par un (séquentiel) et affiche la progression : "Téléchargement de photo.jpg... OK (2.5s)". Puis, télécharge-les tous en parallèle et compare le temps total. Enfin, ajoute un fichier qui échoue (simule une erreur réseau) et gère l'erreur proprement sans que les autres téléchargements soient affectés.

---

## R-Challenge 6 — Le cache intelligent 🔥

Crée un système de cache qui stocke les résultats d'appels asynchrones pour ne pas les refaire. Fonction `fetchAvecCache(cle, fonctionAsync)` : si la clé est déjà en cache, retourne directement le résultat (sans refaire l'appel). Sinon, exécute la fonction async, stocke le résultat en cache et le retourne. Ajoute un TTL (time-to-live) : les données en cache expirent après 5 secondes. Après expiration, le prochain appel refait la requête. Teste : appelle 3 fois la même clé rapidement (seul le 1er devrait être lent), attends 6 secondes, rappelle (devrait être lent à nouveau).

---

---

# 🔴 JEUDI — Renforcement : Fetch API & CRUD REST (1h)

---

## R-Challenge 7 — Le dashboard météo multi-villes

Crée une application qui affiche la météo de 5 villes. Utilise l'API JSONPlaceholder (ou une API météo gratuite si tu en as une clé). Pour chaque ville, récupère les données via HTTP et affiche-les dans le DOM sous forme de cards. Les 5 requêtes doivent être lancées en parallèle (pas l'une après l'autre). Ajoute un bouton "Rafraîchir" qui recharge les données. Ajoute un indicateur de chargement visible pendant les requêtes. Si une ville échoue, affiche un message d'erreur pour cette ville sans bloquer les autres.

---

## R-Challenge 8 — Le gestionnaire de tâches API

Utilise JSONPlaceholder (`/todos`). Crée une interface complète : affiche les 20 premières tâches dans le DOM avec leur statut (terminée ou non). Ajoute un formulaire pour créer une nouvelle tâche (requête HTTP de création). Ajoute un bouton pour changer le statut d'une tâche (requête HTTP de modification). Ajoute un bouton pour supprimer une tâche (requête HTTP de suppression puis retrait du DOM). Ajoute un filtre : afficher toutes / terminées / non terminées. Ajoute un compteur en temps réel : "3/20 tâches terminées".

---

## R-Challenge 9 — Le moteur de recherche temps réel 🔥

Crée un champ de recherche qui interroge une API à chaque frappe. Utilise JSONPlaceholder `/users` ou `/posts`. Problème : si l'utilisateur tape vite, tu vas envoyer trop de requêtes. Implémente un système qui attend que l'utilisateur ait arrêté de taper pendant 300ms avant d'envoyer la requête (c'est un concept courant en développement front-end — cherche comment ça s'appelle). Affiche les résultats dans le DOM. Si une nouvelle frappe arrive pendant qu'une requête est en cours, annule la requête précédente (ou ignore son résultat). Affiche "Aucun résultat" si la recherche ne retourne rien.

---

---

# 🏆 VENDREDI — Mini-Projet : TripPlanner — Planificateur de voyage (2-3h)

---

## Brief

Tu crées une application de planification de voyage qui consomme plusieurs APIs.

**Interface (3 pts)** : Un champ de recherche de destination, une section "Mon voyage" avec les étapes, une section budget, design responsive.

**API et Async (5 pts)** : Utilise JSONPlaceholder pour simuler des données (ou des APIs gratuites). Récupère les informations de la destination (nom, description, image placeholder). Récupère les "hébergements" disponibles (simule avec /posts). Récupère les "activités" à faire (simule avec /todos). Toutes les requêtes en parallèle. Loader pendant le chargement. Gestion complète des erreurs.

**Logique métier (7 pts)** : L'utilisateur construit son voyage en ajoutant des étapes (hébergement, activité, transport). Chaque étape a un coût et une durée. Le budget total est calculé en temps réel. L'utilisateur peut définir un budget max : une alerte s'affiche s'il dépasse. Sauvegarde du voyage en cours dans le stockage local du navigateur (le voyage persiste même si on ferme la page). Statistiques : durée totale, budget réparti par catégorie (hébergement/activité/transport), coût moyen par jour.

**Qualité (5 pts)** : Code asynchrone propre. DOM dynamique. Pas de rechargement de page. Code commenté et structuré.

## Challenges weekend (si non validé)

**Challenge 1** : Application de liste de films (cherche des films via API, affiche dans le DOM, sauvegarde les favoris localement)

**Challenge 2** : 5 exercices sur les promesses et l'asynchrone
