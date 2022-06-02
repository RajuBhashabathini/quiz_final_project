var express = require('express');
var router = express.Router();

let dbConnection = require('./../database/sqlconnection').localConnect();

router.get('/', function (req, res, next) {
  dbConnection.query('select * from userdetailsquiz', (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  })
});

router.post('/practice', function (req, res, next) {
  let {
    firstname, lastname, email, password, phonenumber 
  } = req.body // destructing of object property

  let insert_query = `INSERT INTO userdetailsquiz
  (firstname,lastname, email, password,phonenumber)
    VALUES ('${firstname}','${lastname}','${email}','${password}', '${phonenumber}')`
  dbConnection.query(insert_query, (error, result, fields) => {
    if (error) {
      res.send(error);
      throw error;
    } 
    else {
      console.log(result);
      res.send('user profile added successfully');
    }
  });
});

//login and signup page connection

router.post('/login', (req, res, next) => {
  let {
    email,
    password
  } = req.body; // destructing of object property 

  let userFound = `select * from userdetailsquiz  WHERE email = '${email}' and password= '${password}'`;

  dbConnection.query(userFound, (error, result, fields) => {

    if (error) {
      res.send(error);
    } else {
      if (result.length) {
        // res.send(`{message: 'user found', usercount: 1}`);
        res.json(result)
      } else {
        // res.send(`{message: 'user no found', usercount: 0}`);
        res.json({message: 'user not found', usercount: 0})
      }
    }
  });
});

module.exports = router;
