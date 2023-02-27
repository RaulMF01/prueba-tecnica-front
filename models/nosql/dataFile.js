const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")

const FileDataScheme = new mongoose.Schema(
    {
        userid:{
            type: String,
            require:true
        },
        username:{
            type: String,
            require:true
        },
        date:{
            type: String,
            require:true
        },
        punchin:{
            type: String,
            require:true
        },
        punchout:{
            type: String,
            require:true
        },
    },{
        timestamps: true,/*nos registra createAt, updateAt */
        versionKey :false
    }
);
FileDataScheme.plugin(mongooseDelete , {overrideMethods:'all' });/*sobre escribir metodos nativos */

module.exports = mongoose.model("DataFileInfo", FileDataScheme)/*nombre de la coleccion */