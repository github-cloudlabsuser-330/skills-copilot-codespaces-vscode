-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Insert 5 products into the table
INSERT INTO products (name, price) VALUES ('Apple', 1.00);
INSERT INTO products (name, price) VALUES ('Banana', 0.50);
INSERT INTO products (name, price) VALUES ('Cherry', 3.00);
INSERT INTO products (name, price) VALUES ('Date', 2.00);
INSERT INTO products (name, price) VALUES ('Elderberry', 4.00);