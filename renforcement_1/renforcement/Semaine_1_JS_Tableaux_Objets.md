# 📅 SEMAINE 1 — JavaScript : Manipulation des Tableaux et des Objets

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

> **Objectif** : Reprendre les bases des tableaux et objets JS pour être prêt mardi  
> **Niveau** : Débutant ⭐

---

## S-Challenge 1 — Créer et afficher un tableau

Crée un tableau `animaux` contenant 5 animaux. Affiche le tableau complet, le premier élément, le dernier élément et la taille du tableau.

---

## S-Challenge 2 — Ajouter et retirer

Pars du tableau `["rouge", "bleu", "vert"]`. Ajoute "jaune" à la fin (push), "noir" au début (unshift), retire le dernier (pop), retire le premier (shift). Affiche le tableau après chaque opération.

---

## S-Challenge 3 — Parcourir avec for

Crée un tableau de 6 prénoms. Avec une boucle `for`, affiche chaque prénom avec son numéro (1. Alice, 2. Bob...). Ensuite, affiche uniquement les prénoms de plus de 4 lettres.

---

## S-Challenge 4 — Somme et moyenne

Crée un tableau `notes = [12, 8, 15, 6, 18, 9, 14]`. Avec une boucle, calcule la somme, la moyenne, le max et le min. Affiche les 4 résultats.

---

## S-Challenge 5 — Mon premier objet

Crée un objet `personne` avec : nom, prenom, age, ville. Affiche "Bonjour, je suis [prenom] [nom]". Modifie la ville. Ajoute une propriété email. Affiche toutes les clés avec `Object.keys()`.

---

## S-Challenge 6 — Tableau d'objets : liste de courses

Crée un tableau `courses` de 5 objets avec `{nom, quantite, prix}`. Affiche chaque article sous la forme "Lait x2 = 3.00€". Calcule et affiche le total de la liste.

---

## S-Challenge 7 — Chercher dans un tableau

Crée un tableau de 8 prénoms. Écris une fonction `chercher(tableau, prenom)` qui parcourt le tableau avec une boucle : si trouvé affiche "Trouvé à la position X", sinon "Non trouvé". Teste avec un prénom qui existe et un qui n'existe pas.

---

✅ **Checklist sauvetage S1** : Je sais créer un tableau, parcourir avec for, créer un objet, créer un tableau d'objets.

---
---

# 🔴 MARDI — Renforcement : Méthodes de tableaux (1h)

> **Objectif** : Maîtriser map, filter, reduce, find, sort, spread, déstructuration  
> **Niveau** : Intermédiaire ⭐⭐

---

## R-Challenge 1 — Le panier de fruits (méthodes de base)

Crée un tableau `fruits = ["pomme", "banane", "orange", "kiwi", "mangue"]`.

1. Ajoute "fraise" et "ananas" à la fin en une seule ligne avec push
2. Retire le dernier avec pop et affiche l'élément retiré
3. Utilise `includes()` pour vérifier si "kiwi" est dans le tableau
4. Utilise `indexOf()` pour trouver la position de "orange"
5. Utilise `splice(2, 1)` pour retirer l'élément à l'index 2
6. Affiche le tableau final

---

## R-Challenge 2 — Transformer avec map

Avec le tableau `nombres = [3, 7, 12, 5, 8, 21, 14, 9, 2, 18]` :

1. Crée un tableau `doubles` où chaque nombre est doublé → `map(n => n * 2)`
2. Crée un tableau `carres` où chaque nombre est au carré
3. Crée un tableau `textes` où chaque nombre est transformé en string : "Le nombre est X"
4. Avec un tableau de prénoms, crée un tableau en majuscules avec `map` + `toUpperCase()`

---

## R-Challenge 3 — Filtrer avec filter + Réduire avec reduce

Avec le même tableau `nombres` :

1. Crée `pairs` : uniquement les nombres pairs → `filter(n => n % 2 === 0)`
2. Crée `grands` : uniquement les nombres > 10
3. Calcule la somme avec `reduce((acc, n) => acc + n, 0)`
4. Trouve le max avec `reduce((max, n) => n > max ? n : max)`
5. Compte les nombres pairs avec reduce : `reduce((count, n) => n % 2 === 0 ? count + 1 : count, 0)`

---

## R-Challenge 4 — Le tri des étudiants

Crée un tableau d'objets `etudiants` avec 6 étudiants (nom, note) :

1. Trie par note décroissante avec `sort((a, b) => b.note - a.note)`
2. Filtre ceux qui ont la moyenne (≥ 10) avec `filter`
3. Trouve "Charlie" avec `find(e => e.nom === "Charlie")`
4. Vérifie si tous ont ≥ 5 avec `every(e => e.note >= 5)`
5. Vérifie si au moins un a 18+ avec `some(e => e.note >= 18)`
6. Calcule la moyenne de la classe avec `reduce`

---

## R-Challenge 5 — Spread et déstructuration 🔥

1. Fusionne deux tableaux avec le spread : `const tous = [...tab1, ...tab2]`
2. Copie un tableau sans le modifier : `const copie = [...original]`
3. Déstructure un tableau : `const [premier, deuxieme, ...reste] = tableau`
4. Déstructure un objet : `const {nom, age} = personne`
5. Crée une fonction qui prend un objet et retourne une phrase : `const {nom, ville} = params; return "Je suis ${nom} de ${ville}"`

---

---

# 🔴 MERCREDI — Renforcement : Manipulation d'objets (1h)

> **Objectif** : Manipuler des objets complexes et des tableaux d'objets  
> **Niveau** : Intermédiaire ⭐⭐

---

## R-Challenge 6 — L'annuaire de contacts

Crée un objet `contact` avec des propriétés imbriquées :
```
{nom, prenom, tel, email, adresse: {rue, ville, cp}}
```

1. Affiche le nom complet
2. Affiche la ville (accès imbriqué : `contact.adresse.ville`)
3. Change le numéro de téléphone
4. Ajoute une propriété "age"
5. Parcours toutes les clés avec `Object.keys()` et affiche "clé : valeur" pour chacune
6. Parcours avec `Object.entries()` et affiche sous forme de phrases

---

## R-Challenge 7 — Le catalogue de produits

Crée un tableau de 8 objets produits `{id, nom, prix, categorie, stock}` avec 3 catégories différentes.

1. Affiche tous les noms avec `map(p => p.nom)`
2. Filtre les produits à moins de 50€
3. Filtre par catégorie "Électronique"
4. Trie par prix croissant
5. Trouve le produit le plus cher avec `reduce`
6. Calcule la valeur totale du stock : `reduce((total, p) => total + p.prix * p.stock, 0)`
7. Vérifie si "Laptop" existe avec `some`
8. Crée un résumé par catégorie avec reduce : `{Électronique: 3, Vêtement: 2, ...}`

---

## R-Challenge 8 — Le comparateur de prix 🔥

À partir du catalogue du challenge 7 :

1. Crée une fonction `rechercherProduits(criteres)` qui filtre par nom (contient), prix min/max et catégorie. Les critères sont optionnels.
   - Exemple : `rechercherProduits({prixMax: 100, categorie: "Électronique"})`
2. Crée une fonction `trierProduits(tableau, critere, ordre)` qui trie par "prix", "nom" ou "stock", en "asc" ou "desc"
3. Crée une fonction `statistiquesParCategorie()` qui retourne pour chaque catégorie : le nombre de produits, le prix moyen et le stock total
4. Utilise la déstructuration pour afficher les résultats proprement

---

---

# 🔴 JEUDI — Renforcement : CRUD + Logique métier (1h)

> **Objectif** : CRUD complet sur tableaux d'objets + logique panier  
> **Niveau** : Intermédiaire ⭐⭐

---

## R-Challenge 9 — CRUD complet : gestionnaire de tâches

Crée un gestionnaire de tâches avec ces fonctions :

1. `ajouterTache(titre)` → ajoute `{id: auto, titre, terminee: false, dateCreation: new Date()}`
2. `modifierTache(id, nouveauTitre)` → trouve la tâche par id et change le titre
3. `terminerTache(id)` → passe `terminee` à `true`
4. `supprimerTache(id)` → retire du tableau avec `filter`
5. `filtrerParStatut(terminee)` → retourne les tâches filtrées
6. `compterTerminees()` → retourne le nombre de tâches terminées
7. `afficherTaches()` → affiche chaque tâche formatée : `"[✅/❌] #1 - Faire les courses"`

Teste : ajoute 5 tâches, termine 2, supprime 1, affiche tout.

---

## R-Challenge 10 — Le panier d'achat (partie 1)

Crée un objet `panier` avec un tableau `articles` et ces méthodes :

1. `ajouterArticle(produit, quantite)` → si déjà dans le panier : augmenter la quantité, sinon ajouter
2. `modifierQuantite(produitId, nouvelleQuantite)` → mettre à jour
3. `supprimerArticle(produitId)` → retirer du panier
4. `calculerSousTotal(produitId)` → retourne prix × quantité
5. `calculerTotal()` → somme de tous les sous-totaux
6. `afficherPanier()` → affichage formaté de chaque ligne + total

Teste avec 3 produits ajoutés, 1 modification de quantité et 1 suppression.

---

## R-Challenge 11 — Le panier d'achat (partie 2) 🔥

Ajoute au panier du challenge 10 :

1. `appliquerCodePromo(code)` :
   - "PROMO10" → -10% sur le total
   - "MOINS5" → -5€ sur le total
   - Code invalide → message d'erreur
2. `calculerTVA()` → total × 0.20
3. `calculerTotalTTC()` → (total - remise) + TVA
4. `afficherRecapitulatif()` → affiche : chaque article, sous-total HT, remise, TVA, total TTC
5. `viderPanier()` → réinitialise tout

---

---

# 🏆 VENDREDI — Mini-Projet : Le Super Marché JS (2-3h)

> **Évaluation** : ✅ Validé (≥12/20) → passage S2 | ❌ Non validé → challenges weekend

---

## Brief du projet

Tu es développeur front-end dans une startup e-commerce. Le product owner te demande de créer un prototype de gestionnaire de produits en JavaScript pur (console).

## Fonctionnalités à implémenter

**1. Structure de données (2 pts)**
- Tableau d'objets produits : `{id, nom, prix, categorie, stock, dateAjout}`
- Minimum 8 produits de 3 catégories différentes

**2. CRUD complet (4 pts)**
- `ajouterProduit(nom, prix, categorie, stock)` avec id auto-incrémenté
- `modifierProduit(id, modifications)` qui accepte un objet partiel
- `supprimerProduit(id)` avec confirmation (le produit est-il trouvé ?)
- `obtenirProduit(id)` qui retourne le produit ou un message d'erreur

**3. Recherche et filtrage (4 pts)**
- `rechercherParNom(texte)` → recherche partielle (contient)
- `filtrerParCategorie(categorie)`
- `filtrerParPrix(min, max)`
- `produitsEnStock()` et `produitsEpuises()`

**4. Tri (2 pts)**
- `trierPar(critere, ordre)` → "prix", "nom" ou "stock" en "asc" ou "desc"

**5. Logique métier (4 pts)**
- `calculerValeurStock()` → somme de (prix × stock) pour tous les produits
- `produitPlusCher()` et `produitMoinsCher()`
- `moyennePrix()`
- `statistiquesParCategorie()` → pour chaque catégorie : nb produits, prix moyen, stock total

**6. Panier (4 pts)**
- `ajouterAuPanier(produitId, quantite)` avec vérification du stock
- `calculerTotalPanier()`
- `appliquerRemise(pourcentage)`
- `afficherRecapPanier()` avec sous-totaux et total

## Livrables
- Fichier .js complet et fonctionnel
- Console montrant chaque fonctionnalité testée
- Code commenté
- Rendu sur GitHub

## Barème : /20
- Structure et données : /2
- CRUD : /4
- Recherche et filtrage : /4
- Tri : /2
- Logique métier : /4
- Panier : /4

## Challenges weekend (si non validé)

**Challenge 1** : 5 katas Codewars niveau 7 sur les tableaux (map, filter, reduce)

**Challenge 2** : Refaire le gestionnaire simplifié :
- CRUD basique (4 fonctions seulement)
- 1 filtre par catégorie
- Calcul du total du stock
- Délai : dimanche soir sur GitHub
