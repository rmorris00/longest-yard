-- -- DROP Database IF EXISTS "LongestYardDB";

-- CREATE DATABASE "LongestYardDB"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- Create Table Player (
-- 	playerID serial unique primary key,
-- 	position varchar(5) Not Null,
-- 	firstName varchar (50) Not Null,
-- 	lastName varchar (75) Not Null,
-- 	av smallint Not Null,
-- 	playerpic varchar (255),
--  mugshotpic varchar (255),
-- 	apiDataAvailable boolean default true,
--  price smallint default 0
-- );



-- insert into player (position,firstName,lastName,av)
-- values
-- ('QB','Ben','Roethlisberger',185),
-- ('QB','Johnny','Manziel',5),
-- ('QB','Chad','Kelly',0),
-- ('QB','Steve','McNair',126),
-- ('QB','Jake','Plummer',92),
-- ('QB','Daunte','Culpepper',97),
-- ('QB','Brian','Griese',61),
-- ('QB','Michael','Vick',113),
-- ('RB','OJ','Simpson',116),
-- ('RB','Jim','Brown',122),
-- ('RB','Leonard','Fournette',11),
-- ('RB','Aaron','Jones',9),
-- ('RB','LeVeon','Bell', 60),
-- ('RB','LeGarrette','Blount', 46),
-- ('RB','Ray','Rice',70),
-- ('RB','Marshawn','Lynch',90),
-- ('RB','Adrian','Peterson',115),
-- ('RB','Ricky','Williams', 90),
-- ('WR','Demaryius','Thomas',78),
-- ('WR','Robby','Anderson', 17),
-- ('WR,','Josh','Gordon', 28),
-- ('WR','Chad','Johnson',104),
-- ('WR','Dez','Bryant',71),
-- ('WR','Julian','Edelman',59),
-- ('WR','Hines','Ward',118),
-- ('WR','Donte','Stallworth',45),
-- ('WR','Plaxico','Burress',83),
-- ('WR','Brandon','Marshall',105),
-- ('WR','Randy','Moss', 161),
-- ('WR','Andre','Rison', 99),
-- ('TE','Aaron','Hernandez',23),
-- ('TE','Kellen','Winslow Jr.', 43),
-- ('TE','Fred','Davis',15),
-- ('K','Josh','Brown',46),
-- ('K','Matt','Prater',34),
-- ('K','Sebastian','Janikowski', 60),
-- ('K','Jeff','Reed',25);

-- update player 
--   set apidataavailable = false
--   where playerID in (1,9,10);

-- ALTER TABLE player add careerstat1 VARCHAR(100);
-- ALTER TABLE player add careerstat2 VARCHAR(100);
-- ALTER TABLE player add careerstat3 VARCHAR(100);
-- ALTER TABLE player add careerstat4 VARCHAR(100);
-- ALTER TABLE player add careerstat5 VARCHAR(100);
-- ALTER TABLE player add careerblurb VARCHAR(500);

-- select * from player;