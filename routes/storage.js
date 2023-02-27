

const express = require("express");
const router = express.Router();
const uploadMidleware = require("../utils/handleStorage");
const { deleteItem, updateItem ,createItem, createItemFile, getDataFiles, getItem, getItems } = require("../controllers/storage");
const { validatorCreateDataFile, validatorGetItem } = require("../validators/files");

//Todo http:/localhost:3001/storage

router.post("/",uploadMidleware.single("myfile"),createItem)


router.post('/files', uploadMidleware.single('myfile'), createItemFile)

router.get("/", getItems);

router.get("/files", getDataFiles);


/*actualziar un item */
//router.put("/:id",validatorGetItem,validatorCreateDataFile, updateItem);
router.put("/:id",validatorGetItem,validatorCreateDataFile, updateItem);

router.delete("/:id",validatorGetItem, deleteItem);

module.exports = router;