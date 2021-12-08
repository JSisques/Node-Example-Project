const mysql = require('mysql')

module.exports = {

    connect() {

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'quote'
        });

        connection.connect();

        console.log("Conexion con BBDD establecida")

        return connection
    },

    disconnect(connection) {
        console.log("Conexion BBDD finalizada")
        return connection.end()
    },

    executeQuery(query) {
        var connection = this.connect()

        var result;

        const a = connection.query(query, (err, results, fields)=>{
            if (err) throw err;
            console.log('The solution is: ', results);
            
            result = results

        })

        this.disconnect(connection)

        return result
    },

    delete() {

    },

    update() {

    },

    get() {

    }
}