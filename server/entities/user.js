module.exports = class User{

    constructor(id, email, password, rol, creationDate, lastLoginDate){

        var date = new Date()
        date.setHours(date.getHours() + 1)
        date = date.toISOString().slice(0, 19).replace('T', ' ');

        this.id = id || 0
        this.email = email
        this.password = password
        this.rol = rol || "user"
        this.creationDate = creationDate || date
        this.lastLoginDate = lastLoginDate || date
    }

    toString(){
        console.log(this.email)
        console.log(this.password)
        console.log(this.rol)
        console.log(this.creationDate)
        console.log(this.lastLoginDate)
    }
}