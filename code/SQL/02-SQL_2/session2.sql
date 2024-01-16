-- -- -- -- -- -- -- -- -- SQL - 2 -- -- -- -- -- -- -- -- -- -- -- --

-- * WHERE - Filtreleme
-- SELECT * FROM Customer WHERE Country = 'USA'; -- Eşit olanları getir.
-- SELECT * FROM Customer WHERE Country != 'USA'; -- Eşit olMAyanları getir.
-- SELECT * FROM Customer WHERE Country <> 'USA'; -- Eşit olMAyanları getir.
-- SELECT * FROM Customer WHERE CustomerId > 15; -- Büyük olanları getir.
-- SELECT * FROM Customer WHERE CustomerId >= 15; -- Büyük ve eşit olanları getir.
-- SELECT * FROM Customer WHERE CustomerId < 15; -- Küçük olanları getir.
-- SELECT * FROM Customer WHERE CustomerId <= 15; -- Küçük ve eşit olanları getir.
-- SELECT * FROM Customer WHERE CustomerId BETWEEN 10 AND 15; -- 10 ile 15 arasındaki kayıtları getir (10 ve 15 dahil)

-- * WHERE - AND/OR/NOT
-- SELECT * FROM Customer WHERE NOT Country = 'USA'; -- NOT True
-- SELECT * FROM Customer WHERE Country = 'USA' AND Company NOT NULL;
-- SELECT * FROM Customer WHERE Country = 'USA' OR Country = 'Canada' OR Country = 'Germany';
-- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Canada' OR Country = 'Germany') AND CustomerId > 20;
-- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Canada' OR Country = 'Germany') AND (CustomerId BETWEEN 20 AND 30);

-- * WHERE - IN / NOT IN
-- SELECT * FROM Customer WHERE CustomerId IN (1, 5, 8, 15, 25);
-- SELECT * FROM Customer WHERE Country IN ('USA', 'Germany', 'Canada', 'Denmark');
-- SELECT * FROM Customer WHERE Country NOT IN ('USA', 'Germany', 'Canada', 'Denmark');

-- * WHERE - LIKE (SpecialChars: % = JokerChar - _ = SingleChar)
-- SELECT * FROM Customer WHERE Address LIKE '627 Broadway'; -- "627 Broadway" olanlar.
-- SELECT * FROM Customer WHERE Address LIKE 'Klanova%'; -- "Klanova" ile başlayanlar.
-- SELECT * FROM Customer WHERE Address LIKE '%Milto'; -- "Milto" ile bitenler
-- SELECT * FROM Customer WHERE Address LIKE '%Park%'; -- İçinde "Park" olanlar.
-- SELECT * FROM Customer WHERE Phone LIKE '_55 %'; -- 2. ve 3. karakteri "55" olan kayıtlar.
-- SELECT * FROM Customer WHERE FirstName LIKE '_a_%'; -- En az 3 karakter ve 2. karakteri "a" olanlar.
-- SELECT * FROM Customer WHERE Phone LIKE '+__ 030%'; -- Ülke kodu belirsiz "030" ile başlayanlar.
-- SELECT * FROM Customer WHERE FirstName LIKE '_a_%' AND Country IN ('USA', 'Canada'); -- USA/Canada'da yaşayan ve 2. karakteri "a" olanlar.

-- ORDER BY - Sıralama
-- ASC -- A-Z Sıralama
-- DESC -- Z-A Sıralama
-- SELECT * FROM Customer WHERE Country IN ('USA', 'Canada') ORDER BY FirstName ASC; -- USA/Canada müşteri isimleri A'dan Z'ye sırala.
-- SELECT * FROM Customer WHERE Country IN ('USA', 'Canada') ORDER BY FirstName; -- Default: ASC
-- SELECT * FROM Customer WHERE Country IN ('USA', 'Canada') ORDER BY LastName DESC; -- USA/Canada müşteri soyiismleri Z'den A'ya sırala.
-- SELECT * FROM Customer ORDER BY Country ASC, City ASC, Address ASC; -- Sırasıyla Ülke - Şehir - Address sırala.
-- SELECT * FROM Customer ORDER BY Country, City, Address;
-- SELECT * FROM Customer ORDER BY Country, City DESC, Address;
/* 
-- Piyasada standartı her satıra ayrı ayrı yazmaktır:
SELECT * 
FROM Customer 
WHERE Country IN ('USA', 'Brazil') 
	AND CustomerId > 12
	AND Company NOT NULL 
ORDER BY Company ASC 
*/

-- LIMIT -- Belli sayıda kayıt getir.
-- SELECT * FROM Customer LIMIT 0, 10; -- Limit: "kaç adet kayıttan" sonra, "kaç adet kayıt" gelsin.
-- SELECT * FROM Customer LIMIT 10; -- Başlangıç default: 0
-- SELECT * FROM Customer ORDER BY CustomerId DESC LIMIT 0, 5;
-- SELECT * FROM Customer ORDER BY CustomerId DESC LIMIT 5, 5;
-- SELECT * FROM Customer WHERE Country = 'USA' ORDER BY CustomerId DESC LIMIT 5, 5;

-- -- -- -- -- -- -- -- SUBQUERY -- -- -- -- -- -- -- --

-- * SUBQUERY (SELECT IN SELECT) (Nested Queries)
-- SELECT * FROM Album WHERE ArtistId = (SELECT ArtistId FROM Artist WHERE Name = 'Deep Purple'); -- ArtistId verisini SubSelect'den al.

/*
-- SubSelect ile yeni bir field ekle:
SELECT a.AlbumId, a.Title, 
	(SELECT Name FROM Artist WHERE ArtistId = a.ArtistId) AS Artist 
FROM Album AS a; */
/*
-- SubSelect verisini bir tablo gibi kullan:
SELECT FirstName, LastName
FROM (SELECT * FROM Customer WHERE Country = 'USA' AND CustomerId > 22)
WHERE FirstName LIKE '%a%'
ORDER BY LastName DESC
*/

-- -- -- -- -- -- -- -- JOINS -- -- -- -- -- -- -- --

-- Birden fazla tablodaki kayıtları tek bir tabloda getirmek için kullanıyor.

-- * INNER JOIN -- Yalnızce kesişen kayıtları getirir.
-- * Default JOIN yöntemidir. Sadece JOIN olarak da yazılabilir. Piyasa standartı INNER JOIN olarak yazmaktır.
/*
SELECT alb.Title, art.Name
FROM Album AS alb
INNER JOIN Artist AS art ON alb.ArtistId = art.ArtistId
*/
/*
SELECT c.CustomerId, c.FirstName, c.LastName, c.City, c.Country, i.InvoiceDate, i.Total
FROM Customer AS c
JOIN Invoice AS i ON i.CustomerId = c.CustomerId -- JOIN == INNER JOIN
WHERE c.Country = 'USA'
ORDER BY c.CustomerId DESC
*/
/*
SELECT a.Title, t.Name TrackName, g.Name GenreName, art.Name ArtistName
FROM Track t
INNER JOIN Album a ON a.AlbumId = t.AlbumId
INNER JOIN Genre g ON g.GenreId = t.GenreId
INNER JOIN Artist art ON art.ArtistId = a.ArtistId
*/

-- * LEFT JOIN -- Üst (LEFT) tablodaki bütün kayıtları getirmek şartıyla, JOIN (RIGHT) tablodaki eşleşmiş verileri de getir.
-- LEFT OUTER JOIN olarak da yazılır. Piyasa standartı == LEFT JOIN
/*
SELECT *
FROM Artist AS art
LEFT JOIN Album AS alb ON alb.ArtistId = art.ArtistId
*/

-- * RIGHT JOIN -- JOIN (RIGHT) tablodaki bütün kayıtları getirmek şartıyla, Üst (LEFT) tablodaki eşleşmiş verileri de getir.
-- RIGHT OUTER JOIN olarak da yazılır. Piyasa standartı == RIGHT JOIN
/*
SELECT *
FROM Artist AS art
RIGHT JOIN Album AS alb ON alb.ArtistId = art.ArtistId
*/

-- * FULL OUTER JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, Eşleşenleri yanyana göster.
/*
SELECT *
FROM Artist AS art
FULL OUTER JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC
*/

-- * CROSS JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, İlişki gözetme.
/*
SELECT *
FROM Artist AS art
CROSS JOIN Album AS alb
ORDER BY ArtistId ASC, AlbumId ASC
*/
/*
-- Genel/Kısa Kullanım:
SELECT *
FROM Artist AS art, Album AS alb
ORDER BY ArtistId ASC, AlbumId ASC
*/

-- * JOIN ÖRNEKLER
-- Hangi sanatçı hangi albümleri çıkarmıştır. Bir albüme sahip olmayan sanatçıları gösterme. Sadece albüm sahibi olan sanatçıları göster.
/*
SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album
FROM Artist AS t1
INNER JOIN Album AS t2 ON t1.ArtistId=t2.ArtistId
WHERE t1.Name = 'Led Zeppeli'
ORDER BY t1.ArtistId
*/
-- Bütün sanatçıları göster. Hangi sanatçı hangi albüme sahip onu da göster. Ama albüm sahibi olmayan kayıtlara NULL yaz.
/*
SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album
FROM Artist AS t1
LEFT JOIN Album AS t2 ON t2.ArtistId=t1.ArtistId
ORDER BY t1.ArtistId
*/

-- -- -- -- -- -- -- --  FUNCTIONS -- -- -- -- -- -- -- --

-- * COUNT -- Kayıt sayısı
-- SELECT COUNT(*) AS kayitSayisi FROM Customer; -- '*' kullanmak efektif değil.
-- SELECT COUNT(CustomerId) AS kayitSayisi FROM Customer; -- Herhangi bir sutun ismi kullanmalıyız (PRIMARY)
-- SELECT COUNT(CustomerId) AS kayitSayisi FROM Customer WHERE Country = 'USA';

-- * SUM -- Toplam
-- SELECT SUM(Total) AS toplamTutar FROM Invoice;
-- SELECT SUM(Total) AS toplamTutar FROM Invoice WHERE BillingCountry IN ('USA', 'Canada');
-- SELECT COUNT(InvoiceId) AS adet, SUM(Total) AS toplamTutar FROM Invoice WHERE BillingCountry IN ('USA', 'Canada');

-- * AVG -- Ortalama
-- SELECT AVG(Total) AS ortalamaTutar FROM Invoice;
-- SELECT COUNT(InvoiceId) AS adet, AVG(Total) AS ortalamaTutar FROM Invoice WHERE BillingCountry IN ('USA', 'Canada');

-- * ROUND -- Yuvarlama
-- SELECT ROUND(AVG(Total), 2) AS ortalamaTutar FROM Invoice; -- Virgülden sonra 2 karakter yuvarla.
-- SELECT COUNT(InvoiceId) AS adet, ROUND(AVG(Total)) AS ortalamaTutar FROM Invoice WHERE BillingCountry IN ('USA', 'Canada'); -- Defaul: 1 karakter.

-- * MIN -- Minimum Değer
-- SELECT MIN(Total) AS Tutar FROM Invoice; -- En küçük fatura tutarı.
-- String geçerli:
-- SELECT MIN(FirstName), LastName FROM Customer; -- A-Z -> ilk Müşteri

-- * MAX -- Maximum Değer
-- SELECT MAX(Total) AS Tutar FROM Invoice; -- En büyük fatura tutarı.
-- String geçerli:
-- SELECT MAX(FirstName), LastName FROM Customer; -- A-Z -> Son Müşteri

-- * LENGTH -- Karakter sayısı (Kayıt sayısını tek satıra düşürmez. Her kaydın karakter sayısını aynı satıra yazar.)
-- SELECT LENGTH(FirstName), FirstName, LastName FROM Customer;
-- SELECT LENGTH(Total), Total FROM Invoice;
