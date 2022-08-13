/* eslint-disable require-jsdoc */
const Notes = require('../models/notes-model');

class NotesService {
  async getAllTodos(id, offset, limit) {
    const notes = await Notes.find({userId: id}).skip(offset).limit(limit);
    return notes;
  };

  async getNote(id) {
    const note = await Notes.findById(id);
    return note;
  };

  async createNote(todo) {
    await Notes.create(todo);
  };

  async updateNote(id, updatedText) {
    await Notes.findByIdAndUpdate(id, updatedText, {new: true});
  }

  async checkNote(id) {
    const note = await Notes.findByIdAndUpdate(id, [
      {$set: {completed: {$not: '$completed'}}},
    ]);
    return note;
  }

  async deleteNote(id) {
    await Notes.findByIdAndDelete(id);
  }
}

module.exports = new NotesService();
