const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

    test(req, res){
        console.log('Servidor levantado y funcionando')
        return res.send("Servidor levantado y funcionando")
    }
}