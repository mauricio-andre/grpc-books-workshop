const AuthorRepository = require('../data/AuthorRepository.js');

class AuthorController {
  constructor() {
    this.authorRepository = new AuthorRepository();
  }

  find(id) {
    const author = this.authorRepository.findById(id);
    if (!author) {
      throw new Error(`Author ${id} not found`);
    }

    return author;
  }

  list() {
    return this.authorRepository.listAll();
  }

  create(params) {
    const author = this.authorRepository.create(params);
    this.authorRepository.save();
    return author;
  }

  update(id, updateData) {
    this.find(id);
    const author = this.authorRepository.update(id, updateData);
    this.authorRepository.save();
    return author;
  }

  delete(id) {
    return this.authorRepository.delete(id).save();
  }
}

module.exports = AuthorController;
