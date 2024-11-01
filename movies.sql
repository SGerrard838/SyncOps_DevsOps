-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2023 at 01:51 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `netflix`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `name`, `category`, `link`, `createdAt`, `updatedAt`) VALUES
(1, 'The Road Trick', 'popular', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true', '2023-01-26 17:58:01', '2023-01-26 17:58:01'),
(2, 'Wynonna Earp', 'popular', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true', '2023-01-27 13:01:15', '2023-01-27 13:01:15'),
(3, 'Club de Cuervos The Ballad of Hugo Sanchez', 'popular', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true', '2023-01-27 13:01:15', '2023-01-27 13:01:15'),
(4, 'Grey\'s Anatomy', 'popular', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true', '2023-01-27 13:01:15', '2023-01-27 13:01:15'),
(5, 'Step Up the Streets 2', 'popular', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true', '2023-01-27 13:01:15', '2023-01-27 13:01:15'),
(6, 'Liquid Science', 'popular', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true', '2023-01-27 13:01:15', '2023-01-27 13:01:15'),
(7, '13 Reasons Why', 'popular', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true', '2023-01-27 13:01:15', '2023-01-27 13:01:15'),
(8, 'The Staircase', 'popular', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true', '2023-01-27 13:01:15', '2023-01-27 13:01:15'),
(9, 'The Vietnam War', 'popular', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true', '2023-01-27 13:01:15', '2023-01-27 13:01:15'),
(10, 'The Covenant', 'popular', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true', '2023-01-27 13:01:15', '2023-01-27 13:01:15'),
(11, 'Marcella', 'popular', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p11.PNG?raw=true', '2023-01-27 13:01:15', '2023-01-27 13:01:15'),
(12, 'Riverdale', 'popular', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p12.PNG?raw=true', '2023-01-27 13:01:15', '2023-01-27 13:01:15'),
(13, 'Luke Cage', 'trend', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t1.PNG?raw=true', '2023-01-27 13:30:13', '2023-01-27 13:30:13'),
(14, 'The Ranch', 'trend', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t2.PNG?raw=true', '2023-01-27 13:30:13', '2023-01-27 13:30:13'),
(15, 'Step Up The Streets 2', 'trend', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true', '2023-01-27 13:30:13', '2023-01-27 13:30:13'),
(16, 'Club de Cuervos The Ballad of Hugo Sanchez', 'trend', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t4.PNG?raw=true', '2023-01-27 13:30:13', '2023-01-27 13:30:13'),
(17, 'The Kissing Booth', 'trend', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t5.PNG?raw=true', '2023-01-27 13:30:13', '2023-01-27 13:30:13'),
(18, 'The Night Shift', 'trend', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true', '2023-01-27 13:30:13', '2023-01-27 13:30:13'),
(19, 'Hawaii Five-O', 'tvshow', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv1.PNG?raw=true', '2023-01-27 13:34:55', '2023-01-27 13:34:55'),
(20, 'Luke Cage', 'tvshow', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv2.PNG?raw=true', '2023-01-27 13:34:55', '2023-01-27 13:34:55'),
(21, 'The Flash', 'tvshow', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv3.PNG?raw=true', '2023-01-27 13:34:55', '2023-01-27 13:34:55'),
(22, 'Black Lightning', 'tvshow', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv4.PNG?raw=true', '2023-01-27 13:34:55', '2023-01-27 13:34:55'),
(23, 'New Girl\r\n', 'tvshow', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv5.PNG?raw=true', '2023-01-27 13:34:55', '2023-01-27 13:34:55'),
(24, 'OC\'s Legends of Tomorrow', 'tvshow', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv6.PNG?raw=true', '2023-01-27 13:34:55', '2023-01-27 13:34:55'),
(25, 'Agents of S.H.I.E.L.D.', 'tvshow', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv7.PNG?raw=true', '2023-01-27 13:34:55', '2023-01-27 13:34:55'),
(26, 'Marlon', 'tvshow', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv8.PNG?raw=true', '2023-01-27 13:34:55', '2023-01-27 13:34:55'),
(27, 'Cooking On High', 'tvshow', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv9.PNG?raw=true', '2023-01-27 13:34:55', '2023-01-27 13:34:55'),
(28, 'Queer Eye More Than a Makeover', 'tvshow', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv10.PNG?raw=true', '2023-01-27 13:34:55', '2023-01-27 13:34:55'),
(29, 'Shooter', 'tvshow', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true', '2023-01-27 13:34:55', '2023-01-27 13:34:55'),
(30, 'Jessica Jones', 'tvshow', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv12.PNG?raw=true', '2023-01-27 13:34:55', '2023-01-27 13:34:55'),
(31, 'Wanted', 'action', 'https://raw.githubusercontent.com/carlosavilae/Netflix-Clone/master/img/m1.PNG', '2023-01-27 15:49:52', '2023-01-27 15:49:52'),
(32, 'The Bourne Ultimatum', 'action', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true', '2023-01-27 15:49:52', '2023-01-27 15:49:52'),
(33, 'Guardians Of The Galaxy Vol.2', 'action', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m3.PNG?raw=true', '2023-01-27 15:49:52', '2023-01-27 15:49:52'),
(34, 'National Treasure', 'action', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m4.PNG?raw=true', '2023-01-27 15:49:52', '2023-01-27 15:49:52'),
(35, 'Bad Boys', 'action', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m5.PNG?raw=true', '2023-01-27 15:49:52', '2023-01-27 15:49:52'),
(36, 'Bright', 'action', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m6.PNG?raw=true', '2023-01-27 15:49:52', '2023-01-27 15:49:52'),
(37, 'Cooking On High', 'original', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true', '2023-01-27 15:55:31', '2023-01-27 15:55:31'),
(38, 'Queer Eye More Than a Makeover', 'original', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true', '2023-01-27 15:55:31', '2023-01-27 15:55:31'),
(39, 'Jessica Jones', 'original', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true', '2023-01-27 15:55:31', '2023-01-27 15:55:31'),
(40, 'Brain On Fire', 'original', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o4.PNG?raw=true', '2023-01-27 15:55:31', '2023-01-27 15:55:31'),
(41, 'The Kissing Booth', 'original', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o5.PNG?raw=true', '2023-01-27 15:55:31', '2023-01-27 15:55:31'),
(42, 'Arrested Development', 'original', 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o6.PNG?raw=true', '2023-01-27 15:55:31', '2023-01-27 15:55:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
