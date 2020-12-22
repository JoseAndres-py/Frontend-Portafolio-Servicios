/*en caso de  hacer uso con el directorio controlador se 
debe importar como se observa en la siguiente linea, con el nombre del archivo js
que contiene la logica */
//const controller = require('./controller/nombredelcontrollador.js');
const express = require('express');
const morgan = require('morgan');
const db = require('./models');
const apiRouter = require('./routes');
const app = express()
const bodyParser = require('body-parser');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Middelware morgan - Peticiones
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// API ENDPOINTS
/*se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:
'/api/auth/signin'
*/
app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

// Ruta API 
app.use('/api', apiRouter);


app.set('PORT', 3000);

app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

module.exports = app;