const dao = require('./dao')
const Quote = require('../../entities/quote')

module.exports = {

    getRandomQuote() {

        var promise = dao.getQuote()

        return promise
    },

    save(json) {

        console.log(json)

        //Comprobaciones
        var quote = json.quote
        var author = json.author

        var quote = new Quote(quote, author)
        quote.toString()

        //Obtenemos la promesa y se la pasamos al controlador
        var promise = dao.insertQuote(quote)

        return promise
    }

}