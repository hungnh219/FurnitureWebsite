create database test;
use test;
/*
drop database test
*/

create table PRODUCT(
  ID        varchar(10)   ,
  Name      varchar(50)   ,
  Info      varchar(100)  ,
  Price     int           ,
  primary key (ID)
);

create table RECEIPT(
  ID        varchar(10) 	,
  PDate     date        	,
  Paid      int         	,
  Customer  varchar(50) 	,
  Status    bit         	,
  Mail      varchar(50) 	,
  Phone		varchar(10)		,
  primary key (ID)
);

create table BRAND(
  ID        varchar(10)   ,
  Name      varchar(50)   ,
  Info      varchar(100)  ,
  BDate     date          ,
  primary key (ID)
);

create table TAG(
  ID      varchar(10)     ,
  Name    varchar(50)     ,
  primary key (ID)
);

create table COMMENT(
  ID        varchar(10)   ,
  ProductID varchar(10)   ,
  Content   varchar(50)   ,
  Rating    float         ,
  Time      datetime      ,
  primary key (ID)
);

create table RECEIPT_DETAIL(
  ReceiptID varchar(10)   ,
  ProductID varchar(10)   ,
  Amount    int           ,
  primary key (ReceiptID, ProductID)
);

create table PRODUCT_BRAND(
  ProductID varchar(10)   ,
  BrandID   varchar(10)   ,
  primary key (ProductID, BrandID)
);

create table PRODUCT_TAG(
  ProductID varchar(10)     ,
  TagID     varchar(10)     ,
  primary key (ProductID, TagID)
);

-- BEGIN
alter table COMMENT
add foreign key (ProductID)   references PRODUCT(ID);
alter table RECEIPT_DETAIL
add foreign key (ProductID)   references PRODUCT(ID);
alter table RECEIPT_DETAIL
add foreign key (ReceiptID)   references RECEIPT(ID);
alter table PRODUCT_BRAND
add foreign key (BrandID)     references BRAND(ID);
alter table PRODUCT_BRAND
add foreign key (ProductID)   references PRODUCT(ID);
alter table PRODUCT_TAG
add foreign key (ProductID)   references PRODUCT(ID);
alter table PRODUCT_TAG
add foreign key (TagID)       references TAG(ID);

	INSERT INTO TAG
	VALUE
		('T0001','Bedroom'),
		('T0002','Diningroom'),
		('T0003','Livingroom'),
		('T0004','Accent Tables'),
		('T0005','Beds'),
		('T0006','Benches & Ottomans'),
		('T0007','Chairs'),
		('T0008','Nightstands & Dressers'),
		('T0009','Tables'),
		('T0010','Stools'),
		('T0011','Sectionals'),
		('T0012','Sofas');
	INSERT INTO PRODUCT
	VALUE
		('P0001','The Bank Console Table','a','1'),
		('P0002','The Bowery','a','2'),
		('P0003','The Morro Tables','a','3'),
		('P0004','The Reade Console Table','a','4'),
		('P0005','The Reade Demilune Console Table','a','5'),
		('P0006','The Vestry Tables','a','6'),
		('P0007','The Eldridge Bed','a','7'),
		('P0008','The Essex Bed','a','8'),
		('P0009','The Kent Bed','a','9'),
		('P0010','The Smith Bed','a','10'),
		('P0011','The Thompson Canopy Bed','a','11'),
		('P0012','The Wythe Bed','a','12'),
		('P0013','The Chelsea Ottoman','a','13'),
		('P0014','The Franklin Bench','a','14'),
		('P0015','The Franklin Ottoman','a','15'),
		('P0016','The Mulberry Ottoman','a','16'),
		('P0017','The Reyes Bench','a','17'),
		('P0018','The Bond Chair','a','18'),
		('P0019','The Chrystie Chair','a','19'),
		('P0020','The Dune Chair and a Half','a','20'),
		('P0021','The Kenmare Chair','a','21'),
		('P0022','The Laight Chair','a','22'),
		('P0023','The Perry Chair','a','23'),
		('P0024','The Clinton 1-Drawer Nightstand','a','24'),
		('P0025','The Clinton 2-Drawer Nightstand','a','25'),
		('P0026','The Clinton 3-Drawer Dresser','a','26'),
		('P0027','The Clinton 5-Drawer Dresser','a','27'),
		('P0028','The Rivington 2-Drawer Nightstand','a','28'),
		('P0029','The Rivington 5-Drawer Dresser','a','29'),
		('P0030','The Allen Dining Chair','a','30'),
		('P0031','The Bedford Dining Table','a','31'),
		('P0032','The Delancey Stool','a','32'),
		('P0033','The Jane Dining Chair','a','33'),
		('P0034','The Reade Dining Table','a','34'),
		('P0035','The Reade Round Dining Table','a','35'),
		('P0036','The Stanton Stool','a','36'),
		('P0037','The Beekman Desk','a','37'),
		('P0038','The Breuer Modular Sectional','a','38'),
		('P0039','The Carmine Sectional','a','39'),
		('P0040','The Ludlow Sectional','a','40'),
		('P0041','The Muir Sectional','a','41'),
		('P0042','The Sullivan Sectional','a','42'),
		('P0043','The Varick Sectional','a','43'),
		('P0044','The Bond Settee Sofa','a','44'),
		('P0045','The Chelsea Sofa','a','45'),
		('P0046','The Dune Sofa','a','46'),
		('P0047','The Jones Modular Sofa','a','47'),
		('P0048','The Leonard Sofa','a','48'),
		('P0049','The Varick Sofa','a','49');
	INSERT INTO PRODUCT_TAG
	VALUE
		('P0001','T0001'),
		('P0001','T0003'),
		('P0001','T0004'),
		('P0002','T0001'),
		('P0002','T0003'),
		('P0002','T0004'),
		('P0003','T0001'),
		('P0003','T0003'),
		('P0003','T0004'),
		('P0004','T0001'),
		('P0004','T0003'),
		('P0004','T0004'),
		('P0005','T0001'),
		('P0005','T0003'),
		('P0005','T0004'),
		('P0006','T0001'),
		('P0006','T0003'),
		('P0006','T0004'),
		('P0007','T0001'),
		('P0007','T0005'),
		('P0008','T0001'),
		('P0008','T0005'),
		('P0009','T0001'),
		('P0009','T0005'),
		('P0010','T0001'),
		('P0010','T0005'),
		('P0011','T0001'),
		('P0011','T0005'),
		('P0012','T0001'),
		('P0012','T0005'),
		('P0013','T0001'),
		('P0013','T0003'),
		('P0013','T0006'),
		('P0014','T0001'),
		('P0014','T0003'),
		('P0014','T0006'),
		('P0015','T0001'),
		('P0015','T0003'),
		('P0015','T0006'),
		('P0016','T0001'),
		('P0016','T0003'),
		('P0016','T0006'),
		('P0017','T0001'),
		('P0017','T0003'),
		('P0017','T0006'),
		('P0018','T0001'),
		('P0018','T0007'),
		('P0019','T0001'),
		('P0019','T0007'),
		('P0020','T0001'),
		('P0020','T0007'),
		('P0021','T0001'),
		('P0021','T0007'),
		('P0022','T0001'),
		('P0022','T0007'),
		('P0023','T0001'),
		('P0023','T0007'),
		('P0024','T0001'),
		('P0024','T0008'),
		('P0025','T0001'),
		('P0025','T0008'),
		('P0026','T0001'),
		('P0026','T0008'),
		('P0027','T0001'),
		('P0027','T0008'),
		('P0028','T0001'),
		('P0028','T0008'),
		('P0029','T0001'),
		('P0029','T0008'),
		('P0030','T0002'),
		('P0030','T0007'),
		('P0031','T0002'),
		('P0031','T0009'),
		('P0032','T0002'),
		('P0032','T0010'),
		('P0033','T0002'),
		('P0033','T0007'),
		('P0034','T0002'),
		('P0034','T0009'),
		('P0035','T0002'),
		('P0035','T0009'),
		('P0036','T0002'),
		('P0036','T0010'),
		('P0037','T0003'),
		('P0037','T0009'),
		('P0038','T0003'),
		('P0038','T0011'),
		('P0039','T0003'),
		('P0039','T0011'),
		('P0040','T0003'),
		('P0040','T0011'),
		('P0041','T0003'),
		('P0041','T0011'),
		('P0042','T0003'),
		('P0042','T0011'),
		('P0043','T0003'),
		('P0043','T0011'),
		('P0044','T0003'),
		('P0044','T0012'),
		('P0045','T0003'),
		('P0045','T0012'),
		('P0046','T0003'),
		('P0046','T0012'),
		('P0047','T0003'),
		('P0047','T0012'),
		('P0048','T0003'),
		('P0048','T0012'),
		('P0049','T0003'),
		('P0049','T0012');
-- END;

-- ----- PRODUCT basic sp ----- --

DELIMITER //
CREATE PROCEDURE sp_InsertProduct(
  ID        varchar(10)   ,
  Name      varchar(50)   ,
  Info      varchar(100)  ,
  Price     int           
)
BEGIN
	INSERT INTO PRODUCT
	VALUES (ID, Name, Info, Price);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_UpdateProduct(
  IDUp      varchar(10)   ,
  ID		varchar(10)   ,
  Name      varchar(50)   ,
  Info      varchar(100)  ,
  Price     int           
)
BEGIN
    UPDATE PRODUCT a
	SET a.ID = ID, a.Name = Name, a.Info = Info, a.Price = Price
	WHERE IDUp = a.ID;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_DeleteProduct(
  IDDel      varchar(10)          
)
BEGIN
    DELETE FROM PRODUCT WHERE ID = IDDel;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_GetAllProduct(       
)
BEGIN
    SELECT * FROM PRODUCT;
END;
//
DELIMITER;

DELIMITER //
CREATE PROCEDURE sp_GetProductByName(       
	Name      varchar(50)
)
BEGIN
    SELECT * 
    FROM PRODUCT a
    WHERE a.Name LIKE Name;
END;
//
DELIMITER;

DELIMITER //
CREATE PROCEDURE sp_GetProductByID(       
	ID      varchar(10)
)
BEGIN
    SELECT * 
    FROM PRODUCT a
    WHERE a.ID = ID;
END;
//
DELIMITER;

-- ----- RECEIPT basic sp ----- --

DELIMITER //
CREATE PROCEDURE sp_InsertReceipt(
  ID        varchar(10) 	,
  PDate     date        	,
  Paid      int         	,
  Customer  varchar(50) 	,
  Status    bit         	,
  Mail      varchar(50) 	,
  Phone		varchar(10)       
)
BEGIN
	INSERT INTO RECEIPT
	VALUES (ID, PDate, Paid, Customer, Status, Mail, Phone);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_UpdateReceipt(
  IDUp      varchar(10)   	,
  ID        varchar(10) 	,
  PDate     date        	,
  Paid      int         	,
  Customer  varchar(50) 	,
  Status    bit         	,
  Mail      varchar(50) 	,
  Phone		varchar(10)            
)
BEGIN
    UPDATE RECEIPT a
	SET 	a.ID = ID, 
			a.PDate = PDate, 
            a.Paid = Paid, 
            a.Customer = Custome,
            a.Status = Status,
            a.Mail = Mail,
            a.Phone = Phone
	WHERE IDUp = a.ID;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_DeleteReceipt(
  IDDel      varchar(10)          
)
BEGIN
    DELETE FROM RECEIPT WHERE ID = IDDel;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_GetAllReceipt(       
)
BEGIN
    SELECT * FROM RECEIPT;
END;
//
DELIMITER;

DELIMITER //
CREATE PROCEDURE sp_GetReceiptByID(       
	ID      varchar(10)
)
BEGIN
    SELECT * 
    FROM RECEIPT a
    WHERE a.ID = ID;
END;
//
DELIMITER;

-- ----- BRAND basic sp ----- --

DELIMITER //
CREATE PROCEDURE sp_InsertBrand(
	ID        varchar(10)   ,
	Name      varchar(50)   ,
	Info      varchar(100)  ,
	BDate     date          
)
BEGIN
	INSERT INTO BRAND
	VALUES (ID, Name, Info, BDate);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_UpdateBrand(
	IDUp      varchar(10)   ,
	ID        varchar(10)   ,
	Name      varchar(50)   ,
	Info      varchar(100)  ,
	BDate     date           
)
BEGIN
    UPDATE BRAND a
	SET 	a.ID = ID		,
			a.Name = Name	,
			a.Info = Info   ,
			a.BDate = BDate  
	WHERE IDUp = a.ID;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_DeleteBrand(
  IDDel      varchar(10)          
)
BEGIN
    DELETE FROM BRAND WHERE ID = IDDel;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_GetAllBrand(       
)
BEGIN
    SELECT * FROM BRAND;
END;
//
DELIMITER;

DELIMITER //
CREATE PROCEDURE sp_GetBrandByID(       
	ID      varchar(10)
)
BEGIN
    SELECT * 
    FROM BRAND a
    WHERE a.ID = ID;
END;
//
DELIMITER;

DELIMITER //
CREATE PROCEDURE sp_GetBrandByName(       
	Name      varchar(10)
)
BEGIN
    SELECT * 
    FROM BRAND a
    WHERE a.Name LIKE Name;
END;
//
DELIMITER;

-- ----- TAG ----- --

DELIMITER //
CREATE PROCEDURE sp_InsertTag(
	ID      varchar(10)     ,
	Name    varchar(50)   
)
BEGIN
	INSERT INTO TAG
	VALUES (ID, Name);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_UpdateTag(
	IDUp    varchar(10)   	,
	ID      varchar(10)   	,
	Name    varchar(50)   	
)
BEGIN
    UPDATE TAG a
	SET 	a.ID = ID		,
			a.Name = Name	
	WHERE IDUp = a.ID;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_DeleteTag(
  IDDel      varchar(10)          
)
BEGIN
    DELETE FROM TAG WHERE ID = IDDel;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_GetAllTag(       
)
BEGIN
    SELECT * FROM TAG;
END;
//
DELIMITER;

DELIMITER //
CREATE PROCEDURE sp_GetTagByID(       
	ID      varchar(10)
)
BEGIN
    SELECT * 
    FROM TAG a
    WHERE a.ID = ID;
END;
//
DELIMITER;

DELIMITER //
CREATE PROCEDURE sp_GetTagByName(       
	Name      varchar(10)
)
BEGIN
    SELECT * 
    FROM TAG a
    WHERE a.Name LIKE Name;
END;
//
DELIMITER;

-- ----- COMMENT basic sp ----- ---

DELIMITER //
CREATE PROCEDURE sp_InsertComment(
	  ID        varchar(10)   ,
	  ProductID varchar(10)   ,
	  Content   varchar(50)   ,
	  Rating    float         ,
	  Time      datetime        
)
BEGIN
	INSERT INTO COMMENT
	VALUES (ID, ProductID, Content, Rating, Time);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_UpdateComment(
	IDUp    	varchar(10)		,
	ID        	varchar(10)   	,
	ProductID 	varchar(10)   	,
	Content   	varchar(50)   	,
	Rating    	float         	,
	Time      	datetime    	
)
BEGIN
    UPDATE COMMENT a
	SET 	a.ID = ID				,
			a.ProductID = ProductID	,
            a.Content = Content		,
            a.Rating = Rating		,
            a.Time = Time			
	WHERE IDUp = a.ID;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_DeleteComment(
  IDDel      varchar(10)          
)
BEGIN
    DELETE FROM COMMENT WHERE ID = IDDel;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_GetAllComment(       
)
BEGIN
    SELECT * FROM COMMENT;
END;
//
DELIMITER;

DELIMITER //
CREATE PROCEDURE sp_GetCommentByID(       
	ID      varchar(10)
)
BEGIN
    SELECT * 
    FROM COMMENT a
    WHERE a.ID = ID;
END;
//
DELIMITER;

DELIMITER //
CREATE PROCEDURE sp_GetCommentByName(       
	Name      varchar(10)
)
BEGIN
    SELECT * 
    FROM COMMENT a
    WHERE a.Name LIKE Name;
END;
//
DELIMITER;

-- ----- Other sp ----- --

DELIMITER //
CREATE PROCEDURE sp_GetProductByTag(tag VARCHAR(50))
BEGIN
  SELECT * 
  FROM PRODUCT a 
  INNER JOIN PRODUCT_TAG b ON a.ID = b.ProductID
  INNER JOIN TAG c ON c.ID = b.TagID
  WHERE c.Name = tag;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_SortProductByName()
BEGIN
	SELECT *
	FROM PRODUCT
	ORDER BY Name;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_SortProductByPrice()
BEGIN
	SELECT *
	FROM PRODUCT
	ORDER BY Price;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_SearchProductByString(search_string VARCHAR(50))
BEGIN
	SET @sql = CONCAT('SELECT * FROM PRODUCT WHERE Name LIKE ''%', search_string, '%''');
	PREPARE stmt FROM @sql;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_GetProductTag(search_string VARCHAR(10))
BEGIN
	select *
    from TAG
    where ID = search_string;
END;
//
DELIMITER ;

