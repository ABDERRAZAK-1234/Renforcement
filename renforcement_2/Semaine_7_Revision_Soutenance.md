# 📅 SEMAINE 7 — Révision et Préparation Soutenance Fil Rouge

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

---

## S-Challenge 1 — Auto-diagnostic honnête

Note-toi de 1 à 5 sur chaque compétence :
- Créer et manipuler un tableau d'objets en JS
- Filtrer, trier et agréger des données en JS
- Consommer une API et afficher les données dans le DOM
- Écrire une jointure SQL sur 3 tables
- Créer une procédure stockée avec transaction
- Créer une classe PHP avec encapsulation
- Utiliser l'héritage et le polymorphisme en PHP
- Concevoir un diagramme de cas d'utilisation UML
- Concevoir un diagramme de classes UML
- Utiliser Git (add, commit, push, branches)

Pour chaque note de 1 ou 2 : écris en une phrase ce qui te bloque exactement.

---

## S-Challenge 2 — L'exercice de survie (45 min chrono)

Fais les 3 exercices suivants en 45 minutes maximum — c'est un test de rapidité :

**JS (15 min)** : Tu as un tableau de 10 commandes (objet avec : client, montant, date, statut: payée/en_attente/annulée). Calcule le chiffre d'affaires (uniquement les commandes payées). Trouve le client qui a le plus dépensé. Affiche les commandes en attente triées par montant décroissant.

**SQL (15 min)** : Écris de mémoire : une jointure sur 3 tables, une requête avec GROUP BY et HAVING, une requête qui trouve les enregistrements sans correspondance dans une autre table.

**PHP (15 min)** : Crée une classe abstraite `Notification` (message, date, lue) avec une méthode abstraite `envoyer()`. Crée 2 classes filles : `NotificationEmail` (ajoute l'adresse email) et `NotificationSMS` (ajoute le numéro de téléphone). Chacune implémente `envoyer()` différemment. Instancie 3 notifications et envoie-les.

---

## S-Challenge 3 — Le pitch de 2 minutes

Prépare et chronomètre un pitch de 2 minutes qui répond à : "Présente ton projet fil rouge". Tu dois couvrir : ce que fait l'application (1 phrase), pour qui (1 phrase), les technologies utilisées (liste rapide), la fonctionnalité la plus intéressante (2-3 phrases), une difficulté que tu as surmontée (2 phrases). Enregistre-toi et réécoute.

---

## S-Challenge 4 — Les 10 questions du jury

Prépare une réponse de 30 secondes pour chacune :
1. C'est quoi l'architecture MVC et pourquoi tu l'utilises ?
2. Comment tu protèges les mots de passe dans ta base de données ?
3. C'est quoi une injection SQL et comment tu l'évites ?
4. Explique une de tes jointures SQL complexes.
5. Quelle est la différence entre une classe abstraite et une interface ?
6. Comment fonctionne l'authentification dans ton application ?
7. C'est quoi le polymorphisme ? Donne un exemple dans ton projet.
8. Comment tu gères les erreurs dans ton code ?
9. Pourquoi tu utilises des requêtes préparées ?
10. Qu'est-ce que tu améliorerais si tu avais 2 semaines de plus ?

---

✅ **Checklist** : J'ai identifié mes lacunes, j'ai fait l'exercice chronométré, j'ai un pitch de 2 min, j'ai 10 réponses prêtes.

---
---

# 🔴 MARDI — Renforcement : Révision technique (1h)

---

## R-Challenge 1 — Le quiz croisé (en binôme)

Chaque apprenant prépare 5 questions techniques pour son binôme (1 JS, 1 SQL, 1 PHP, 1 UML, 1 sécurité). Les questions doivent demander une explication ou un mini-exercice au tableau — pas du QCM. Exemples : "Écris-moi une fonction JS qui prend un tableau de produits et retourne le produit le moins cher", "Explique-moi comment tu ferais pour trouver les clients qui n'ont jamais commandé en SQL". Chaque apprenant pose ses 5 questions et note les réponses de son binôme. Débriefing collectif : quelles questions ont posé le plus de difficultés ?

---

## R-Challenge 2 — Le cas pratique express (au tableau)

Le formateur donne un mini-cahier des charges oral : "On veut un système de réservation de salles de réunion. Un employé réserve une salle pour un créneau. Une salle ne peut pas être réservée 2 fois au même créneau."

Chaque apprenant (ou en binôme) doit en 20 minutes : dessiner au tableau le diagramme de classes (3-4 classes), écrire les CREATE TABLE correspondants, écrire la requête SQL qui vérifie si un créneau est disponible, et expliquer comment il implémenterait la vérification en PHP (en pseudo-code).

Le formateur donne un feedback immédiat.

---

## R-Challenge 3 — Le défi du code à trous

Le formateur montre du code PHP avec des parties manquantes. L'apprenant doit compléter :

Un code de Model avec connexion à la BDD, mais il manque la requête SQL et le traitement du résultat. Un code de Controller avec la validation des données, mais il manque la vérification des permissions et le retour JSON. Un code JavaScript avec un appel API, mais il manque la gestion d'erreurs et l'affichage dans le DOM.

---

---

# 🔴 MERCREDI — Renforcement : Préparation de la présentation (1h)

---

## R-Challenge 4 — Structurer sa présentation

Écris le plan détaillé de ta soutenance fil rouge :

**Slide/Partie 1 — Contexte (1 min)** : Le problème que ton application résout. Pour qui elle est destinée. Ce qui la rend utile.

**Slide/Partie 2 — Conception (2 min)** : Montre ton diagramme de cas d'utilisation et explique les acteurs et les principaux cas. Montre ton diagramme de classes et explique les relations importantes.

**Slide/Partie 3 — Architecture technique (1 min)** : La structure de ton projet (dossiers). Les technologies choisies et pourquoi. Le schéma de la base de données (nombre de tables, relations clés).

**Slide/Partie 4 — Démo (5-7 min)** : Le parcours que tu vas montrer (écris-le étape par étape pour ne rien oublier). Prépare un "plan B" si quelque chose plante pendant la démo.

**Slide/Partie 5 — Conclusion (1 min)** : Ce que tu as appris. Ce que tu améliorerais. Tes prochaines étapes.

---

## R-Challenge 5 — La code review de son propre projet

Relis tout ton code avec un œil critique. Pour chaque fichier, vérifie : est-ce que les variables ont des noms clairs ? Est-ce qu'il y a des commentaires aux endroits complexes ? Est-ce que les requêtes SQL sont toutes des requêtes préparées ? Est-ce que les entrées utilisateur sont validées ? Est-ce qu'il y a du code dupliqué que tu pourrais factoriser ? Est-ce que le .gitignore exclut les fichiers sensibles (.env) ? Note les 5 améliorations les plus importantes et corrige-les.

---

## R-Challenge 6 — La FAQ de mon projet

Écris une mini-FAQ de ton projet (5 questions-réponses) que tu pourrais inclure dans ton dossier projet ou ta présentation :
- "Pourquoi avoir choisi cette architecture ?"
- "Comment l'application gère-t-elle la sécurité ?"
- "Quelle a été la fonctionnalité la plus difficile à implémenter ?"
- "Comment la base de données est-elle organisée ?"
- "Quelles sont les limites actuelles de l'application ?"

---

---

# 🔴 JEUDI — Renforcement : Simulation de soutenance (1h)

---

## R-Challenge 7 — Simulation complète (20 min par apprenant)

Conditions réelles : le formateur joue le rôle du jury.

**Partie 1 — Présentation (5 min)** : Présente ton projet en suivant le plan du R-Challenge 4. Chronomètre activé. Si tu dépasses, le formateur t'arrête.

**Partie 2 — Démonstration technique (10 min)** : Montre ton application en fonctionnement. Montre la base de données. Montre 2-3 extraits de code que tu maîtrises.

**Partie 3 — Questions (5 min)** : Le formateur pose des questions techniques et des questions de compréhension. Exemples de questions pièges : "Et si 1000 utilisateurs se connectent en même temps, que se passe-t-il ?", "Si je modifie directement la BDD, ton application le détecte-t-elle ?", "Comment tu testerais ton application ?"

---

## R-Challenge 8 — Le feedback constructif

Après ta simulation, note immédiatement :
- Les 3 moments où j'étais le plus à l'aise
- Les 2 moments où j'ai hésité ou bafouillé
- La question à laquelle j'ai le moins bien répondu → prépare une meilleure réponse
- Le retour du formateur résumé en 3 points
- Ce que je change pour demain (vendredi)

---

---

# 🏆 VENDREDI — Évaluation Finale et Bilan (2-3h)

---

## Matin — 2ème simulation améliorée

Chaque apprenant repasse avec les améliorations intégrées depuis jeudi. Le formateur remplit la grille de compétences définitive. C'est ta dernière répétition avant le jour J.

---

## Après-midi — Bilan individuel (15 min par apprenant)

Entretien en face-à-face avec le formateur :

1. **Tes points forts** : qu'est-ce que tu maîtrises bien après ces 7 semaines ?
2. **Ce qu'il reste à travailler** : les lacunes qui persistent et comment les combler
3. **3 objectifs concrets pour le fil rouge** : mesurables et atteignables
4. **Ressources personnalisées** : les tutoriels et exercices spécifiques à tes lacunes
5. **Le mot de la fin** : rappel de ta progression depuis le début du programme

Chaque apprenant repart avec un bilan écrit signé.

---

## Grille d'évaluation finale

Le formateur évalue sur l'ensemble du programme :

- **JavaScript** : manipulation de données, logique métier complexe (panier, conversions, calculs), asynchrone, consommation d'API, DOM dynamique
- **PHP POO** : encapsulation, héritage, polymorphisme, interfaces, static/final, architecture MVC, connexion BDD sécurisée
- **SQL/T-SQL** : requêtes complexes, jointures multi-tables, procédures stockées avec transactions, fonctions, vues, index
- **UML** : diagrammes de cas d'utilisation et de classes complets et cohérents
- **Sécurité** : hash des mots de passe, requêtes préparées, validation des entrées, protection XSS
- **Git** : versionnement propre, commits descriptifs, branches organisées
- **Communication** : clarté de la présentation, maîtrise du vocabulaire technique, capacité à répondre aux questions

---

## 🎯 Fin du programme

Sept semaines de travail. Des dizaines de challenges. Des mini-projets complets. Tu as les outils et les compétences pour réussir ton fil rouge. C'est maintenant à toi de jouer.
