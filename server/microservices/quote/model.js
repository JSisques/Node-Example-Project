const dao = require('./dao')
const Quote = require('../../entities/quote')

module.exports = {

    async getAllQuotes() {

        var result = await dao.getAllQuotes()
        console.log(result)

        return result
    },

    async getQuote(id){

        if(!isNaN(id)) return await dao.getQuote(id)

        else return "El id " + id + " no es un número"
        
    },

    async save(json){

        console.log(json)

        //Comprobaciones
        var quote = json.quote
        var author = json.author

        var quote = new Quote(quote, author)
        quote.toString()

        //Obtenemos la promesa y se la pasamos al controlador
        var result = await dao.insertQuote(quote)

        return result
    }

}