

const express = require("express");
const router = express.Router();
const uploadMidleware = require("../utils/handleStorage");
const { getItems, getItem,deleteItem, updateItem ,createItem } = require("../controllers/storage");

//Todo http:/localhost:3001/storage

/**
 * Lista item
 */
router.get("/", getItems);
/**
 * detalle de item
 */
router.get("/:id", getItem);
/**
 * Elimina item
 */
router.delete("/:id", deleteItem);
/**
 * crea item
 */
router.post("/",uploadMidleware.single("myfile"),createItem)

module.exports = router;