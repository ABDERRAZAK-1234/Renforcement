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