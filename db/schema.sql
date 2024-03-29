CREATE DATABASE climafit_db;

USE climafit_db;

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    CHECK (LENGTH(password) >= 8)
);

CREATE TABLE caloriedata (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    calories INT NOT NULL DEFAULT 0,
    userId INT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES user(id)
);

CREATE TABLE workouts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATETIME NOT NULL,
    type VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    userId INT,
    FOREIGN KEY (userId) REFERENCES user(id)
);