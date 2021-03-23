const fs = require('fs');

// fs.readFile('./index.html', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// })

function readFile(path, opts) {
  return new Promise((res, rej) => {
    fs.readFile(path, opts, (err, data) => {
      if (err) {
        rej(err);
      }
      res(data);
    })
  })
}

readFile('./index.html', 'utf8')
  .then((fileContents) => {
    console.log(fileContents);
    fs.writeFile('./copyOfIndex.html', fileContents, (err) => {})
  })
  .catch((err) => {
    console.log(err);
  })
