const fs = require('fs/promises');
const formidable = require('formidable');

async function readFile(fileName) {
    return JSON.parse(await fs.readFile(__dirname + `/data/${fileName}.json`));
}

async function writeFile(fileName, data) {
    await fs.writeFile(__dirname + `/data/${fileName}.json`, JSON.stringify(data, null, 2));
}

async function deleteFile(path) {
    await fs.rm(__dirname + path);
}

async function formParser(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            const formData = decodeURIComponent(
                body.split('=')[1].replaceAll('+', ' ')
            );
            resolve(formData);
        });

        req.on('error', (error) => reject(error))
    })
}

async function multipartFormParser(req) {
    const form = new formidable.IncomingForm();
    return new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            if (err) {
                reject(err);
            }
            const savePath = `/data/images/${files.image.newFilename}.jpeg`

            let image;

            if (files.image.originalFilename == ''){
                image = undefined;
            } else {
                image = await fs.readFile(files.image.filepath);
                await fs.writeFile(__dirname + savePath, image);
            }
            
            resolve({...fields, img: image ? savePath : undefined});
        });
    })
}

module.exports = {
    readFile,
    writeFile,
    deleteFile,
    multipartFormParser,
    formParser,
}