require('dotenv').config();

module.exports = {
  username: process.env.DB_USERNAME||'root',
  password:process.env.DB_PASSWORD||'123456',
  database:process.env.DB_DATABASE||'nodecli',
  port:process.env.DB_PORT||3380,
  host:process.env.DB_HOST||'localhost',
  dialect:process.env.DB_DIALECT||'mysql',
  define:{
      timestamps:false,
      // genera claves foraneas de este tipo user_id en vez de userId
      underscored:true
  }
}
