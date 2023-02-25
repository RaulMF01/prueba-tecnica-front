const mongoose = require("mongoose")
// const mongooseDelete = require("mongoose-delete")

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type: String,
        },
        fileName:{
            type: String,
        },
    },{
        timestamps: true,/*nos registra createAt, updateAt */
        versionKey :false
    }
);
// StorageScheme.plugin(mongooseDelete , {overrideMethods:'all' });/*sobre escribir metodos nativos */

module.exports = mongoose.model("storage", StorageScheme)/*nombre de la coleccion */