# 📅 SEMAINE 6 — Full-Stack : PHP + JS + UML (5 jours × 2h)

> ⚠️ **Semaine intensive** : 5 jours, 2h/jour. Le sauvetage est intégré au renforcement.
> 📌 **Projet de la semaine** : Plateforme de gestion d'événements (conférences, meetups, ateliers)

---

# 🟢🔴 LUNDI — Conception UML + Architecture + BDD (2h)

---

## Challenge 1 — Analyse fonctionnelle

La plateforme permet à des organisateurs de créer des événements (conférences, meetups, ateliers) et à des participants de s'y inscrire. Voici les besoins : un organisateur crée un événement avec un nombre de places limité, un prix (gratuit ou payant), une date et un lieu. Un participant s'inscrit à un événement (si places disponibles). L'organisateur peut voir la liste des inscrits. Un participant peut annuler son inscription (remboursement si > 48h avant l'événement, sinon pas de remboursement). Après l'événement, les participants laissent un avis. Un admin gère la plateforme.

Sur une feuille, liste : les acteurs, les fonctionnalités de chaque acteur, les données à stocker, les règles métier (places limitées, politique d'annulation, calcul du taux de remplissage).

---

## Challenge 2 — Diagrammes UML

Dessine sur Draw.io : le diagramme de cas d'utilisation (4 acteurs : Organisateur, Participant, Admin, Système de paiement — 15 cas d'utilisation minimum). Le diagramme de classes (7 classes : Utilisateur, Evenement, Categorie, Inscription, Paiement, Avis, Lieu — avec tous les attributs, méthodes, relations et cardinalités).

---

## Challenge 3 — Base de données

Crée toutes les tables SQL à partir de ton diagramme. Fais attention aux règles métier dans les contraintes : un participant ne peut s'inscrire qu'une seule fois à un événement, le nombre d'inscriptions ne peut pas dépasser le nombre de places, un avis ne peut être laissé qu'après la date de l'événement. Insère des données de test réalistes (8 utilisateurs, 3 catégories, 6 événements, 15 inscriptions).

---

## Challenge 4 — Init projet + Architecture

Crée la structure MVC de ton projet PHP. Crée la classe de connexion à la base de données (une seule instance de connexion pour toute l'application). Crée la classe Model de base dont les autres hériteront. Initialise Git et fais le premier commit.

---

---

# 🔴 MARDI — Back-end PHP : Models + Controllers (2h)

---

## Challenge 5 — Model Evenement avec logique métier

Crée le Model Evenement avec toute la logique métier intégrée : la création d'un événement vérifie que la date est dans le futur et que le prix est positif ou nul. La méthode `getPlacesDisponibles()` calcule le nombre de places restantes (places totales - nombre d'inscrits). La méthode `estComplet()` retourne vrai si toutes les places sont prises. La méthode `estPasse()` vérifie si la date de l'événement est dépassée. La recherche d'événements permet de filtrer par catégorie, par date (à venir uniquement), par prix (gratuit ou payant), par disponibilité (places restantes > 0).

---

## Challenge 6 — Model Inscription avec règles d'annulation

Crée le Model Inscription avec ces règles : un participant ne peut pas s'inscrire s'il est déjà inscrit au même événement. Un participant ne peut pas s'inscrire si l'événement est complet. Un participant ne peut pas s'inscrire si l'événement est passé. L'annulation est possible : si l'annulation a lieu plus de 48h avant l'événement, le statut passe à "remboursé" ; sinon le statut passe à "annulé sans remboursement". Quand un participant annule, une place se libère. Stocke la date d'inscription et la date d'annulation.

---

## Challenge 7 — Authentification et Controllers

Crée le système d'authentification (inscription, connexion avec hash du mot de passe, déconnexion). Crée les Controllers API qui retournent du JSON : le controller d'événements (lister, détail, créer, modifier, supprimer — en vérifiant que seul l'organisateur propriétaire peut modifier/supprimer), le controller d'inscription (s'inscrire, annuler, voir mes inscriptions), le controller d'authentification. Ajoute le middleware qui vérifie que l'utilisateur est connecté sur les routes protégées.

---

---

# 🔴 MERCREDI — Front-end JS : DOM + Fetch + Logique métier (2h)

---

## Challenge 8 — Affichage et recherche d'événements

En JavaScript, récupère la liste des événements depuis ton API PHP et affiche-les dans le DOM. Chaque événement est une card avec : titre, date, lieu, prix, nombre de places restantes (avec un indicateur visuel : vert si beaucoup de places, orange si peu, rouge si presque complet). Ajoute une barre de recherche et des filtres (catégorie, prix, disponibilité) qui fonctionnent sans rechargement.

---

## Challenge 9 — Inscription et panier d'événements

Implémente un système d'inscription côté front : quand l'utilisateur clique "S'inscrire", envoie la requête à l'API. Si succès, mets à jour le compteur de places en temps réel (sans recharger la page). Implémente un "panier d'événements" : l'utilisateur peut sélectionner plusieurs événements avant de confirmer toutes ses inscriptions d'un coup. Calcule le total à payer. Sauvegarde le panier dans le stockage local du navigateur pour qu'il persiste.

---

## Challenge 10 — Tableau de bord organisateur

Si l'utilisateur connecté est un organisateur, affiche un dashboard avec : la liste de ses événements avec le nombre d'inscrits / places totales, un graphique simple (barre de progression) du taux de remplissage de chaque événement, le revenu total généré (nombre d'inscrits × prix pour chaque événement), la liste des participants inscrits (avec possibilité de télécharger en texte).

---

---

# 🔴 JEUDI — Intégration, Tests et Sécurité (2h)

---

## Challenge 11 — Tests fonctionnels complets

Teste tout le parcours : un organisateur crée un événement → un participant s'inscrit → le compteur de places diminue → le participant annule (> 48h : remboursé) → la place se libère → un autre participant s'inscrit → l'événement est complet → un 3ème participant essaie de s'inscrire → erreur "complet". Teste aussi : inscription à un événement passé (erreur), double inscription (erreur), modification par un non-propriétaire (erreur).

---

## Challenge 12 — Sécurité et finalisation

Vérifie toutes les protections : requêtes préparées partout, validation de toutes les entrées côté serveur, protection des affichages contre les injections de code, vérification des permissions (un participant ne peut pas créer d'événement, un organisateur ne peut pas modifier l'événement d'un autre). Rédige le README.md et commente le code. Merge vers la branche principale sur Git.

---

---

# 🏆 VENDREDI — Soutenance Full-Stack (2h)

---

## Format (10-15 min)

**Présentation (3-5 min)** : Diagrammes UML, architecture, choix techniques, règles métier implémentées.

**Démonstration (5-7 min)** : Parcours complet en live sur Postman ou sur l'interface : créer un événement, s'inscrire, voir les places diminuer, annuler, tester la politique de remboursement.

**Questions (3-5 min)** : Questions du formateur sur le code, les choix et la sécurité.

## Si non validé

Corriger les bugs + re-soutenance 5 min le lundi S7.
