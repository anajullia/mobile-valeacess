-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para valeacess
CREATE DATABASE IF NOT EXISTS `valeacess` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `valeacess`;

-- Copiando estrutura para tabela valeacess.avaliacao
CREATE TABLE IF NOT EXISTS `avaliacao` (
  `avalia_visual` int(1) DEFAULT NULL,
  `avalia_fisica` int(1) DEFAULT NULL,
  `avalia_auditiva` int(1) DEFAULT NULL,
  `avalia_id` int(11) NOT NULL AUTO_INCREMENT,
  `feedback` text DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `comercio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`avalia_id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `comercio_id` (`comercio_id`),
  CONSTRAINT `comercio_id` FOREIGN KEY (`comercio_id`) REFERENCES `comercio` (`comercio_id`),
  CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela valeacess.avaliacao: ~17 rows (aproximadamente)
/*!40000 ALTER TABLE `avaliacao` DISABLE KEYS */;
INSERT INTO `avaliacao` (`avalia_visual`, `avalia_fisica`, `avalia_auditiva`, `avalia_id`, `feedback`, `usuario_id`, `comercio_id`) VALUES
	(1, 5, 4, 3, 'Achei gostoso.', 2, 5),
	(3, 5, 5, 5, 'Legal. Quando fui, faltou corrimão.', 6, 9),
	(4, 5, 5, 7, 'a', 2, 10),
	(3, 5, 3, 10, 'b', 2, 11),
	(1, 1, 1, 30, 'Bom demais!', 2, 5),
	(5, 5, 5, 31, 'Bom', 6, 15),
	(5, 5, 5, 33, 'Preços ótimos, portas adequadas.', 2, 15),
	(5, 4, 5, 34, 'Adorei! Comida boa, atendimento rápido e EM LIBRAS! O problema é que no tinham rampa... Mas estavam passando por reformas.', 2, 5),
	(5, 5, 5, 35, 'Gostoso', 2, 5);
/*!40000 ALTER TABLE `avaliacao` ENABLE KEYS */;

-- Copiando estrutura para tabela valeacess.comercio
CREATE TABLE IF NOT EXISTS `comercio` (
  `cnpj` varchar(18) DEFAULT NULL,
  `comercio_id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) DEFAULT NULL,
  `cidade` varchar(250) DEFAULT NULL,
  `rua` varchar(250) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `categoria` varchar(250) DEFAULT NULL,
  `img` varchar(250) DEFAULT NULL,
  `senha` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`comercio_id`),
  UNIQUE KEY `cnpj` (`cnpj`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela valeacess.comercio: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `comercio` DISABLE KEYS */;
INSERT INTO `comercio` (`cnpj`, `comercio_id`, `nome`, `cidade`, `rua`, `numero`, `categoria`, `img`, `senha`) VALUES
	('123.456.789-00', 5, 'Bolinha lanches', 'Cajati', 'Libertadores', 2, 'Alimenticio', NULL, NULL),
	('123.456.789-01', 7, 'Bolinha roupas', 'Registro', 'Oscar de Lima', 2, 'Vendas', NULL, NULL),
	('123.456.789-02', 9, 'Jana Comidas', 'Pariquera-Açu', 'Doze', 5, 'Alimenticio', NULL, NULL),
	('111', 10, 'Luis Lanches', 'Juquiá', 'Oscar de Lima', 5, 'Alimenticio', NULL, '111'),
	('909', 11, 'China', 'Jacupiranga', 'guará', 69, 'Alimenticio', 'C:\\img\\china.png', '123'),
	('123456', 12, 'teeste', 'a', 'a', 5, 'Alimenticio', NULL, NULL),
	('123.456.789-90', 15, 'Bolinha aaaaa', 'Cajati', 'Libertadores', 2, 'Alimenticio', NULL, NULL);
/*!40000 ALTER TABLE `comercio` ENABLE KEYS */;

-- Copiando estrutura para tabela valeacess.denuncia
CREATE TABLE IF NOT EXISTS `denuncia` (
  `avalia_visual_d` int(1) DEFAULT NULL,
  `avalia_fisica_d` int(1) DEFAULT NULL,
  `avalia_auditiva_d` int(1) DEFAULT NULL,
  `denuncia_id` int(11) NOT NULL AUTO_INCREMENT,
  `imagem_d` blob DEFAULT NULL,
  `feedback` text DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `comercio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`denuncia_id`),
  KEY `usuario_id_d` (`usuario_id`),
  KEY `comercio_id` (`comercio_id`),
  CONSTRAINT `comercio_id_d` FOREIGN KEY (`comercio_id`) REFERENCES `comercio` (`comercio_id`),
  CONSTRAINT `usuario_id_d` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela valeacess.denuncia: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `denuncia` DISABLE KEYS */;
INSERT INTO `denuncia` (`avalia_visual_d`, `avalia_fisica_d`, `avalia_auditiva_d`, `denuncia_id`, `imagem_d`, `feedback`, `usuario_id`, `comercio_id`) VALUES
	(1, 2, 1, 4, NULL, 'Foram preconceituosos!', 2, 11),
	(1, 1, 1, 5, NULL, 'Me negaram atendimento', 2, 7),
	(5, 5, 5, 6, NULL, 'wqeqwe', 2, NULL),
	(1, 1, 1, 7, NULL, '1111111111111111111111111', 2, NULL),
	(5, 5, 5, 8, NULL, NULL, 2, 5),
	(1, 1, 1, 9, NULL, NULL, 2, 5),
	(1, 1, 1, 10, NULL, '123123123', 2, 5),
	(1, 1, 1, 11, NULL, 'aaaa', 2, 5);
/*!40000 ALTER TABLE `denuncia` ENABLE KEYS */;

-- Copiando estrutura para tabela valeacess.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `cpf` varchar(14) DEFAULT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `deficiencia` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL,
  `usuario_foto` varchar(100) DEFAULT NULL,
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`usuario_id`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela valeacess.usuario: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`cpf`, `nome`, `deficiencia`, `email`, `senha`, `usuario_foto`, `usuario_id`) VALUES
	('123.456.789-00', 'Ana Jullia', NULL, 'anajullia@gmail.com', '123', NULL, 2),
	('', 'Joao', 'Paralítico', 'joao@gmail.com', '123', NULL, 3),
	('12345', 'sim', 'sim', 'nao', '12345', NULL, 6),
	('999', 'Usuário Teste', 'teste', 'usuarioteste', 'usuarioteste', NULL, 7);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
