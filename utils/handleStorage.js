
const multer = require("multer");
//funcion calback se ejecuta despues de realziar algo

/**
 * 
 */
/*multer.diskStorage hace uso del disco de almacenamiento interno*/
/**
 * 
 * 
 */
const storage =multer.diskStorage({
    destination:function(req,file,cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null,pathStorage);
    },
    filename:function(req,file,cb){ 
        //Todo: los archivos tiene extenciones

        const ext = file.originalname.split(".").pop();/*obtiene el ultimo valor de un array */
        const filename = `file-${Date.now()}.${ext}`;
        cb(null,filename);
    },
});

const uploadMidleware = multer({storage});

module.exports = uploadMidleware