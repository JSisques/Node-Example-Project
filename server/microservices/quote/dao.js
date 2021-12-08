const mysql = require('../../services/mysql/mysql')
const queries = require('../../util/queries')

module.exports = {

    insertQuote(quote){

        var query = queries.INSERT_QUOTE.replace('@quote', quote.quote).replace('@author', quote.author)
        console.log(query)
        
        var promise = mysql.executeQuery(query)

        return promise
    },

    getAllQuotes(){

        var query = queries.SELECT_ALL_QUOTES
        console.log(query)
        
        //Obtenemos una promesa la cual pasaremos al modelo
        var promise = mysql.executeQuery(query)

        return promise
    },

    getQuote(id){
        
        var query = queries.SELECT_QUOTE_BY_ID.replace('@id', id)
        console.log(query)
        
        return mysql.executeQuery(query)
    }
}