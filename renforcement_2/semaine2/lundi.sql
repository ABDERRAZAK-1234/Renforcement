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
