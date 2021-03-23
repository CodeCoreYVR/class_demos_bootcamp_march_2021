const fs = require('fs');
const pfs = {
  readFile(...args) {
    return new Promise((resolve, reject) => {
      fs.readFile(...args, (error, data) => {
        if (error) return reject(error);
        resolve(data);
      });
    });
  },

  writeFile(...args) {
    return new Promise((resolve, reject) => {
      fs.writeFile(...args, error => {
        if (error) return reject(error);
        resolve();
      });
    });
  },

  readdir(...args) {
    return new Promise((resolve, reject) => {
      fs.readdir(...args, (error, data) => {
        if (error) return reject(err);
        resolve(data);
      });
    });
  },
};

module.exports = pfs;