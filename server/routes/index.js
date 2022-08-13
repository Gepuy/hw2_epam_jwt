/* eslint-disable linebreak-style */
const Router = require('express');
const router = new Router();
const NotesRouter = require('./notesRouter');
const UserRouter = require('./userRouter');
const AuthRouter = require('./authRouter');
const authMiddleware = require('../middlewares/authMiddleware');

router.use('/users', authMiddleware, UserRouter);
router.use('/notes', authMiddleware, NotesRouter);
router.use('/auth', AuthRouter);

module.exports = router;
