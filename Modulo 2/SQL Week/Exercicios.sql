-- Criar a tabela de clientes
CREATE TABLE clientes (
cliente_id SERIAL PRIMARY KEY,
nome VARCHAR(50),
cidade VARCHAR(50),
idade INT
);

-- Criar a tabela de pedidos
CREATE TABLE pedidos (
pedido_id SERIAL PRIMARY KEY,
cliente_id INT,
data_pedido DATE,
valor DECIMAL(10, 2),
FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

-- Criar a tabela de produtos
CREATE TABLE produtos (
produto_id SERIAL PRIMARY KEY,
nome_produto VARCHAR(100),
preco DECIMAL(10, 2)
);

-- Criar a tabela de itens_pedidos
CREATE TABLE itens_pedidos (
item_id SERIAL PRIMARY KEY,
pedido_id INT,
produto_id INT,
quantidade INT,
FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id),
FOREIGN KEY (produto_id) REFERENCES produtos(produto_id)
);

-- Inserir dados na tabela de clientes
INSERT INTO clientes (nome, cidade, idade) VALUES
('João Silva', 'São Paulo', 28),
('Maria Santos', 'Rio de Janeiro', 35),
('Carlos Souza', 'Belo Horizonte', 42),
('Ana Paula', 'Curitiba', 22),
('Pedro Costa', 'Porto Alegre', 30);

-- Inserir dados na tabela de pedidos
INSERT INTO pedidos (cliente_id, data_pedido, valor) VALUES
(1, '2023-01-15', 150.50),
(1, '2023-02-20', 200.00),
(2, '2023-03-05', 300.75),
(3, '2023-01-25', 450.60),
(4, '2023-02-10', 100.00);

-- Inserir dados na tabela de produtos
INSERT INTO produtos (nome_produto, preco) VALUES
('Produto A', 10.50),
('Produto B', 20.00),
('Produto C', 15.75),
('Produto D', 50.00),
('Produto E', 5.25);

-- Inserir dados na tabela de itens_pedidos
INSERT INTO itens_pedidos (pedido_id, produto_id, quantidade) VALUES
(1, 1, 2),
(1, 3, 1),
(2, 2, 5),
(3, 4, 1),
(4, 5, 3);


--- Exercicio 01 

CREATE TABLE categorias (
    id INT PRIMARY KEY,
    nome_categoria VARCHAR(50)
);



CREATE TABLE produtos (
produto_id SERIAL PRIMARY KEY,
nome_produto VARCHAR(100),
preco DECIMAL(10, 2),
categoria_id INT,
FOREIGN KEY(categoria_id) REFERENCES categorias(id)	
);

DROP TABLE categorias;



---Exercicio 2

INSERT INTO clientes (nome, cidade, idade) VALUES
 ('Lucas Lima', 'Salvador', 29);

UPDATE clientes SET cidade = 'Fortaleza' WHERE cliente_id = 3;

DELETE FROM pedidos WHERE valor < 150.00;


---Exercicio 3

SELECT * FROM clientes WHERE cidade = 'São Paulo';

SELECT * FROM pedidos ORDER BY data_pedido DESC;

SELECT * FROM clientes WHERE idade BETWEEN 25 AND 35;



---Exercicio 4

SELECT * FROM clientes WHERE nome LIKE 'A%';

SELECT cliente_id, SUM(valor) AS valor_total FROM pedidos GROUP BY cliente_id;

SELECT cidade, AVG(idade) AS media_idade FROM clientes GROUP BY cidade;

---Exercicio 5

SELECT pedidos.*, clientes.* FROM pedidos INNER JOIN clientes ON pedidos.cliente_id = clientes.cliente_id;

SELECT clientes.*, pedidos.* FROM clientes LEFT JOIN pedidos ON clientes.cliente_id = pedidos.cliente_id;

SELECT produtos.*, itens_pedidos.* FROM produtos RIGHT JOIN itens_pedidos ON produtos.produto_id = itens_pedidos.produto_id;

SELECT * FROM clientes WHERE cidade = 'São Paulo' UNION SELECT * FROM clientes WHERE cidade = 'Rio de Janeiro';


---Exercicio 6

SELECT DATE_TRUNC('month', p.data_pedido) AS mes, SUM(ip.quantidade) AS total_itens 
FROM pedidos p INNER JOIN itens_pedidos ip ON p.pedido_id = ip.pedido_id
GROUP BY DATE_TRUNC('month', p.data_pedido) ORDER BY mes;

SELECT c.*FROM clientes c LEFT JOIN pedidos p ON c.cliente_id = p.cliente_id WHERE p.pedido_id IS NULL;

SELECT * FROM pedidos ORDER BY valor DESC LIMIT 1;

SELECT p.nome_produto,SUM(ip.quantidade) AS total_itens FROM 
produtos p LEFT JOIN itens_pedidos ip ON p.produto_id = ip.produto_id
GROUP BY p.nome_produto;

SELECT p.cliente_id, SUM(p.valor) AS total_valor FROM 
pedidos p GROUP BY p.cliente_id HAVING COUNT(p.pedido_id) > 1;

SELECT c.nome_categoria,AVG(p.preco) AS preco_medio FROM
produtos p INNER JOIN categorias c ON p.categoria_id = c.categoria_id
GROUP BY c.nome_categoria;

SELECT c.* FROM clientes c INNER JOIN pedidos p ON c.cliente_id = p.cliente_id
ORDER BY p.valor DESC LIMIT 1;


---Exercicio 7

SELECT  p.* FROM produtos p WHERE p.produto_id IN (
SELECT ip.produto_id FROM itens_pedidos ip GROUP BY ip.produto_id
HAVING COUNT(ip.produto_id) > 1);

SELECT p.* FROM produtos p WHERE p.produto_id IN (
SELECT ip.produto_id FROM itens_pedidos ip GROUP BY 
ip.produto_id HAVING COUNT(ip.produto_id) > 1);



























