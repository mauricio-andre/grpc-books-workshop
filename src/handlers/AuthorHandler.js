const authorController = new (require('../controllers/AuthorController.js'));

function list(_, callback) {
  return callback(null, authorController.list())
}

function find({request}, callback) {
  try {
    const author = authorController.find(request.id);
    return callback(null, author);
  } catch (error) {
    return callback(error, null);
  }
}

function create({request}, callback) {
  const author = authorController.create(request);
  return callback(null, author);
}

function remove({request}, callback) {
  return callback(null, authorController.delete(request.id));
}

function update({request}, callback) {
  try {
    const author = authorController.update(request.id, request.updateParams);
    return callback(null, author);
  } catch (error) {
    return callback(error, null);
  }
}

module.exports = {
  find, list, create, remove, update
};