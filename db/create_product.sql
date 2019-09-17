CREATE TABLE product (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(30),
    description VARCHAR(250),
    price INTEGER, 
    image_url TEXT
);

INSERT INTO product (name, description, price, image_url)
VALUES ($1, $2, $3, $4)