
const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

// home
router.get('/', (req, res)=>{
    res.json({
        foo:"bar"
    })
})

// Users

router.get('/users', UserController.all);
router.get('/address', AddressController.all);
module.exports = router;