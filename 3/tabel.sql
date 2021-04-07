CREATE DATABASE TestDatabase;

USE TestDatabase;

CREATE TABLE TestTable(
	Id int  not null primary key,
	First_Name Varchar(20) not null,
	Last_Name Varchar(20),
	City Varchar(20),
	Country Varchar(20)
	);

ALTER TABLE TestTable 
ADD Phone_Number int
AFTER Last_Name;

INSERT INTO TestTable values 
	(1, "John", "Snow", 12423431 ,  "South", "Stark" ),
	(2, "Denerys", "Targerian", 131412312,  "West", "Westeros"),
	(3, "Dory", "Fish", 13414123 , "Atlantis", "Ocean"),
	(4, "Arthur", "Morgan", 13413113, "Blackwater", "US"),
	(5, "Johnny", "Silverhand", 14131234, "Night City", "Japan");
    
SELECT * FROM TestTable;