-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-06-2023 a las 13:07:13
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cursosql`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellido1` varchar(50) NOT NULL,
  `Apellido2` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Login` varchar(20) NOT NULL,
  `Password` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`ID`, `Nombre`, `Apellido1`, `Apellido2`, `Email`, `Login`, `Password`) VALUES
(1, 'Antonio', 'Alvarez', 'Casero', 'antonio.al@yahoo.es', 'antonioal', 'admin123'),
(2, 'Alba', 'Perez', 'Sanz', 'alba.sanz@gmail.com', 'alba', '8765'),
(3, 'Álvaro', 'Díaz', 'Sanz', 'alvadia@yahoo.es', 'alvaro', '4311'),
(21, 'ana', 'muñoz', 'macias', 'a.munoz@hotmail.com', 'amunoz', 'xtio'),
(22, 'Paloma', 'Sanz', 'Sanz', 'paloma.sanz.alvarez@gmail.com', 'p.o', 'rt5t'),
(23, 'Fernanda', 'Villa ', ' De Cañá', 'fer@hotmail.com', 'fervil', 'sder'),
(24, 'Tomás', 'Gentil', 'Fernández', 'tomas.gen@gmil.com', 'tomasgen', 'tomi'),
(26, 'Laura', 'Cantillo', 'Sanz', 'laura@gmail.com', 'laura', 'sdfgh'),
(27, 'pedro', 'sanz', 'augusto', 'pedro.SA345@gmail.com', 'pedro.sanz', '123456'),
(29, 'Diana', 'Zulema', 'Sanchez', 'tomas.gen@gmil.com', 'zulema', 'hyhyhyhy'),
(32, 'Manolo', 'Sancho', 'Vila', 'manolo.sancho@gmail.com', 'manolo.sancho', 'manu123'),
(33, 'Anabel', 'Carreño', 'Bernardo', 'ana.carr@hotmail.com', 'ana.car', 'pol0987'),
(34, 'Aníbal', 'Fernández', 'Gallego', 'afergal@correo.es', 'anib.fer.ga', 'contar34'),
(35, 'Sara', 'Lanchas', 'Gago', 'saralan@outlook.es', 'sara', '7u8i9'),
(36, 'yyuuyu', 'yuyu', 'yuyu', 'yuyu@test.com', 'yuyu', '12345678'),
(37, 'Fulanito', 'Tal', 'Tan', 'funalito@yahoo.es', 'fulanito', '5678'),
(38, 'Gema', 'Perez', 'Guerrero', 'gema@yahoo.es', 'gema', 'polki'),
(39, 'fdfdf', 'dfdf', 'dfdf', 'dfdf@yah.com', 'dfdf', 'dfdf'),
(40, 'Narciso', 'Gallego', 'Guerrero', 'narci@test.com', 'narciso', '1235'),
(41, 'Jazmin', 'Toledano', 'Guerrero', 'jazmin@gmail.com', 'jaz.to', 'olikujyh'),
(42, 'Kiko', 'Alvarez', 'Cano', 'kiko@gmail.com', 'kiko', '0o98i7u6'),
(43, 'Pablo', 'Milan', 'Cano', 'pablete@gmail.com', 'pablo', 'ksjdksks'),
(44, 'Joaquin', 'Rosas', 'Pereira', 'joa.rosas@correo.es', 'joaquin', '4567'),
(45, 'Rosaura', 'Gallego', 'Pozas', 'rosaura@correo.es', 'rosaura', '7890'),
(46, 'Andrés', 'Ferreras', 'Madrid', 'andres@yahoo.es', 'andres.fer', '56tghy'),
(47, 'edgar', 'sanz', 'peres', 'edg@yahoo.es', 'edgar', '54545454'),
(48, 'Andrea', 'Guerrero', 'Shulca', 'andrea@hotmail.com', 'nadrea', '45466'),
(49, 'Paloma', 'Sanz', 'yyuu', 'paloma@yerer.com', 'ererer', 'erer'),
(50, 'Paloma', 'Sanz', 'yyuu', 'kk@yerer.com', 'ererer', 'erer'),
(51, 'Paloma', 'yuyuyu', 'yyuu', 'jhjhjh@yerer.com', 'ererer', 'erer'),
(52, 'ooo', 'opop', 'opop', 'opop@yahoo.es', 'yyuyu', '6676'),
(53, 'djfdj', 'dfdfdfd', 'dfdf', 'sfsdff@gmail.com', 'erer', '45667'),
(54, 'djfdj', 'dfdfdfd', 'dfdf', 'popop@gmail.com', 'erer', 'kjkjkkjk'),
(55, 'djfdj', 'dfdfdfd', 'dfdf', 'pppp@gmail.com', 'erer', 'kjkjkkjk'),
(56, 'djfdj', 'dfdfdfd', 'dfdf', 'dddp@gmail.com', 'erer', 'fffff'),
(57, 'ewewe', 'wewewe', 'weewe', 'eererer@yahoo.es', 'sdssd', 'dddddd'),
(58, 'fdy', 'dff', 'tytytyty', ' pppp@gmail.com', 'tyyy', 'yyyyy'),
(59, 'ererrer', 'ererer', 'ererer', 'dfmkmdkf@test.com', 'reerer', 'ererer'),
(60, 'Julián', 'Gómez', 'Lanchas', 'jugo@test.com', 'julian', '12367'),
(61, 'marcos', 'ruano', 'guerrero', 'marcos@gmail.com', 'marc', '1234'),
(62, 'aramando', 'jaleo', 'perez', 'arja@yahoo.es', 'arman.jal', 'rftgyh'),
(63, 'Aurelio', 'Galvez', 'Saez', 'ausa@gmail.com', 'aurelio', 'nmj78'),
(64, 'Juan', 'Perez', 'Perez', 'juan@test.com', 'juan', 'wsedrf'),
(65, 'Emilo', 'Garcia', 'Test', 'emilio@hotmail.com', 'emilio', '5tghy6');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
