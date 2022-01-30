const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

class AuthorRepository {
  static dblocation = path.resolve(__dirname, './.db');
  static collectionPath = path.resolve(AuthorRepository.dblocation, 'authors.json');
  static #collection = [];

  constructor() {
    if (!fs.existsSync(AuthorRepository.dblocation)) {
      fs.mkdirSync(AuthorRepository.dblocation, { recursive: true });
    }

    if (!fs.existsSync(AuthorRepository.collectionPath)) {
      fs.writeFileSync(AuthorRepository.collectionPath, '[]');
    }

    AuthorRepository.#collection = require(AuthorRepository.collectionPath);
  }

  findById(id) {
    return AuthorRepository.#collection.find(author => author.id === id);
  }

  search(key, value) {
    return AuthorRepository.#collection.find(author => author[key] === value);
  }

  listAll() {
    return AuthorRepository.#collection;
  }

  create(author) {
    const newAuthor = {
      id: uuid.v4(),
      ...author
    };

    AuthorRepository.#collection.push(newAuthor);
    return newAuthor;
  }

  delete(id) {
    AuthorRepository.#collection = AuthorRepository.#collection.filter(
      author => {
        id !== author.id;
      });

      return this;
  }

  update(id, updateData) {
    const author = this.findById(id);
    const filteredData = Object.entries(updateData).reduce(
      (acc, [key, value]) => {
        if (value) {
          acc[key] = value;
        }

        return acc;
      }, {});

    const updateAuthor = this.delete(id).create({...author, ...filteredData });
    return updateAuthor;
  }

  #serialize(entity) {
    return JSON.stringify(entity);
  }

  save() {
    fs.writeFileSync(AuthorRepository.collectionPath, this.#serialize(AuthorRepository.#collection));
    return this;
  }
}

module.exports = AuthorRepository;
