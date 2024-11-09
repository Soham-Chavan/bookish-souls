const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const mysqlConnection = require('./database_connection');



const app = express();
app.use(cors());
app.use(json());

mysqlConnection.connVariables.query('CREATE TABLE IF NOT EXISTS hiusers2534(message varchar(255) PRIMARY KEY)', (err)=>{
    if (!err) {
        console.log("Table created!")
    }
    else{
        console.log("Failed to create: " + err)
    }
})

const insertVal = mysqlConnection.connVariables.query("INSERT INTO hiusers2534 (message) SELECT 'Hello User' WHERE NOT EXISTS(SELECT 1 FROM hiusers2534 WHERE message='Hello User')", (err)=>{
    if (!err) {
        console.log('Value inserted');
    }
    else{
        console.log("Failed to insert table into hiusers2535: " + err);
    }
})





const soham = require('./routes');

app.use('/soham', soham);

app.listen(5000, ()=> console.log("Server running on port 5000!"));