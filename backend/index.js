const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.locals.value = 0;

const session = require('express-session');
    app.use(
        session({
            secret: 'secret string',
            resave: false,
            saveUninitialized: false,
        })
    );

app.get('/', function(req, res){
    /* model execution */
    res.send({
        /*ici mettre resultat model*/ 
    });
    
});

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});