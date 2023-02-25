const mongoose = require("mongoose");

const dbConnect = () => {/*funcion de flecha  */
    const DB_URI = process.env.DB_URI;
    mongoose.set("strictQuery", false);
    mongoose.connect(DB_URI,{
       
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    (err, res) =>{
        if(!err){
            console.log("*********** CONEXION CORRECTA ***************")
        }else{
            console.log("*********** ERROR DE CONEXION ***************")
        }
    })
}

module.exports = dbConnect /*exporta la funcion */