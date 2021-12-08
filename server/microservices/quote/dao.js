const mysql = require('../../services/mysql/mysql')
const queries = require('../../util/queries')

module.exports = {

    insertQuote(quote){

        var query = queries.INSERT_QUOTE.replace('@quote', quote.quote).replace('@author', quote.author)
        console.log(query)
        
        mysql.executeQuery(query)

        return quote
    },

    getQuote(){

        var query = queries.SELECT_ALL_QUOTES
        console.log(query)
        
        var result = mysql.executeQuery(query)

        console.log(result)

        return result
    },
}