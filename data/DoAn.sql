create database test;
use test;

create table PRODUCT(
  ID        varchar(50)   ,
  Name      varchar(50)   ,
  Info      varchar(100)  ,
  Price     int           ,
  primary key (ID)
);

create table RECEIPT(
  ID        varchar(50)   ,
  PDate     date          ,
  Paid      int           ,
  Customer  varchar(50)   ,
  Status    bit           ,
  Mail      varchar(50)   ,
  primary key (ID)
);

create table BRAND(
  ID        varchar(50)   ,
  Name      varchar(50)   ,
  Info      varchar(100)  ,
  BDate     date          ,
  primary key (ID)
);

create table TAG(
  ID      varchar(50)     ,
  Name    varchar(50)     ,
  primary key (ID)
);

create table COMMENT(
  ID        varchar(50)   ,
  ProductID varchar(50)   ,
  Content   varchar(50)   ,
  Rating    float         ,
  Time      datetime      ,
  primary key (ID)
);

create table RECEIPT_DETAIL(
  ReceiptID varchar(50)   ,
  ProductID varchar(50)   ,
  Amount    int           ,
  primary key (ReceiptID, ProductID)
);

create table PRODUCT_BRAND(
  ProductID varchar(50)   ,
  BrandID   varchar(50)   ,
  primary key (ProductID, BrandID)
);

create table PRODUCT_TAG(
  ProductID varchar(50)     ,
  TagID     varchar(50)     ,
  primary key (ProductID, TagID)
);

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




DELIMITER //

CREATE PROCEDURE sp_Get_product_by_tag(tag VARCHAR(50))
BEGIN
  SELECT * 
  FROM PRODUCT a 
  INNER JOIN PRODUCT_TAG b ON a.ID = b.ProductID
  INNER JOIN TAG c ON c.ID = b.TagID
  WHERE c.Name = tag;
END;

CREATE
//

DELIMITER ;

