-- For Single Line Comments 
/*
This is multiple line comments
*/

/*

run brew install postgres
then run brew services start postgres
then create a database called your username createdb $(whoami)

*/

--  /l list all the database in psql
-- /c <db_name> to switch to to db_name
-- Restoring the database from backup
-- psql -d sql_lab < sql_lab.sql 

--sql_lab=# \dt 👈🏻 This lists all the tables in a database(sql_lab - the one to which we are connected)
-- sql_lab=# \d students 👈🏻  for details of table (students)

-- CREATE TABLE [table_name]([arguments])
CREATE TABLE "cars" (
    "id" SERIAL, /* Auto incrementing four-byte integer*/
    "make" VARCHAR(50), /* A charcter string with max 50 characteres length*/
    "model" VARCHAR(50),
    "doors" INTEGER, /* Whole number*/
    "description" TEXT /* A cahracter string with unlimited length */
);

-- ALTER TABLE
-- ALTER TABLE [table_name] [ACTION]

ALTER TABLE students ADD COLUMN age integer;

-- CRUD - Create Read Update Delete the data

-- Create
--  For Single Insert
INSERT INTO students 
    (first_name, last_name, email, phone_number)
    VALUES
    ('Tam', 'Kbeili', 'tam@codecore.ca', '778.994.8776'),

--  For Multiple Inserts
INSERT INTO students 
    (first_name, last_name, email, phone_number)
    VALUES
    ('Tam', 'Kbeili', 'tam@codecore.ca', '778.994.8776'),
    ('Sam', 'Kbeili', 'tam@codecore.ca', '778.994.8776'),
    ('Dan', 'Kbeili', 'tam@codecore.ca', '778.994.8776');

-- READ
SELECT * FROM students;
SELECT first_name, last_name, email ,phone_number FROM students;

-- WHERE
SELECT first_name, last_name FROM students WHERE id=1;


-- EXAMPLE

SELECT * FROM students WHERE id > 100;

-- EXERCISE 
SELECT * FROM students WHERE age > 40;

-- EXERCISE 
SELECT first_name FROM students WHERE registration_date >= current_date - 1000 ;


-- AND / OR 
-- EXAMPLE 
SELECT first_name, last_name FROM students WHERE id > 100 AND id < 200;

-- EXERCISE 

SELECT first_name , last_name FROM students WHERE age > 40 OR age < 20;

-- THREE VALUSE LOGIC 

--  Values can be in 3 different states true, false , null(no data exsist)
-- NULL is a value that doesnot exsist

SELECT first_name, last_name , age FROM students WHERE age < 20 OR age IS NULL;

-- LIKE and ILIKE

-- % is used as a wildcard

--  LIKE (case sensiive)

SELECT first_name, last_name FROM students WHERE first_name LIKE 'Jo%';

-- ILIKE (case insensitve)

SELECT first_name, last_name FROM students WHERE first_name ILIKE '%jo%';


-- EXERCISE

SELECT first_name, last_name FROM students WHERE first_name ILIKE '%nn%' OR last_name ILIKE '%nn%';


-- BETWEEN
-- EXAMPLE
SELECT age FROM students WHERE age BETWEEN 25 AND 35; 

-- EXERCISE
SELECT first_name, last_name , registration_date FROM students  WHERE registration_date BETWEEN current_date-1500  AND current_date - 1000;

-- ORDER BY (ASC / DESC)

-- Example 
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name;
--  multiple columns
SELECT first_name, last_name, age FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name, age;

-- Exercise

SELECT first_name, last_name, age FROM students WHERE age > 30 ORDER BY first_name, last_name;

-- LIMIT  
-- clause used to limit the data to the x rows
-- Must put it at the end of the query

SELECT first_name, last_name FROM students WHERE first_name ILIKE 'ke%' LIMIT 10;
-- OFFSET
-- EXAMPLE 
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'ke%' LIMIT 10 OFFSET 3;

SELECT first_name, last_name FROM students WHERE first_name ILIKE 'ke%' LIMIT 3 OFFSET 6;

-- AGGREGATE FUNCTIONS

-- COUNT
SELECT COUNT(*) FROM students;

-- EXERCISE

SELECT COUNT(*) FROM students WHERE age > 25;

-- AS 
SELECT COUNT(*) AS number_of_students FROM students WHERE age > 25;

-- SUM

SELECT SUM(age) FROM students ;
SELECT SUM(id) FROM students ;

-- AVG 

SELECT AVG(age) FROM students WHERE registration_date > '2017-01-01';


-- ROUND 

SELECT ROUND(AVG(age)) FROM students WHERE registration_date > '2017-01-01';

-- MAX and MIN

SELECT MAX(age) AS max_age , MIN(age) AS min_age, AVG(age) AS average_age, SUM(age) AS total_age FROM students;


SELECT COUNT(*) AS OCCURENCES, first_name FROM students GROUP BY first_name;


SELECT count(age), age FROM students GROUP BY age;
-- UPDATE
UPDATE students SET first_name='Tammam' WHERE id=501;


-- DELETE 

DELETE FROM students WHERE id=501;






-- BUMP

