const express = require('express')
const app = express()
const path = require('path')

//Para decodificar los JSON
app.use(express.json());

//Ajustes
app.set('port', 6969)
//app.set('views', path.join(__dirname + '/server/views'))
//app.engine('html', require('ejs').renderFile)
//app.set('view engine', 'ejs')

//Rutas
app.use(require('./server/microservices/quote/routes'))
app.use(require('./server/microservices/test/routes'))

// Servimos archivos estáticos en la carpeta public
//app.use(express.static(path.join(__dirname + '/public')))
// Servimos archivos estáticos en la carpeta images
//app.use(express.static(path.join(__dirname + '/images')))



// Starting server at 8080
app.listen(app.get('port'), function () {
  console.log('Servidor iniciado en http://localhost:' + app.get('port'))
})