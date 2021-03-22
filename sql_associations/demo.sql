-- Documentation: https://www.postgresql.org/docs/13/index.html
-- SELECT statement docs https://www.postgresql.org/docs/13/sql-select.html

-- SQL: Associations

-- Associations are relationships between tables of a database
-- To define/allow relationships we make use of a Foreign Key that point to the Primary Key of the associated records


-- Useful commands:

-- To connect to postgres use the command `psql` within terminal
-- While connected to postgres:
-- \l -> Lists all databases
-- \q -> exit postgres
-- \c <database_name> -> Connect to specific database
-- \i <path_to_sql_file> -> Run SQL file in connected database

-- Running a SQL file against a database
-- `psql -d <database_name> -f <path_to_sql_file>`



-- Querying Assocations
-- Find all the projects associated to the student with id = 2
-- SELECT * FROM projects WHERE student_id = 2;

-- Find all students & scores for course with id of 1;
-- SELECT * FROM enrolments WHERE course_id = 1;

-- JOINS
-- Use joins to combine tables together and merge all of their columns into a single table
-- Makes it easier to query associations

-- CROSS JOIN

-- Cross join students with projects;
-- SELECT * FROM students CROSS JOIN projects;

-- INNER JOIN
-- Is a CROSS JOIN with a filter

-- SELECT all students and projects they own ordered by the project name
-- SELECT students.id, students.first_name, projects.title, projects.student_id FROM students
--   INNER JOIN projects ON students.id = projects.student_id
--   ORDER BY projects.title;

-- select all students and projects ordred by student.id
-- SELECT 
--   students.id AS student_id, 
--   students.first_name AS first_name, 
--   projects.title, 
--   projects.student_id
--   FROM students
--   INNER JOIN projects ON students.id = projects.student_id
--   ORDER BY students.id;

-- MUTLIPLE TABLE JOIN
-- List all students that are enrolled in the course whose title contains 'hybrid matrix'

-- SELECT 
--   students.id,
--   first_name,
--   courses.title AS course_title,
--   enrolments.score
--   FROM students
--   INNER JOIN enrolments ON students.id = enrolments.student_id
--   INNER JOIN courses ON enrolments.course_id = courses.id
--   WHERE courses.title ILIKE '%hybrid matrix%';

-- SELECT
--   students.id,
--   students.first_name,
--   courses.title,
--   enrolments.score
--   FROM enrolments
--   INNER JOIN students ON students.id = enrolments.student_id
--   INNER JOIN courses ON courses.id = enrolments.course_id
--   WHERE courses.title ILIKE '%hybrid matrix%';


-- get all courses that have a stduent whose name begins with 'Re'
-- SELECT
--   courses.title,
--   students.first_name,
--   enrolments.score
--   FROM students
--   INNER JOIN enrolments ON students.id = enrolments.student_id
--   INNER JOIN courses ON courses.id = enrolments.course_id
--   WHERE students.first_name LIKE 'Re%';

-- LEFT JOIN / RIGHT JOIN
-- List all students and their projects without leaving students that don't have projects
-- SELECT
--   first_name,
--   projects.title AS project_title
--   FROM students
--   LEFT JOIN projects ON students.id = projects.student_id;

-- List all students who DO NOT have a project
-- SELECT
--   first_name,
--   projects.title AS project_title
--   FROM students
--   LEFT JOIN projects ON students.id = projects.student_id
--   WHERE projects.title IS NULL;

-- JOINS with GROUP BY

-- Getting the average score of all courses and their titles. Higher averages should be at the top

-- courses.title - course title
-- enrolments.score - scores
-- AVG(enrolments.score)

-- SELECT 
--   courses.title, 
--   AVG(enrolments.score) AS average_score
--   FROM courses
--   INNER JOIN enrolments ON courses.id = enrolments.course_id
--   GROUP BY courses.id
--   ORDER BY average_score DESC;

-- list courses ordered by last registration date
-- SELECT
--   MAX(enrolments.created_at) AS most_recent_enrolment,
--   courses.title
--   FROM enrolments
--   INNER JOIN courses ON courses.id = enrolments.course_id
--   GROUP BY courses.id
--   ORDER BY most_recent_enrolment DESC;

-- SUB QUERIES
-- ALL SQL queries will result in a table of results. You can make another SQL query on that results table.

-- List all courses with at least 5 enrolled students.

-- SELECT course_title, student_counts FROM ( -- <- Parent Query
--   -- Sub Query
--   SELECT 
--     courses.title AS course_title,
--     COUNT(enrolments.student_id) AS student_counts
--     FROM courses
--     INNER JOIN enrolments ON courses.id = enrolments.course_id
--     GROUP BY courses.title
--     ORDER BY student_counts DESC
-- ) AS course_with_counts -- Sub Query ends. You must alias a sub-query
-- WHERE student_counts >= 5;

-- Calculate the average score of all classes.
-- Show only classes with an avg of lower than 60

-- SELECT course_title, avg_score FROM
--   (SELECT
--     courses.title AS course_title,
--     AVG(enrolments.score) AS avg_score
--     FROM courses
--     INNER JOIN enrolments ON courses.id = enrolments.course_id
--     GROUP BY courses.title
--   ) AS courses_with_avg
--   WHERE avg_score < 60
--   ORDER BY avg_score DESC;


-- Constraints
-- Gives you control over data in your tables
-- If data does not meet these constraints an error will be returned and records are not inserted
-- Some constraints:
-- NOT NULL
-- UNIQUE
-- PRIMARY KEY
-- FOREIGN KEY

-- To add a constraint to an existing table:
-- ALTER TABLE <tablename> ALTER COLUMN <column name> SET <constraint name>;
-- When you try adding a constraint to a table all records are checked to see if they pass the constraint. If any do not pass an error is thrown and the constraint is not set.










