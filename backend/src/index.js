const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota /Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação no back-end
  */
/**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após o simbolo de "?"(Filtros, paginação)
 * Route Params: Parâmetros ultiliados para indentifcar recursos
 * Request Body: Corpo da Requisisçãom ultilizado para criar ou alterar recursos
 * 
 */


 /**
  * Bancos de dados:
  * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Drivers: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */