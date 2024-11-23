const express = require('express');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const mysqlConnection = require('./database_connection');



router.post('/contact', (req, res) => {
    const { email, name, surname, msg } = req.body;
    const sql_query = 'INSERT INTO Contact_Souls27 (email, name, surname, message) VALUES (?, ?, ?, ?)';
    const values = [email, name, surname, msg];

    mysqlConnection.connVariables.query(sql_query, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Server error");
        } else {
            console.log("Contact saved successfully!");
            return res.status(200).send("Contact saved successfully");
        }
    });
});


// Sign-Up Endpoint
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    
    // Generate a unique user ID
    const userId = uuidv4();

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = 'INSERT INTO users2710 (user_id, username, email, password) VALUES (?, ?, ?, ?)';
        const values = [userId, username, email, hashedPassword];

        mysqlConnection.connVariables.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error during sign-up:', err);
                return res.status(500).send('Sign-Up Failed');
            }
            res.status(201).send('User signed up successfully!');
        });
    } catch (err) {
        res.status(500).send('Error in Sign-Up: ' + err.message);
    }
});

//Sign in Endpoint
router.post('/signin', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users2710 WHERE username = ?';
    mysqlConnection.connVariables.query(sql, [username], async (err, results) => {
        if (err) {
            console.error('Error during sign-in:', err);
            return res.status(500).send('Sign-In Failed');
        }

        if (results.length === 0) {
            return res.status(401).send('Invalid Username or Password');
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).send('Invalid Username or Password');
        }

        // Send the unique user ID along with other information
        res.status(200).send({
            message: `Welcome, ${user.full_name || user.username}!`,
            user_id: user.user_id // Include user_id
        });
    });
});






module.exports = router;