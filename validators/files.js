const { check } = require("express-validator");
const  validateResult = require("../utils/handleValidator")

const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) =>{
        return validateResult(req, res, next);
    }
];

const validatorCreateDataFile = [
    check("userid").exists().notEmpty(),
    check("username").exists().notEmpty(),
    check("date").exists().notEmpty(),
    check("punchin").exists().notEmpty(),
    check("punchout").exists().notEmpty(),
    (req, res, next) =>{
        return validateResult(req, res, next);
    }
];

module.exports = { validatorCreateDataFile, validatorGetItem };