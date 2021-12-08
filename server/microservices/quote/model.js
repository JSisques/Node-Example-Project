const dao = require('./dao')
const Quote = require('../../entities/quote')

module.exports = {

    getRandomQuote() {

        var result = dao.getQuote()

        return result
    },

    save(json) {

        console.log(json)

        //Comprobaciones
        var quote = json.quote
        var author = json.author

        var quote = new Quote(quote, author)
        quote.toString()

        dao.insertQuote(quote)

        return json
    }

}