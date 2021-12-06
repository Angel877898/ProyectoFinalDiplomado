const fs = require('fs');
const path = require('path');
const KEY_FILE = path.resolve('./valid-keys.txt');
const PAYMENT_FILE_PATH = path.resolve('./payment-generated.txt');
const os = require('os');
const faker = require('faker');
const {compact} = require('lodash');

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    });
};

const getKeysFromFile = () => {
    return readFile(KEY_FILE)
        .then(data => {
            return compact(data.split(os.EOL));
        })
};

const getFromFile = (path) => {
    return readFile(path)
        .then(data => {
            return compact(data.split(os.EOL));
        })
};

const generateKeysFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(KEY_FILE, data || '', 'utf8', (err => {
            if(err) return reject();
            else resolve();
        }))
    })
};

const generatePaymentFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(PAYMENT_FILE_PATH, data || '', 'utf8', (err => {
            if(err) return reject();
            else resolve();
        }))
    })
};


const clearKeysFile = () => {
    return removeFile(KEY_FILE);
};


const removeFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.unlink(path, err => {
            if(err && err.code === 'ENOENT') resolve();
            else if (err) reject(err);
            else resolve()
        });
    })
};

module.exports = {
    readFile,
    removeFile,
    getKeysFromFile,
    clearKeysFile,
    generateKeysFile,
    getFromFile,
    generatePaymentFile,
};
