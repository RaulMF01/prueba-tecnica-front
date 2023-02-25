const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL
const { handleHttpError } = require("../utils/handleError")

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
        const data = await storageModel.findById({});
        res.send({data})
    }catch(e){
        handleHttpError(res,"Error en actualziar items");
    }
 }
/**
 * crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem  = async (req,res) => {
    const { body, file } = req
    console.log(file)
    const fileData ={
        namefile : file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data})
 }
/**
 * actualziar unr egistro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem  = async (req,res) => { }
/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem  = async (req,res) => { }


module.exports = { getItems, getItem, createItem, updateItem, deleteItem };