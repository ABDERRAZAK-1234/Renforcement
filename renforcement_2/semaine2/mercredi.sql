-- *Challenge 6 — Librairie en ligne
-- 1) Chaque livre avec son éditeur et son genre
SELECT l.titre, e.nom AS editeur, g.nom AS genre
FROM livres l
JOIN editeurs e ON l.editeur_id = e.id
JOIN genres g ON l.genre_id = g.id;

-- 2) Nombre de livres par éditeur (du plus grand au plus petit)
SELECT e.nom, COUNT(l.id) AS nb_livres
FROM editeurs e
LEFT JOIN livres l ON e.id = l.editeur_id
GROUP BY e.nom
ORDER BY nb_livres DESC;

-- 3) Chiffre d'affaires par genre (prix × quantité)
SELECT g.nom AS genre, SUM(l.prix * v.quantite) AS chiffre_affaires
FROM ventes v
JOIN livres l ON v.livre_id = l.id
JOIN genres g ON l.genre_id = g.id
GROUP BY g.nom;

-- Les éditeurs qui n'ont aucun livre vendu
SELECT DISTINCT e.nom
FROM editeurs e
JOIN livres l ON e.id = l.editeur_id
LEFT JOIN ventes v ON l.id = v.livre_id
WHERE v.id IS NULL;

-- Le livre le plus vendu de chaque genre
SELECT g.nom AS genre, l.titre, SUM(v.quantite) AS total_vendu
FROM ventes v
JOIN livres l ON v.livre_id = l.id
JOIN genres g ON l.genre_id = g.id
GROUP BY g.nom, l.titre
HAVING SUM(v.quantite) = (
    SELECT MAX(total)
    FROM (
        SELECT SUM(v2.quantite) AS total
        FROM ventes v2
        JOIN livres l2 ON v2.livre_id = l2.id
        WHERE l2.genre_id = g.id
        GROUP BY l2.id
    ) t
);