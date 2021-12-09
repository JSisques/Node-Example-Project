const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

     async allQuotes(req, res) {

        //Obtenemos la promesa
        var result = await model.getAllQuotes()
        console.log(result)

        return res.send(result)
    },

    async saveQuote(req, res) {

        var body = req.body
        var result = await model.save(body)
        console.log(result)

        return res.send(result)
    },

    async getQuote(req, res) {

        var id = req.params.ID
        console.log(id)

        var result = await model.getQuote(id)
        console.log(result)

        return res.send(result)
    }
}