CREATE DATABASE productsOrder;

USE productsOrder;

CREATE TABLE orders(
    order_id INT PRIMARY KEY,
    order_date DATE 
);

CREATE TABLE order_item (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_name VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    price INT NOT NULL
);

INSERT INTO orders (order_id, order_date)
VALUE(101, '10-11-2023'),
    (102, '11-11-2023'),
    (103, '20-11-2023'),
    (104, '17-11-2023');

INSERT INTO order_item (order_item_id, order_id, product_name, quantity, price)
VALUE(1, 101, 'Samsung S22', 2, 100000),
    (2, 102, 'Iphone11', 3, 60000),
    (3, 103, 'Xiaomi redmi', 2, 30000 ),
    (4, 104, 'Tecno hot7', 4, 105000),
    (5, 102, 'Iphone11', 3, 60000),
    (6, 103, 'Xiaomi redmi', 1, 15000 ),
    (7, 101, 'Samsung S22', 1, 50000);
    
    -- SELECT * FROM order_item
   -- SELECT * FROM orders
   SELECT product_name,
    SUM(quantity) AS total_quantity,
    AVG(price) AS average_price
FROM orders
INNER JOIN order_item ON orders.order_id = order_item.order_id
GROUP BY product_name
ORDER BY product_name;
