/* eslint-disable linebreak-style */
const Router = require('express');
const router = new Router();
const notesController = require('../controllers/notes-controller');

router.get('/', notesController.getAllTodos);
router.post('/', notesController.createNote);
router.get('/:id', notesController.getNote);
router.put('/:id', notesController.updateNote);
router.patch('/:id', notesController.checkNote);
router.delete('/:id', notesController.deleteTodo);

module.exports = router;
