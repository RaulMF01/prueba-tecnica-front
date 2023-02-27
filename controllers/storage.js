const { matchedData } = require("express-validator");
const { storageModel, fileDataModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL
const { handleHttpError } = require("../utils/handleError")
const Excel = require('exceljs');
const XLSX = require('xlsx');
const dataFile = require("../models/nosql/dataFile");

/**
 * obtener detalle
 * @param {*} req 
 * @param {*} res 
 */

const getItems  = async (req,res) => {/**para promesas se ocupa un async y await */
    try{
         const data = await storageModel.find({});
        res.send({data})
    }catch(e){
        handleHttpError(res,"Error en ver items");
    }
 }
/**
 * obtener un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem  = async (req,res) => {
    try{
        const data = await fileDataModel.findById({});
        res.send({data})
    }catch(e){
        handleHttpError(res,"Error al obtener archivos" + e);
    }
 }
/**
 * crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem  = async (req,res) => {
    try{
        const { body, file } = req
        const fileData ={
            namefile : file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        //const data = fileData ;
        const data = await storageModel.create(fileData)
        res.send({data})
    }catch(e){
        handleHttpError(res,"Error en agregar el archivo");
    }
    
 }

 const createItemFile  = async (req,res, next) => {
    try{
        const fileName = req.file.path;
        const workbook = XLSX.readFile(fileName);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        let DataFiles = [];
        const dataUppload = fileDataModel
        // Definir un formato personalizado para celdas con valores de tipo hora
        const horaFmt = 'hh:mm';

        XLSX.utils.sheet_to_json(worksheet, { header: 1 })
        .slice(1) // omitir la primera fila (encabezados de columna)
        .forEach((row, rowIndex) => {
            let [userid, username, date, punchin, punchout] = row;
            
            
            const Entrada = XLSX.SSF.format("hh:mm", punchin);
            const salida = XLSX.SSF.format("hh:mm", punchout);
            const fechaGuardar = XLSX.SSF.format("dd/mm/yyyy", date);

            const newDataFile = {
                userid: userid,
                username: username,
                date: fechaGuardar,
                punchin: Entrada,
                punchout: salida
              };
            

            fileDataModel.create(newDataFile)
            .then(() => console.log(`Inserted data ${userid} (${username}) (${fechaGuardar}) (${Entrada}) (${salida})`))
            .catch(err => console.error(`Error inserting data ${userid} (${username}) (${fechaGuardar}) (${Entrada}) (${salida}):`, err));
        });
        res.send({DataFiles})
    }catch(e){
        handleHttpError(res,"Error en agregar el archivo" +e);
    }
 }

 const getDataFiles  = async (req,res) => {/**para promesas se ocupa un async y await */
    try{
         const data = await fileDataModel.find({});
        res.send({data})
    }catch(e){
        handleHttpError(res,"Error en ver informacion");
    }
 }
/**
 * actualziar unr egistro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem  =  async (req,res) => { 
    try{
        const { id, ...body } = matchedData(req);
        const data = await fileDataModel.findOneAndUpdate(
            id, body
        );/*encuentra y actualiza */
        res.send({data})
    }catch(e){
        handleHttpError(res,"Error en actualziar items" + e);
    }
}
/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem  = async (req,res) => {
    try{
        req=matchedData(req);//hace un barrido de los parametros que deben obtener
        const {id} = req;
        const data = await fileDataModel.delete({ _id:id })
        res.send({data})
    }catch(e){
        handleHttpError(res,"ERROR_Delete_ITEM" + e)
    }
 }


module.exports = { getItems, getItem, createItem, updateItem, deleteItem, createItemFile, getDataFiles };