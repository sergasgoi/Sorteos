-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 09-02-2023 a las 15:45:07
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sorteo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

DROP TABLE IF EXISTS `mensajes`;
CREATE TABLE IF NOT EXISTS `mensajes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sorteo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `participante` int NOT NULL,
  `remitente` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `mail` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `mensaje` varchar(600) COLLATE utf8mb4_general_ci NOT NULL,
  `id_usuario3` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`id`, `sorteo`, `participante`, `remitente`, `mail`, `mensaje`, `id_usuario3`) VALUES
(1, 'navidad', 5, 'pedro', 'pedito@gmail.com', 'Me gustaria comprar en numero, con mercadopago si podria mandarme el link de pago.', 3),
(7, 'año nuevo', 10, 'norma', 'norma@asda.com', 'Quiero comprar el numero 10', 3),
(6, 'rifa2', 10, 'gaston', 'sergasgoi@hotma', 'Mensaje', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nsorteos`
--

DROP TABLE IF EXISTS `nsorteos`;
CREATE TABLE IF NOT EXISTS `nsorteos` (
  `id_nsort` int NOT NULL AUTO_INCREMENT,
  `participante` int NOT NULL,
  `condicion` tinyint(1) NOT NULL,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `apellido` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `telefono` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `sorteo` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_usuario2` int NOT NULL,
  PRIMARY KEY (`id_nsort`),
  KEY `sorteo` (`sorteo`),
  KEY `id_usuario` (`id_usuario2`)
) ENGINE=MyISAM AUTO_INCREMENT=17135 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nsorteos`
--

INSERT INTO `nsorteos` (`id_nsort`, `participante`, `condicion`, `nombre`, `apellido`, `telefono`, `sorteo`, `id_usuario2`) VALUES
(16915, 1, 1, 'gaston', 'goi', '123456', 'navidad', 3),
(16916, 2, 0, '', '', '', 'navidad', 3),
(16917, 3, 0, '', '', '', 'navidad', 3),
(16943, 29, 0, '', '', '', 'navidad', 3),
(16944, 30, 0, '', '', '', 'navidad', 3),
(16945, 1, 0, '', '', '', 'año nuevo', 3),
(16946, 2, 0, '', '', '', 'año nuevo', 3),
(16947, 3, 0, '', '', '', 'año nuevo', 3),
(16948, 4, 0, '', '', '', 'año nuevo', 3),
(16949, 5, 1, 'norma', 'de leon', '213456', 'año nuevo', 3),
(16950, 6, 0, '', '', '', 'año nuevo', 3),
(16951, 7, 0, '', '', '', 'año nuevo', 3),
(16952, 8, 0, '', '', '', 'año nuevo', 3),
(16953, 9, 0, '', '', '', 'año nuevo', 3),
(16954, 10, 0, '', '', '', 'año nuevo', 3),
(16955, 11, 0, '', '', '', 'año nuevo', 3),
(16956, 12, 0, '', '', '', 'año nuevo', 3),
(16957, 13, 0, '', '', '', 'año nuevo', 3),
(16958, 14, 0, '', '', '', 'año nuevo', 3),
(16959, 15, 0, '', '', '', 'año nuevo', 3),
(16960, 16, 0, '', '', '', 'año nuevo', 3),
(16961, 17, 0, '', '', '', 'año nuevo', 3),
(16962, 18, 0, '', '', '', 'año nuevo', 3),
(16963, 19, 0, '', '', '', 'año nuevo', 3),
(16964, 20, 0, '', '', '', 'año nuevo', 3),
(16965, 1, 0, '', '', '', 'rifa1', 1),
(16966, 2, 0, '', '', '', 'rifa1', 1),
(16967, 3, 0, '', '', '', 'rifa1', 1),
(16968, 4, 0, '', '', '', 'rifa1', 1),
(16969, 5, 0, '', '', '', 'rifa1', 1),
(16970, 6, 0, '', '', '', 'rifa1', 1),
(16971, 7, 0, '', '', '', 'rifa1', 1),
(16972, 8, 0, '', '', '', 'rifa1', 1),
(16973, 9, 0, '', '', '', 'rifa1', 1),
(16974, 10, 0, '', '', '', 'rifa1', 1),
(16975, 11, 0, '', '', '', 'rifa1', 1),
(16976, 12, 0, '', '', '', 'rifa1', 1),
(16977, 13, 0, '', '', '', 'rifa1', 1),
(16978, 14, 0, '', '', '', 'rifa1', 1),
(16979, 15, 0, '', '', '', 'rifa1', 1),
(16980, 16, 0, '', '', '', 'rifa1', 1),
(16981, 17, 0, '', '', '', 'rifa1', 1),
(16982, 18, 0, '', '', '', 'rifa1', 1),
(16983, 19, 0, '', '', '', 'rifa1', 1),
(16984, 20, 0, '', '', '', 'rifa1', 1),
(16985, 21, 0, '', '', '', 'rifa1', 1),
(16986, 22, 0, '', '', '', 'rifa1', 1),
(16987, 23, 0, '', '', '', 'rifa1', 1),
(16988, 24, 0, '', '', '', 'rifa1', 1),
(16989, 25, 0, '', '', '', 'rifa1', 1),
(16990, 26, 0, '', '', '', 'rifa1', 1),
(16991, 27, 0, '', '', '', 'rifa1', 1),
(16992, 28, 0, '', '', '', 'rifa1', 1),
(16993, 29, 0, '', '', '', 'rifa1', 1),
(16994, 30, 0, '', '', '', 'rifa1', 1),
(16995, 1, 0, '', '', '', 'rifa2', 1),
(16996, 2, 0, '', '', '', 'rifa2', 1),
(16997, 3, 0, '', '', '', 'rifa2', 1),
(16998, 4, 0, '', '', '', 'rifa2', 1),
(16999, 5, 0, '', '', '', 'rifa2', 1),
(17000, 6, 0, '', '', '', 'rifa2', 1),
(17001, 7, 0, '', '', '', 'rifa2', 1),
(17002, 8, 0, '', '', '', 'rifa2', 1),
(17003, 9, 0, '', '', '', 'rifa2', 1),
(17004, 10, 0, '', '', '', 'rifa2', 1),
(16937, 23, 0, '', '', '', 'navidad', 3),
(16936, 22, 0, '', '', '', 'navidad', 3),
(16935, 21, 0, '', '', '', 'navidad', 3),
(16934, 20, 0, '', '', '', 'navidad', 3),
(16918, 4, 0, '', '', '', 'navidad', 3),
(16919, 5, 0, '', '', '', 'navidad', 3),
(16920, 6, 0, '', '', '', 'navidad', 3),
(16921, 7, 0, '', '', '', 'navidad', 3),
(16922, 8, 0, '', '', '', 'navidad', 3),
(16923, 9, 0, '', '', '', 'navidad', 3),
(16924, 10, 0, '', '', '', 'navidad', 3),
(16925, 11, 0, '', '', '', 'navidad', 3),
(16926, 12, 0, '', '', '', 'navidad', 3),
(16927, 13, 0, '', '', '', 'navidad', 3),
(16928, 14, 0, '', '', '', 'navidad', 3),
(16929, 15, 0, '', '', '', 'navidad', 3),
(16930, 16, 0, '', '', '', 'navidad', 3),
(16931, 17, 0, '', '', '', 'navidad', 3),
(16932, 18, 0, '', '', '', 'navidad', 3),
(16933, 19, 0, '', '', '', 'navidad', 3),
(16942, 28, 0, '', '', '', 'navidad', 3),
(16941, 27, 0, '', '', '', 'navidad', 3),
(16940, 26, 0, '', '', '', 'navidad', 3),
(16939, 25, 0, '', '', '', 'navidad', 3),
(16938, 24, 0, '', '', '', 'navidad', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sorteos`
--

DROP TABLE IF EXISTS `sorteos`;
CREATE TABLE IF NOT EXISTS `sorteos` (
  `id_sort` int NOT NULL AUTO_INCREMENT,
  `sorteo` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_usuario` int NOT NULL,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_sort`),
  KEY `id_usuario` (`id_usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sorteos`
--

INSERT INTO `sorteos` (`id_sort`, `sorteo`, `id_usuario`, `usuario`) VALUES
(91, 'año nuevo', 3, 'gaston'),
(92, 'rifa1', 1, 'sergio'),
(93, 'rifa2', 1, 'sergio'),
(90, 'navidad', 3, 'gaston');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'sergio', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'gaston', '81dc9bdb52d04dc20036dbd8313ed055'),
(17, 'flavia', 'e10adc3949ba59abbe56e057f20f883e');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
