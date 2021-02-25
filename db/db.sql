SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));

CREATE DATABASE IF NOT EXISTS BooksAPI;

USE BooksAPI;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users 
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(100),
    password VARCHAR(255),
    createdAt datetime DEFAULT NULL,
    updatedA datetime DEFAULT NULL
);

DROP TABLE IF EXISTS Categories;
CREATE TABLE Categories
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    categorieName VARCHAR(100),
    createdAt datetime DEFAULT NULL,
    updatedA datetime DEFAULT NULL  
);

DROP TABLE IF EXISTS Books;

CREATE TABLE Books  
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    bookName VARCHAR(50),
    auteur VARCHAR(50),
    categorieId INT,
    FOREIGN KEY (categorieId) REFERENCES Categories(id),
    createdAt datetime DEFAULT NULL,
    updatedA datetime DEFAULT NULL

);
DROP TABLE IF EXISTS Genres;

CREATE TABLE Genres 
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    genreName VARCHAR(100),
    createdAt datetime DEFAULT NULL,
    updatedA datetime DEFAULT NULL
);
DROP TABLE IF EXISTS BooksGenres;

CREATE TABLE BooksGenres  
( 
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    bookId INT,
    genreId INT, 
    FOREIGN KEY (bookId) REFERENCES Books(id),
    FOREIGN KEY (genreId) REFERENCES Genres(id),
    createdAt datetime DEFAULT NULL,
    updatedA datetime DEFAULT NULL
);
DROP TABLE IF EXISTS Bookings;

CREATE TABLE Bookings  
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    userId INT,
    bookId INT,
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (bookId) REFERENCES Books(id),
    createdAt datetime DEFAULT NULL,
    updatedA datetime DEFAULT NULL
);


INSERT INTO Users (`id`, `email`, `password`) VALUES 
(1,'Gwen@gmail.fr','azerty'),(2,'Yassin@gmail.fr','azerty'),(3,'Lorris@gmail.fr','azerty');

INSERT INTO Genres (`id`, `genreName` ) VALUES 
(1,'Polar'),(2,'Action'),(3,'Sience Fiction'),(4,'Tragédie'),(5,'Fantasique'),(6,'Historique'),(7,'Comedie'),(8,'Drame');

INSERT INTO Categories (`id`, `categorieName` ) VALUES 
(1,'Roman'),(2,'Essai'),(3,'Poésie'),(4,'Théâtral');

INSERT INTO Books (`id`, `bookName`,`auteur`,`categorieId` ) VALUES 
(1,'Silmarillion','Tolkien',1 ),(2,'les fourberies de scapin', 'Molière', 4),(3,'1984', 'George Orwell',1);

INSERT INTO BooksGenres (`id`, `bookId`,`genreId` ) VALUES (1,1,5), (2,1,6),(3,2,6),(4,2,7),(5,3,3),(6,3,6),(7,3,8)