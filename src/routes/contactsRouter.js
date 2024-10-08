const express = require("express");
const router = express.Router();

const{
    getAllContacts,
    createcontact
}=require('../controles/contacts.controllers')

router.use(express.json())


//Metodo GET
router.get('/', getAllContacts);

//metodo get parasm
//router.get('/:id', getContact)

//Metodo GET QUERY
//router.get('/search', findContact);

// Método POST
router.post('/', createcontact );

module.exports = router;