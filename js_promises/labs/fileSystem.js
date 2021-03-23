const pfs = require('./pfs');

const pathToDir = './samples';
pfs
  .readdir(pathToDir)
  .then(fileNames =>
    Promise.all(fileNames.map(fileName => pfs.readFile(`${pathToDir}/${fileName}`, 'utf8'))),
  )
  .then(filesContents => pfs.writeFile('file.txt', filesContents.join('\n')))
  .then(() => console.log('Wrote to file: file.txt'))
  .catch(console.error);
