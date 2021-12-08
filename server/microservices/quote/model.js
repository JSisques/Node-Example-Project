const dao = require('./dao')
const Quote = require('../../entities/quote')

module.exports = {

    getAllQuotes() {

        var promise = dao.getAllQuotes()

        return promise
    },

    getQuote(id){

        if(!isNaN(id)) return dao.getQuote(id)

        else return new Promise((resolve, reject) =>{
            resolve(error)
        })
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