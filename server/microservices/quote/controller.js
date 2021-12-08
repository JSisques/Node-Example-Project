const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

    greetings(req, res){
        console.log("hello")
        return res.send('Hola')
    },

    randomQuote(req, res){

        var result = model.getRandomQuote()
        console.log(result)

        return res.send(result)
    },

    saveQuote(req, res){

        var body = req.body
        var data = model.save(body)
        
        return res.send(data)
    }
}