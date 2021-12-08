const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

    greetings(req, res) {
        console.log("hello")
        return res.send('Hola')
    },

    randomQuote(req, res) {

        //Obtenemos la promesa
        var promise = model.getRandomQuote()

        //Si todo ha ido bien obtenemos el valor almacenado en result y lo enviamos, si hay algun error enviamos dicho error
        promise.then((result) => {
            console.log(result)
            return res.send(result)
        }).catch((err) => {
            return res.send(err)
        })  


    },

    saveQuote(req, res) {

        var body = req.body
        var promise = model.save(body)

        promise.then((result) => {
            console.log(result)
            return res.send(result)
        }).catch((err) => {
            return res.send(err)
        })  
    }
}