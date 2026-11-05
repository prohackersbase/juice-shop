declare const sequelize: any
declare const email: string

// ruleid: sequelize-interpolated-query
sequelize.query(`SELECT * FROM users WHERE email = '${email}'`)

// ok: sequelize-interpolated-query
sequelize.query('SELECT * FROM users WHERE email = :email', {
  replacements: { email }
})
