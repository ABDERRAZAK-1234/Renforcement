# 📅 SEMAINE 4 — PHP POO (Avancé) & T-SQL

> 📌 **Note** : PHP offre des mécanismes avancés de POO (interfaces, traits, méthodes magiques, etc.) et SQL propose des objets programmables (procédures, fonctions, vues, triggers). Consulte la documentation pour explorer les possibilités.

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

---

## S-Challenge 1 — Révision héritage : le magasin d'instruments

Crée une classe `Instrument` avec nom, marque et prix. Crée 3 classes filles : `Guitare` (nombre de cordes, type: acoustique/électrique), `Piano` (nombre de touches, type: droit/queue) et `Batterie` (nombre de pièces). Chaque classe fille a une méthode `decrire()` qui affiche les informations spécifiques. Crée un tableau de 6 instruments et affiche la description de chacun. Calcule le prix total du magasin.

---

## S-Challenge 2 — Révision encapsulation : le thermostat

Crée une classe `Thermostat` avec des propriétés privées : temperature_actuelle, temperature_cible, mode (chauffage/climatisation/arrêt). Les setters vérifient : la température cible doit être entre 15°C et 30°C. Méthodes : `ajuster()` qui compare la température actuelle à la cible et affiche l'action en cours ("Chauffage en cours : 18°C → 22°C"), `simuler($heures)` qui rapproche la température actuelle de la cible de 1°C par heure. Simule une journée de 8 heures.

---

## S-Challenge 3 — Révision SQL : jointures pratiques

Tables : `employes`(id, nom, departement_id, salaire) et `departements`(id, nom, budget). Écris : la liste des employés avec le nom de leur département, le nombre d'employés par département, le département dont le salaire moyen est le plus élevé, les départements sans employé, le pourcentage du budget consommé par les salaires pour chaque département.

---

✅ **Checklist** : Je maîtrise l'héritage, l'encapsulation et les jointures avant d'aborder le polymorphisme et le T-SQL.

---
---

# 🔴 MARDI — Renforcement : Polymorphisme, Static, Final (1h)

---

## R-Challenge 1 — Le système de livraison (Interfaces + Polymorphisme)

Tu développes un module de livraison pour un e-commerce. Définis un contrat que tous les modes de livraison doivent respecter : calculer le coût et estimer le délai. Crée 4 modes de livraison qui respectent ce contrat, chacun avec sa propre logique de calcul :
- Livraison standard : 5€ fixe, 5-7 jours, gratuite si commande > 50€
- Livraison express : 2€ par kg + 10€ fixe, 1-2 jours
- Point relais : 3€ fixe, 3-5 jours, mais +1€ si le colis pèse plus de 5kg
- Livraison internationale : 15€ + 3€ par kg, 10-15 jours, +20€ si hors Europe

Crée une classe `Commande` qui contient des articles (poids, prix), choisit un mode de livraison et calcule le total (prix articles + frais de livraison). Le choix du mode de livraison doit être interchangeable sans modifier le code de la classe Commande (c'est ça le polymorphisme). Teste avec 3 commandes utilisant des modes différents.

---

## R-Challenge 2 — Le système de logging (Static)

Crée un système de logging pour une application. La classe de logging ne doit jamais être instanciée — toutes ses méthodes et propriétés sont accessibles sans créer d'objet. Elle stocke un tableau de messages avec leur niveau (INFO, WARNING, ERROR, DEBUG) et la date/heure. Méthodes : enregistrer un message avec un niveau, récupérer tous les messages, filtrer par niveau, compter les erreurs, vider le journal, exporter les logs sous forme de texte formaté.

Crée ensuite un compteur d'instances : à chaque fois qu'un objet d'une certaine classe est créé, le compteur s'incrémente. Ajoute une méthode qui retourne le nombre d'instances actuellement créées. C'est possible sans propriété d'instance — utilise le bon mécanisme.

---

## R-Challenge 3 — Le coffre-fort numérique (Final) 🔥

Crée une classe qui ne peut pas être étendue et qui stocke la configuration sensible d'une application : les identifiants de base de données, la clé secrète, le mode de l'application (dev/prod). Personne ne doit pouvoir créer une sous-classe qui modifierait ce comportement. Ajoute des méthodes qui ne peuvent pas être surchargées : une méthode de chiffrement simple (décalage César) et une méthode qui masque partiellement un mot de passe à l'affichage ("pa****rd"). Teste en essayant de créer une classe fille — PHP doit refuser.

---

---

# 🔴 MERCREDI — Renforcement : T-SQL Procédures et Transactions (1h)

---

## R-Challenge 4 — Procédure : le système de parrainage

Un site e-commerce a un système de parrainage. Quand un nouveau client s'inscrit avec un code parrain, le parrain reçoit 10€ de crédit et le filleul reçoit 5€. Crée une procédure stockée `Parrainer` qui prend en paramètre l'id du parrain et les infos du filleul. La procédure doit : vérifier que le parrain existe et est actif, vérifier que le code parrain est valide, créer le compte du filleul, créditer 10€ au parrain, créditer 5€ au filleul. Le tout dans une transaction : si une seule étape échoue, rien ne doit être modifié. Teste avec un cas qui réussit et un cas qui échoue (parrain inexistant).

---

## R-Challenge 5 — Procédure : le virement bancaire sécurisé

Crée une procédure `Virement` qui transfère un montant d'un compte à un autre. La procédure doit : vérifier que les deux comptes existent, vérifier que le compte source a un solde suffisant (en tenant compte du découvert autorisé), débiter le compte source, créditer le compte destination, enregistrer l'opération dans une table d'historique (date, montant, compte_source, compte_destination, statut). Transaction obligatoire. Ajoute la gestion d'erreur : si le débit ou le crédit échoue, tout est annulé et le statut de l'opération est "échouée".

---

## R-Challenge 6 — Procédure : la clôture mensuelle 🔥

En fin de mois, un système comptable doit : calculer les intérêts de tous les comptes épargne (taux annuel / 12), appliquer les frais de tenue de compte (2€) sur les comptes courants dont le solde moyen du mois est inférieur à 1000€, générer un relevé mensuel pour chaque client (nombre d'opérations, total débits, total crédits, solde final). Crée une procédure `ClotureMensuelle` qui fait tout ça dans une seule transaction.

---

---

# 🔴 JEUDI — Renforcement : T-SQL Fonctions, Index, Vues (1h)

---

## R-Challenge 7 — Fonctions métier

Crée les fonctions SQL suivantes : une fonction qui prend un montant HT et un code de catégorie et retourne le TTC (la TVA dépend de la catégorie : produit standard 20%, alimentaire 5.5%, livre 5.5%, service 10%). Une fonction qui prend une date de naissance et retourne l'âge exact en années. Une fonction qui prend un total d'achats annuel et retourne le statut fidélité du client : Bronze (< 500€), Silver (< 2000€), Gold (< 5000€), Platinum (≥ 5000€). Teste chaque fonction dans des requêtes SELECT.

---

## R-Challenge 8 — Vues et Index pour le reporting

Crée une vue `vue_tableau_bord` qui affiche en une seule requête : le nombre total de clients, le nombre de commandes du mois en cours, le chiffre d'affaires du mois, le panier moyen, le top 5 des produits les plus vendus. Crée une vue `vue_clients_vip` qui affiche les clients Gold et Platinum avec leur total d'achats, leur nombre de commandes et leur dernière commande. Crée les index nécessaires pour que ces vues s'exécutent rapidement. Utilise l'outil d'analyse de performance de MySQL pour vérifier que les index sont utilisés.

---

---

# 🏆 VENDREDI — Mini-Projet : Plateforme de gestion d'abonnements (2-3h)

---

## Brief

Tu développes le back-end d'une plateforme de gestion d'abonnements (type Netflix/Spotify).

**PHP POO (10 pts)** :
- Définis un contrat (interface) pour les abonnements avec : souscrire(), resilier(), calculerPrix(), estActif()
- `AbonnementBasic` : 9.99€/mois, 1 écran, qualité SD
- `AbonnementStandard` : 13.99€/mois, 2 écrans, qualité HD, réduction -10% si paiement annuel
- `AbonnementPremium` : 17.99€/mois, 4 écrans, qualité 4K, réduction -15% si paiement annuel, période d'essai gratuite de 30 jours
- Classe `Utilisateur` avec abonnement, historique de paiements, date_inscription
- Méthode static pour compter les abonnés par type
- Classe finale `TarifConfig` avec les prix constants

**T-SQL (10 pts)** :
- Procédure `Souscrire(user_id, type_abonnement, mode_paiement)` avec transaction
- Procédure `FacturationMensuelle()` : pour chaque abonné actif, créer une facture et débiter
- Fonction `CalculerRevenuMensuel()` : retourne le MRR (Monthly Recurring Revenue)
- Vue `vue_kpis` : nombre d'abonnés actifs par type, MRR, taux de résiliation du mois, revenu moyen par utilisateur
- Index optimisés

## Challenges weekend (si non validé)

**Challenge 1** : Interface + 2 classes avec polymorphisme (FormeGeometrique → aire())

**Challenge 2** : 1 procédure stockée avec transaction sur une BDD fournie
