const dao = require('./dao')
const security = require('../../util/security')
const User = require('../../entities/user')
const time = require('../../util/time')

module.exports = {

    async signUp(body) {

        //Comprobar correo electronico
        var email = body.email.toLowerCase().trim()
        var password = await security.hashPassword(body.password)

        var user = new User(null, email, password, null, null, null)

        user.toString()

        return await dao.signUp(user)
    },

    async login(body) {

        var email = body.email.toLowerCase().trim()
        var password = await security.hashPassword(body.password)

        var user = new User(null, email, password, null, null, null)

        var resultQuery = await dao.getUserPassword(user)
        var userId = resultQuery[0].ID
        var userPassword = resultQuery[0].PASSWORD

        console.log(userId)
        console.log(userPassword)

        user.id = userId

        if(await security.comparePasswords(password, userPassword)){
            console.log("Coinciden")

            resultQuery = await dao.getUserData(user)
            user.password = resultQuery[0].PASSWORD
            user.rol = resultQuery[0].ROL
            user.creationDate = resultQuery[0].CREATION_DATE
            user.lastLoginDate = time.getTime()

            dao.updateLastLoginDate(user)

            return user
        } else{
            return "Las contraseñas no coinciden"
        }
        
    }

}