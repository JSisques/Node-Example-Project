const bcrypt = require("bcryptjs");

module.exports = {

  async hashPassword(password) {

    const saltRounds = bcrypt.genSaltSync(10);

    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })

    return hashedPassword


  },

  async comparePasswords(password, originalPassword) {

    console.log("Contraseña enviada \t" + password)
    console.log("Contraseña en la BBDD \t" + originalPassword)

    const response = await new Promise((resolve, reject) => {
      bcrypt.compare(password, originalPassword, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })

    return response
  }

}