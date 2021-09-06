const express = require('express');
const app = express();
const { sequelize } = require('./models/index'); 

// Setting
const PORT = process.env.PORT || 3000;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(require('./route'));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arrcanado en http://localhost:${PORT}`);

    sequelize.sync({ force: true }).then(() => {
        console.log("Se ha establecido la conexión");
    })
});