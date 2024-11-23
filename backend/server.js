const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const mysqlConnection = require('./database_connection');



const app = express();
app.use(cors());
app.use(json());

const soham = require('./routes');

app.use('/', soham);

app.listen(5000, ()=> console.log("Server running on port 5000!"));