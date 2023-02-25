require("dotenv").config()/**variables de entorno */
const express = require("express");
const corse = require("cors")
const dbConnect = require("./config/mongo")
const app = express()

app.use(corse())
app.use(express.json()) /*ocupar metodos post */

app.get('/data', (req, res) => {
    // Aquí se puede definir la lógica para obtener los datos a enviar al proyecto de Angular
    const data = { message: 'Hola desde Express.js' };
    res.json(data);
  });

const port = process.env.PORT || 3000;

/**
 aqui invocamos a las rutas
 */
//TODO localhost/api/_________
app.use("/api",require("./routes"))

app.listen(port, () =>{
    console.log(`tu app esta lista http:localhost:${port}` )
})

dbConnect()