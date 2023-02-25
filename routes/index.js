const express  = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname; //obtiene la direccion del directorio

//const a = fs.readdirSync(PATH_ROUTES); //devuelve los archivos dentro de routes

const removeExtencion = (filename) =>{
    //regresa el nombre del archivo sin la extencion
    return filename.split(".").shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtencion(file)
    if(name !== 'index'){
        router.use(`/${name}`,require(`./${file}`))/*carga las rutas dinamicamente */
    }
})

module.exports = router