CREATE DATABASE imperio;
SHOW databases;
USE imperio;

CREATE TABLE localidades (
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
localidad VARCHAR(255) NOT NULL,
id_provincia INT NOT NULL
);

CREATE TABLE provincias (
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
provincia_nombre VARCHAR(255) NOT NULL
);

CREATE TABLE usuarios (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR (255) NOT NULL,
last_name VARCHAR (255) NOT NULL,
dni INT,
email VARCHAR (255) NOT NULL,
address VARCHAR (255),
tel INT,
password VARCHAR(1000),
avatar VARCHAR(255),
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
localidad_id INT,
provincia_id INT, 
FOREIGN KEY(localidad_id) REFERENCES localidades(id),
FOREIGN KEY(provincia_id) REFERENCES provincias(id)
);

CREATE TABLE platforms (
id INT AUTO_INCREMENT PRIMARY KEY,
platform_name VARCHAR (255) NOT NULL
);


CREATE TABLE languages (
id INT AUTO_INCREMENT PRIMARY KEY,
lang VARCHAR (255) NOT NULL
);

CREATE TABLE categories (
id INT AUTO_INCREMENT PRIMARY KEY,
category VARCHAR (255) NOT NULL
);




CREATE TABLE products (
id INT AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR (255) NOT NULL,
price INT NOT NULL,
prod_description VARCHAR (2000) NOT NULL,
discount INT,
platform_id INT,
language_id INT,
category_id INT,
updated_at timestamp NULL DEFAULT NULL,
created_at timestamp NULL DEFAULT NULL,
image VARCHAR (255),
FOREIGN KEY(platform_id) REFERENCES platforms(id),
FOREIGN KEY(category_id) REFERENCES categories(id),
FOREIGN KEY(language_id) REFERENCES languages(id)
);

CREATE TABLE carritos (
id INT PRIMARY KEY AUTO_INCREMENT,
usuario_id INT,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE carrito_producto (
id INT PRIMARY KEY AUTO_INCREMENT,
carrito_id INT NOT NULL,
product_id INT NOT NULL,
FOREIGN KEY (carrito_id) REFERENCES carritos(id),
FOREIGN KEY (product_id) REFERENCES products(id)
);



