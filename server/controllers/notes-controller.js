/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
const NotesService = require('../services/NotesService');
const ApiError = require('../error/ApiError');

const SUCCESS_MESSAGE = 'Success';

class NotesController {
    async getAllTodos(req, res, next) {
        try {
            const {offset = 0, limit = 0} = req.query;
            const notes = await NotesService
                .getAllTodos(req.user.id, offset, limit);
            return res.json({
                offset: +offset,
                limit: +limit,
                count: notes.length,
                notes,
            });
        } catch (e) {
            console.log(e);
            next(ApiError.internal('string'));
        }
    };

    async getNote(req, res, next) {
        try {
            const note = await NotesService.getNote(req.params.id);
            if (!note) {
                return next(ApiError.badRequest('Note was not found'));
            }
            return res.json({note: note});
        } catch (e) {
            next(ApiError.internal('string'));
        }
    };

    async createNote(req, res, next) {
        try {
            if (req.body.text) {
                const payload = {userId: req.user.id, ...req.body};
                await NotesService.createNote(payload);
                return res.json({message: SUCCESS_MESSAGE});
            }
            return next(ApiError.badRequest('Error with creating note'));
        } catch (e) {
            next(ApiError.internal('string'));
        }
    };

    async updateNote(req, res, next) {
        try {
            if (!req.body.text) {
                return next(ApiError.badRequest('Enter text field'));
            }
            await NotesService.updateNote(req.params.id, req.body);
            return res.json({message: SUCCESS_MESSAGE});
        } catch (e) {
            next(ApiError.internal('string'));
        }
    }

    async checkNote(req, res, next) {
        try {
            await NotesService.checkNote(req.params.id);
            return res.json({message: SUCCESS_MESSAGE});
        } catch (e) {
            console.log(e);
            next(ApiError.internal('string'));
        }
    }

    async deleteTodo(req, res, next) {
        try {
            await NotesService.deleteNote(req.params.id);
            return res.json({message: SUCCESS_MESSAGE});
        } catch (e) {
            next(ApiError.internal('string'));
        }
    }
}

module.exports = new NotesController();
