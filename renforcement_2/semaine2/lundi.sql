-- *Challenge 3 — SQL : Le registre des employés

-- create table employes--
CREATE TABLE employes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(20) NOT NULL,
    prenom VARCHAR(20) NOT NULL,
    poste VARCHAR(100) NOT NULL,
    salaire DECIMAL(10,2) NOT NULL,
    departement VARCHAR(100) NOT NULL,
    date_embauche DATE NOT NULL
);
-- 1)-
SELECT * FROM employes;
-- 2)-
SELECT * FROM employes WHERE departement = "Marketing";
-- 3)-
SELECT * FROM employes WHERE salaire >3000;
-- 4)-
SELECT * FROM employes ORDER BY salaire DESC;
-- 5)-
SELECT * FROM employes ORDER BY salaire DESC LIMIT 5;
-- 6)-
SELECT COUNT(*) FROM employes 

-- *Challenge 4 — SQL : Le magasin en ligne

-- create table articles
CREATE TABLE articles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    prix DECIMAL(10,2), NOT NULL,
    categorie VARCHAR(50) NOT NULL,
    stock INT NOT NULL,
    note_moyenne FLOAT NOT NULL
);

-- 1)-
SELECT * FROM articles WHERE prix >= 20 AND prix <= 80
-- 2)-
SELECT * FROM articles WHERE nom LIKE '%Pro%';
-- 3)-
SELECT * FROM articles WHERE stock = 0;
-- 4)-
SELECT * FROM articles WHERE
categorie IN ('Informatique', 'Téléphonie');
-- 5)-
SELECT * FROM articles
WHERE prix > 50 AND note_moyenne >= 4;

-- *Challenge 5 — SQL : Modifier les données

-- 1)-
UPDATE employes 
SET salaire = salaire * 1.1 
WHERE departement = 'Développement';
-- 2)-
UPDATE employes
SET departement = 'Direction'
WHERE id = 5;
-- 3)-
DELETE FROM employes
WHERE date_embauche < '2015-01-01';
-- 4)-
SELECT 
    AVG(salaire) AS salaire_moyen,
    MAX(salaire) AS salaire_max,
    COUNT(*) AS nb_employes
FROM employes;