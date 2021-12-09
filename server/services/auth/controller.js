const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

    async login(req, res) {
        var body = req.body

        var result = await model.login(body)
        console.log(result)

        return res.send(result)

    },

    async signUp(req, res) {
        var body = req.body

        var result = await model.signUp(body)
        console.log(result)

        return res.send(result)

    }
}