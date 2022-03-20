-- Adminer 4.8.1 MySQL 8.0.28-0ubuntu0.20.04.3 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `Commande`;
CREATE TABLE `Commande` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Utilisateur` int DEFAULT NULL,
  `ListeProduits` json DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Commande` (`Id`, `Utilisateur`, `ListeProduits`) VALUES
(3,	5,	'[]'),
(4,	4,	'[]'),
(13,	9,	'[]'),
(14,	9,	'[]'),
(21,	9,	'[]'),
(22,	9,	'[]'),
(23,	10,	'[]'),
(24,	12,	NULL);

DROP TABLE IF EXISTS `Produit`;
CREATE TABLE `Produit` (
  `Reference` int NOT NULL AUTO_INCREMENT,
  `Titre` varchar(155) NOT NULL,
  `Description` text NOT NULL,
  `Prix` int NOT NULL,
  `Quantite` int NOT NULL,
  `Image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`Reference`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Produit` (`Reference`, `Titre`, `Description`, `Prix`, `Quantite`, `Image`) VALUES
(123,	'Pizza',	'Pizza 4 fromages',	23,	6,	'https://i0.wp.com/www.piccolericette.net/piccolericette/wp-content/uploads/2017/06/3234_Pizza.jpg?resize=895%2C616&ssl=1');

DROP TABLE IF EXISTS `Utilisateur`;
CREATE TABLE `Utilisateur` (
  `Id` tinyint NOT NULL AUTO_INCREMENT,
  `Nom` varchar(155) NOT NULL,
  `Prenom` varchar(155) NOT NULL,
  `Email` varchar(155) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Adresse_numero` int NOT NULL,
  `Adresse_rue` varchar(155) NOT NULL,
  `Ville` varchar(155) NOT NULL,
  `Code_postal` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- 2022-03-16 07:41:03
