DROP DATABASE IF EXISTS happytails;

DROP DATABASE IF EXISTS happytails;
CREATE DATABASE happytails;

USE happytails;

CREATE TABLE trails(
  item_id INT AUTO_INCREMENT NOT NULL,
  trailName VARCHAR(45) NOT NULL,
  trailDescription VARCHAR(10000) NOT NULL,
  trailLength INT NOT NULL,
  primary key(item_id)
);
