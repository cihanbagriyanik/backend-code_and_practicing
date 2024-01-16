-- SELECT: Bu artık bir yorum satırıdır. SingleLine

/*
	MultiLine
	Comment
*/

-- SELECT 1 AS One -- Tek block işlemlerde noktalı-virgül zorunlu değildir.

-- SELECT 1 AS One; -- Noktalı-virgül kullanmak güzel bir alışkanlıktır.
-- SELECT 2 AS Two, /* araya yorum ekleyebilirim */ 3 AS Three;

-- NOT Case-Sensitive (Case-Insensitive)
-- select 1 as one;
-- SELECT 1 as one;

-- * Piyasa Standartları:
-- * * SQL temel komutları BÜYÜK harflerle yazılır. -> SELECT * FROM Album WHERE id=1;
-- * * String verilerde tek-çift tırnak kullabiliriz. Tercih edilen TEK TIRNAKTIR. -> SELECT 'string' AS yazi;
-- * * Her bir temel komut ayrı satıra yazılır.
/*
SELECT fieldname
FROM tableName
WHERE ...
*/

-- -- -- -- -- -- SQL -- -- -- -- -- --

-- * SELECT -- Seç ve getir.
-- * FROM -- Hangi tablodan?

-- SELECT * FROM Album; -- '*' == Tüm sutunlar
-- SELECT AlbumId, Title FROM Album; -- İstenilen sutunları getir. -- Tavsiye edilen yöntem ayrı-ayrı yazmaktır.

-- * AS -- Tabloları ve/veya sutunları geçici olarak isimlendirme için kullanılır. Lakap takma olarak düşünülebilir.
-- SELECT 'data data' AS baslik; -- String yazdır.
-- SELECT 1+2 AS sonuc; -- Matematiksel ifade yazdır.
-- SELECT AlbumId AS numara, Title AS baslik FROM Album; -- Sutun isimlendirme
-- SELECT AlbumId+3 AS numara, Title AS baslik FROM Album;
-- SELECT Album.AlbumId, Album.Title FROM Album;
-- SELECT alb.AlbumId AS numara, alb.Title AS baslik FROM Album AS alb;
-- SELECT alb.AlbumId numara, alb.Title baslik FROM Album alb; -- AS kısa kullanımı == AS yazmamak.

-- * DISTINCT -- Tekrar edilen kayıtları bir defa getirir.
-- SELECT DISTINCT City FROM Customer;
-- SELECT DISTINCT City, Country FROM Customer; -- Bütün sutunlardaki ortak olanları 1 kere getirir.
