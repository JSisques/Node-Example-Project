const mysql = require('../../services/mysql/mysql')
const queries = require('../../util/queries')

module.exports = {

    async signUp(user){

        var query = queries.INSERT_USER.replace('@email', user.email).replace('@password', user.password).replace('@rol', user.rol).replace('@lastLoginDate', user.lastLoginDate)

        return await mysql.executeQuery(query)

    },

    async getUserPassword(user){

        var query = queries.SELECT_USER_PASSWORD.replace('@email', user.email)

        return await mysql.executeQuery(query)

    },

    async getUserData(user){

        var query = queries.SELECT_USER_DATA.replace('@id', user.id)

        return await mysql.executeQuery(query)
    },

    async updateLastLoginDate(user){

        var query = queries.UPDATE_USER_LAST_LOGIN.replace('@lastLoginDate', user.lastLoginDate).replace('@id', user.id)

        return await mysql.executeQuery(query)
    }

}