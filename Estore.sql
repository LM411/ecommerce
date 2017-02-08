-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2015 at 11:58 AM
-- Server version: 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `Estore`
--

-- --------------------------------------------------------

--
-- Table structure for table `item pricing`
--

CREATE TABLE IF NOT EXISTS `Item_pricing` (
  `inventory_ID` int(8) NOT NULL,
  `cost_price` decimal(7,2) NOT NULL,
  `current_price` decimal(7,2) NOT NULL,
  `image_Dir` varchar(60) NOT NULL,
  `number_in_stock` int(8) NOT NULL,
  PRIMARY KEY (`inventory_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--
-- Table structure for table `item pricing history`\

CREATE TABLE IF NOT EXISTS `Item_pricing_history` (
  `inventory_ID` int(8) NOT NULL,
  `Date_priced` Date NOT NULL,
  `cost_price` decimal(7,2) NOT NULL,
  `markup_percentage` decimal(3,2) NOT NULL,
   `markup_fixed-pice` decimal(7,2) NOT NULL,
    `price` decimal(7,2) NOT NULL,
   `Priced_by` int(8) NOT NULL,
  PRIMARY KEY (`inventory_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `airtime`
--

CREATE TABLE IF NOT EXISTS `Shipping_Type` (
  `Type_of_shipping` varchar(20) NOT NULL,
  `Days_of_dilivery` int(5) NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `Delivery_type` varchar(60) NOT NULL,
  PRIMARY KEY (`Type_of_shipping`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `airtime`
--


-- --------------------------------------------------------

--
-- Table structure for table `mechandise`
--

CREATE TABLE IF NOT EXISTS `Credit_Card_Details` (
  `Credit_card_number` int(11) NOT NULL,
  `Credit_user_name` varchar(255) NOT NULL,
  `Card_Type` varchar(255) NOT NULL,
  `CVV_number` int(11) NOT NULL,
  `Expiry` Date NOT NULL,
    `UserID` varchar(30) NOT NULL,
  FOREIGN KEY(UserID) REFERENCES Customer(Username) ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY (`Credit_user_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `mechandise`
--



-- --------------------------------------------------------

--
-- Table structure for table `phones`
--

CREATE TABLE IF NOT EXISTS `Item_Details` (
  `inventory_ID` int(11) NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) NOT NULL,
  `item_description` varchar(255) NOT NULL,
  `serial_num` varchar(255) NOT NULL,
  `part_num` varchar(255) NOT NULL,
  
  `image_Dir` varchar(60) NOT NULL,
  `re_order_level` int(13) NOT NULL,
  `suplier_ID` int(13) NOT NULL,
  PRIMARY KEY (`inventory_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `phones`
--


-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `Customer` (
	
  `F_Name` varchar(20) NOT NULL,
  `L_Name` varchar(30) NOT NULL,
  `Password` varchar(32) NOT NULL,
  `City` varchar(30) NOT NULL,
  `PhoneN` int(13) NOT NULL,
  `Username` varchar(30) NOT NULL,
  `Adress` varchar(20) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Zip` int(13) NOT NULL,
  PRIMARY KEY (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
