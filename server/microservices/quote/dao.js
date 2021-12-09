const mysql = require('../../services/mysql/mysql')
const queries = require('../../util/queries')

module.exports = {

    async insertQuote(quote){

        var query = queries.INSERT_QUOTE.replace('@quote', quote.quote).replace('@author', quote.author)
        console.log(query)
        
        var result = await mysql.executeQuery(query)

        return result
    },

    async getAllQuotes(){

        var query = queries.SELECT_ALL_QUOTES
        console.log(query)
        
        //Obtenemos una promesa la cual pasaremos al modelo
        var result = await mysql.executeQuery(query)
        console.log(result)

        return result
    },

    async getQuote(id){
        
        var query = queries.SELECT_QUOTE_BY_ID.replace('@id', id)
        console.log(query)
        
        return await mysql.executeQuery(query)
    }
}