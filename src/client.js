const grpc = require('grpc');
const path = require('path');

const AuthorDefinition = grpc.load(path.resolve(__dirname, '../proto/authors.proto'));
const authorClient = new AuthorDefinition.AuthorService('localhost:50051', grpc.credentials.createInsecure());

function promisify(method) {
  return (params) => {
    return new Promise((resolve, reject) => {
      authorClient[method](params, (err, response) => {
        if (err) {
          return reject(err);
        }

        return resolve(response);
      });
    });
  }
}

// Create Author
(async () => {
  const author = await promisify('create')({ name: 'Mauricio André' });
  console.log(author);
})();

// List all Authors
// (async () => {
//   const authors = await promisify('list')();
//   console.log(authors);
// })();

// List Author by id
// (async () => {
//   const authors = await promisify('find')({ id: '0cce8fda-65e8-44f3-ad21-d64241f7b37e' });
//   console.log(authors);
// })();

// Update author
// (async () => {
//   const authors = await promisify('update')(
//     {
//       id: '0cce8fda-65e8-44f3-ad21-d64241f7b37e',
//       updateParams: {
//         website: 'mauricio-andre.deve',
//       },
//     });
//   console.log(authors);
// })();


// Delete Author
// (async () => {
//   await promisify('remove')({ id: '0cce8fda-65e8-44f3-ad21-d64241f7b37e' });
// })();