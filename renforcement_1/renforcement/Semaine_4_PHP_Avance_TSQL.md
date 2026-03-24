# 📅 SEMAINE 4 — PHP POO (Avancé) & T-SQL

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

> **Objectif** : Consolider héritage et encapsulation, réviser les jointures SQL  
> **Niveau** : Débutant-Intermédiaire ⭐⭐

---

## S-Challenge 1 — Révision : 3 classes avec héritage

Crée une classe `Appareil` (nom, marque, prix) avec un constructeur et `afficher()`. Crée `Telephone extends Appareil` (taille_ecran) et `Ordinateur extends Appareil` (ram). Surcharge `afficher()` dans chaque enfant pour ajouter les infos spécifiques. Crée 2 téléphones et 2 ordinateurs, mets-les dans un tableau et affiche tout.

---

## S-Challenge 2 — Révision : encapsulation pratique

Reprends la classe `Appareil` : mets toutes les propriétés en private, ajoute les getters, et un setter `setPrix($prix)` qui vérifie que le prix est positif. Ajoute une méthode `appliquerRemise($pourcent)`. Teste en essayant de mettre un prix négatif.

---

## S-Challenge 3 — Révision SQL : jointures 2 tables

Tables : `employes`(id, nom, departement_id) et `departements`(id, nom). Écris : tous les employés avec le nom de leur département (JOIN), départements sans employé (LEFT JOIN + IS NULL), nombre d'employés par département (GROUP BY), département avec le plus d'employés.

---

## S-Challenge 4 — Révision SQL : GROUP BY et HAVING

Avec une table `ventes`(id, produit, montant, date_vente, vendeur) : total des ventes par vendeur, vendeurs avec un total > 5000€ (HAVING), mois avec le plus de ventes, produit le plus vendu.

---

✅ **Checklist** : Je maîtrise l'héritage, l'encapsulation et les jointures 2 tables.

---
---

# 🔴 MARDI — Renforcement : Polymorphisme, Static, Final (1h)

> **Objectif** : Implémenter le polymorphisme avec des interfaces, utiliser static et final  
> **Niveau** : Avancé ⭐⭐⭐

---

## R-Challenge 1 — Système de paiement (Interface + Polymorphisme)

Crée une interface `Payable` avec : `payer(float $montant): bool` et `getType(): string`. Crée 3 classes qui l'implémentent : `CarteBancaire` (propriété $numeroCarte, payer vérifie que le montant < plafond de 5000€), `PayPal` (propriété $email, payer vérifie que l'email n'est pas vide), `Virement` (propriété $iban, payer prend toujours 2€ de frais). Crée une classe `Caisse` avec une méthode `encaisser(Payable $moyen, float $montant)` qui appelle `$moyen->payer($montant)` — c'est le polymorphisme ! Stocke un historique des paiements. Teste avec les 3 moyens de paiement.

---

## R-Challenge 2 — Compteur d'instances (Static)

Crée une classe `Utilisateur` avec une propriété **static** `$compteur = 0`. Le constructeur incrémente `self::$compteur` à chaque nouvelle instance. Ajoute une méthode **static** `getNombreUtilisateurs()` qui retourne le compteur. Crée un `Logger` static : propriété static `$logs = []`, méthodes static `log($message)`, `getLogs()`, `clearLogs()`. Crée 5 utilisateurs, logue chaque création, affiche le compteur et les logs.

---

## R-Challenge 3 — Configuration finale 🔥

Crée une classe **final** `Config` (ne peut pas être étendue) avec des constantes : `DB_HOST`, `DB_NAME`, `DB_USER`. Ajoute une méthode static `get($cle)` qui retourne la valeur. Essaie de créer une classe `MaConfig extends Config` → vérifie que PHP interdit l'héritage. Crée une classe `MathUtils` avec des méthodes **final** : `static final calculerTVA($prix)`, `static final arrondir($nombre, $decimales)`. Dans une classe fille, essaie de surcharger une méthode final → vérifie l'erreur.

---

---

# 🔴 MERCREDI — Renforcement : T-SQL Procédures et Transactions (1h)

> **Objectif** : Créer des procédures stockées avec transactions sécurisées  
> **Niveau** : Avancé ⭐⭐⭐

---

## R-Challenge 4 — Ma première procédure stockée

Crée une procédure `AjouterProduit(IN p_nom VARCHAR(100), IN p_prix DECIMAL, IN p_stock INT, IN p_categorie_id INT)` qui : vérifie que le prix > 0, vérifie que la catégorie existe (SELECT COUNT), si tout est OK insère le produit, sinon affiche un message d'erreur. Teste avec un cas valide et un cas invalide (catégorie inexistante).

---

## R-Challenge 5 — Procédure avec transaction : Passer une commande

Crée une procédure `PasserCommande(IN p_produit_id INT, IN p_client VARCHAR, IN p_quantite INT)` qui dans une seule transaction : vérifie que le produit existe, vérifie que le stock est suffisant, décrémente le stock, insère la commande, COMMIT si tout est OK, ROLLBACK si une erreur survient. Teste : commande OK (stock décrémenté), commande avec stock insuffisant (rien ne change).

---

## R-Challenge 6 — Procédure complexe : Accepter une candidature 🔥

Contexte : tables `missions`(statut) et `candidatures`(statut). Crée une procédure `AccepterCandidature(IN p_candidature_id INT)` qui : récupère le mission_id de la candidature (SELECT INTO), passe la candidature en "acceptee", passe TOUTES les autres candidatures de cette mission en "refusee", passe la mission en "en_cours", le tout dans une transaction avec ROLLBACK en cas d'erreur.

---

---

# 🔴 JEUDI — Renforcement : T-SQL Fonctions, Index, Vues (1h)

> **Objectif** : Créer des fonctions, optimiser avec des index et simplifier avec des vues  
> **Niveau** : Avancé ⭐⭐⭐

---

## R-Challenge 7 — Fonctions SQL

Crée 3 fonctions : `CalculerTTC(prix DECIMAL)` retourne prix × 1.20, `CalculerRemise(prix DECIMAL, pourcent INT)` retourne prix - (prix × pourcent / 100), `ClasserClient(total_achats DECIMAL)` retourne "Bronze" si < 1000, "Silver" si < 5000, "Gold" si ≥ 5000. Teste chaque fonction dans un SELECT.

---

## R-Challenge 8 — Index et optimisation

Crée un index sur `produits(nom)`, un index sur `commandes(date_commande)`, un index composite sur `candidatures(mission_id, freelance_id)`. Exécute EXPLAIN sur une requête lourde (jointure 3 tables avec WHERE) AVANT et APRÈS la création des index. Note la différence.

---

## R-Challenge 9 — Vues SQL

Crée 3 vues : `vue_catalogue` (produits + catégorie + stock, filtrés sur stock > 0), `vue_ca_mensuel` (chiffre d'affaires par mois avec JOIN + GROUP BY + SUM), `vue_top_clients` (clients triés par total d'achats avec JOIN + SUM + ORDER BY). Teste chaque vue avec un simple `SELECT * FROM vue_xxx`.

---

---

# 🏆 VENDREDI — Mini-Projet : Système bancaire POO + T-SQL (2-3h)

---

## Brief

Développe le cœur métier d'une application bancaire combinant PHP POO avancé et T-SQL.

## Partie 1 — PHP POO (10 pts)

- Interface `Transactionnable` : deposer($montant), retirer($montant), getHistorique()
- `CompteCourant implements Transactionnable` : découvert autorisé (-500€ max)
- `CompteEpargne implements Transactionnable` : pas de découvert, taux d'intérêt, `calculerInterets()`
- `CompteEntreprise implements Transactionnable` : plafond de retrait journalier
- Classe static `Logger` : log de toutes les opérations
- Classe final `Config` : constantes de l'application
- Classe `Banque` : gère les comptes, `virement(Compte $source, Compte $dest, $montant)`, `bilanTotal()`

## Partie 2 — T-SQL (10 pts)

- Procédure `EffectuerVirement(source_id, dest_id, montant)` avec transaction complète
- Procédure `CalculerInteretsMensuels()` pour tous les comptes épargne
- Fonction `GetSoldeTotal(client_id)` retourne la somme des soldes
- Vue `vue_releve_mensuel` (opérations du mois avec détails)
- Index sur les colonnes fréquemment requêtées

Soutenance courte de 5 minutes pour présenter les choix techniques.

## Challenges weekend (si non validé)

**Challenge 1** : Interface + 2 classes avec polymorphisme simple (Forme → aire())

**Challenge 2** : 1 procédure stockée avec transaction (insertion de commande avec vérification de stock)
