const express = require('express')
const router = express.Router()
const nameController =   require('../controllers/name.controller');
// Retrieve all names
router.get('/', nameController.findAll);
// Create a new name
router.post('/', nameController.create);
// Retrieve a single name with id
router.get('/:id', nameController.findById);
// Update a name with id
router.put('/:id', nameController.update);
// Delete a name with id
router.delete('/:id', nameController.delete);
module.exports = router