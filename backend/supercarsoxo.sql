-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 25 fév. 2024 à 21:57
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `supercarsoxo`
--

-- --------------------------------------------------------

--
-- Structure de la table `cars`
--

CREATE TABLE `cars` (
  `Car_ID` int(11) NOT NULL,
  `Car_Name` varchar(255) NOT NULL,
  `Car_Marque` varchar(255) NOT NULL,
  `Car_Matricule` varchar(255) NOT NULL,
  `Car_Color` varchar(255) NOT NULL,
  `Car_img` varchar(255) NOT NULL,
  `img1` varchar(255) NOT NULL,
  `img2` varchar(255) NOT NULL,
  `img3` varchar(255) NOT NULL,
  `Car_likes` int(11) NOT NULL,
  `Client_ID` int(11) NOT NULL,
  `Categorie_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `cars`
--

INSERT INTO `cars` (`Car_ID`, `Car_Name`, `Car_Marque`, `Car_Matricule`, `Car_Color`, `Car_img`, `img1`, `img2`, `img3`, `Car_likes`, `Client_ID`, `Categorie_ID`) VALUES
(1, 'Supra A90', 'Toyota', 'A-S 7988', 'Gris', 'supra_a90_gris.jpg', 'supra1.jpg', 'supra2.jpg', 'supra3.jpeg', 12, 1, 4),
(13, 'AMG GT 63', 'Mercedes', 'A 7989', 'Black Mate', 'gt63_blackmate.jpg', 'gt1.jpg', 'gt2.jpg', 'gt3.jpg', 17, 26, 2),
(14, 'RS6', 'Audi', 'S 33456', 'Black', 'rs61.jpg', 'rs62.jpg', 'rs63.jpg', 'rs43.jpg', 11, 25, 5),
(15, 'M4', 'BMW', 'B 55564', 'Black', 'bmw_m4.jpeg', 'bmw1.jpg', 'bmw2.jpg', 'bmw3.jpg', 17, 5, 1),
(17, 'GTR 2023', 'NISSAN', 'm 23654', 'Gris', 'nissan_gtr.jpg', 'nissangtr1.jpg', 'nissangtr2.jpg', 'nissangtr3.jpg', 10, 24, 3);

-- --------------------------------------------------------

--
-- Structure de la table `cars_categories`
--

CREATE TABLE `cars_categories` (
  `CarCategorie_ID` int(11) NOT NULL,
  `Car_ID` int(11) NOT NULL,
  `Categorie_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `Categorie_ID` int(11) NOT NULL,
  `Categorie_Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`Categorie_ID`, `Categorie_Name`) VALUES
(1, 'Sport'),
(2, 'Luxe'),
(3, 'Special'),
(4, 'Supercars'),
(5, 'Maserasss');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `Client_ID` int(11) NOT NULL,
  `Client_Name` varchar(255) NOT NULL,
  `Client_Surname` varchar(255) NOT NULL,
  `Client_Email` varchar(255) NOT NULL,
  `Client_Phone` varchar(255) NOT NULL,
  `Client_Password` varchar(255) NOT NULL,
  `Client_Pic` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`Client_ID`, `Client_Name`, `Client_Surname`, `Client_Email`, `Client_Phone`, `Client_Password`, `Client_Pic`) VALUES
(1, 'Bifenzine', 'Mohamed', 'okta@gmail.com', '0611121314', '123', ''),
(2, 'OkTa', 'Aymen', 'Aymen@gmail.com', '065478912', '111', ''),
(3, 'Koravi', 'Ravi', 'Koravi@gmail.com', '0611111145', '222', ''),
(4, 'alfardan', 'Hamdan', 'alfardan@gmail.com', '0612457896', '333', ''),
(5, 'lmanga', 'said', 'lmangasaid@gmail.com', '0631456987', '444', ''),
(24, 'Kawashima', 'Tokyo', 'ota@ot.com', '02136547', 'momento', 'tokyo.jpg'),
(25, 'ozatki', 'takami', 'oza@gmail.com', '06123456894', '123', 'takami.jpg'),
(26, 'mitsu', 'osaka', 'okami@gmail.com', '063214511', '123', 'osaka.jpg'),
(27, 'apo', 'opa', 'o@p.c', '1123211112322', '123', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`Car_ID`),
  ADD UNIQUE KEY `Client_ID` (`Client_ID`),
  ADD UNIQUE KEY `Categorie_ID` (`Categorie_ID`);

--
-- Index pour la table `cars_categories`
--
ALTER TABLE `cars_categories`
  ADD PRIMARY KEY (`CarCategorie_ID`),
  ADD UNIQUE KEY `Car_ID` (`Car_ID`),
  ADD UNIQUE KEY `Categorie_ID` (`Categorie_ID`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`Categorie_ID`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`Client_ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cars`
--
ALTER TABLE `cars`
  MODIFY `Car_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `cars_categories`
--
ALTER TABLE `cars_categories`
  MODIFY `CarCategorie_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `Categorie_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `Client_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `cars_ibfk_2` FOREIGN KEY (`Categorie_ID`) REFERENCES `categories` (`Categorie_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cars_ibfk_3` FOREIGN KEY (`Client_ID`) REFERENCES `client` (`Client_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
