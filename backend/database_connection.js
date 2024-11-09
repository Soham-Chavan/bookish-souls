const mysql2 = require('mysql2');

const mysqlConnection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    database: "testing",
    password: "Arcturus@1109",
    multipleStatements: true
})

function connectionToDB(){
    mysqlConnection.connect((err)=>{
        if (!err) {
            console.log("Connected!");
        }
        else{
            console.log("Failed to connect: " + err)
        }
    })
}

module.exports = { 
    functionNames: connectionToDB(),
    connVariables: mysqlConnection,
 };
