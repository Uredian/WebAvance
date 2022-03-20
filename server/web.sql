-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : Dim 20 mars 2022 à 17:34
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `web`
--

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

DROP TABLE IF EXISTS `commande`;
CREATE TABLE IF NOT EXISTS `commande` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Utilisateur` int(11) DEFAULT NULL,
  `ListeProduits` json DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

DROP TABLE IF EXISTS `produit`;
CREATE TABLE IF NOT EXISTS `produit` (
  `Reference` int(11) NOT NULL AUTO_INCREMENT,
  `Titre` varchar(155) NOT NULL,
  `Description` text NOT NULL,
  `Prix` int(11) NOT NULL,
  `Quantite` int(11) NOT NULL,
  `Image` text,
  PRIMARY KEY (`Reference`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `produit`
--

INSERT INTO `produit` (`Reference`, `Titre`, `Description`, `Prix`, `Quantite`, `Image`) VALUES
(123, 'Pizza 4 fromages', 'Mozzarella, chèvre, parmesan, camembert', 23, 5, 'https://i0.wp.com/www.piccolericette.net/piccolericette/wp-content/uploads/2017/06/3234_Pizza.jpg?resize=895%2C616&ssl=1'),
(124, 'Pizza Carnivore', 'Pizza boeuf, poulet, mergez', 12, 7, 'https://www.quezalim.com/2226-large_default/pizza-la-carnivore.jpg'),
(125, 'Pizza Végétarienne', 'Champignons, crème, gruyère', 8, 10, 'https://www.macuisinesante.com/wp-content/uploads/2017/05/pizza_champignon2.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `Id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(155) NOT NULL,
  `Prenom` varchar(155) NOT NULL,
  `Email` varchar(155) DEFAULT NULL,
  `Adresse_numero` int(11) NOT NULL,
  `Adresse_rue` varchar(155) NOT NULL,
  `Ville` varchar(155) NOT NULL,
  `Code_postal` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
