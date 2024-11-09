const express = require('express');
const router = express.Router();
const mysqlConnection = require('./database_connection');

router.get('/', (req, res)=>{
    mysqlConnection.connVariables.query("SELECT * FROM hiusers2534", (err, data)=>{
        if (!err) {
            res.send(data[0].message);
        }
        else{
            console.log(err);
        }
    })
})

module.exports = router;